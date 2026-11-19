import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Sparkle, MessageCircle } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { FreeShippingBar } from './FreeShippingBar';
import { formatMxn } from '@/lib/formatters';
import { BRAND, COMMERCE_CONFIG } from '@/lib/constants';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    appliedDiscount,
    discountError,
    applyDiscountCode,
    removeDiscount,
    getTotals,
  } = useCartStore();

  const [couponInput, setCouponInput] = useState('');
  const { itemCount, subtotalMxn, discountMxn, shippingMxn, totalMxn, isFreeShipping } = getTotals();

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const success = applyDiscountCode(couponInput);
    if (success) setCouponInput('');
  };

  const cleanPhone = BRAND.social.whatsappNumber.replace(/[^0-9]/g, '');
  const itemsSummary = items.map((i) => `• ${i.name} (${i.variantLabel}) x${i.quantity} = $${i.priceMxn * i.quantity} MXN`).join('\n');
  const waCartMessage = `¡Hola! Me gustaría coordinar el pedido de mi canasta en BIOJÄSI ®:\n\n${itemsSummary}\n\nSubtotal: ${formatMxn(subtotalMxn)}\nEnvío: ${shippingMxn === 0 ? 'GRATIS' : formatMxn(shippingMxn)}\nTotal: ${formatMxn(totalMxn)}\n\n¿Me apoyan con los datos de pago y envío? Muchas gracias.`;
  const whatsappCheckoutUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waCartMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Slide-over Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-screen max-w-md bg-[#FAF8F5] border-l border-sand-300 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-sand-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-charcoal-800" />
                  <h3 className="font-display font-medium text-2xl text-charcoal-800">
                    Tu Canasta de Bienestar
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeCart}
                  aria-label="Cerrar canasta"
                  className="w-9 h-9 rounded-full bg-sand-100 hover:bg-sand-200 border border-sand-300 flex items-center justify-center text-charcoal-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Free Shipping Progress */}
                <FreeShippingBar />

                {/* Items List */}
                {items.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-sand-100 border border-sand-300 flex items-center justify-center mx-auto text-charcoal-400">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-medium text-xl text-charcoal-800">
                        Tu canasta está esperando por Ti
                      </h4>
                      <p className="font-body text-xs text-charcoal-500 font-light max-w-xs mx-auto">
                        Descubre nuestras fórmulas vivas de aromaterapia y cuidado capilar para iniciar Tu ritual.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={closeCart}
                      className="px-6 py-3 rounded-full bg-charcoal-800 text-sand-50 text-xs font-sub uppercase font-bold tracking-wider hover:bg-charcoal-900 transition-colors shadow-sm"
                    >
                      Explorar Creaciones
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 divide-y divide-sand-200/80">
                    {items.map((item) => (
                      <div
                        key={`${item.productId}-${item.variantId}`}
                        className="pt-4 first:pt-0 flex gap-4 items-start"
                      >
                        {/* Thumbnail */}
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-[#FAF8F5] p-1.5 flex items-center justify-center border border-sand-200 flex-shrink-0">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-display font-medium text-base text-charcoal-800 leading-snug">
                              {item.name}
                            </h4>
                            <button
                              type="button"
                              onClick={() => removeItem(item.productId, item.variantId)}
                              aria-label="Eliminar producto"
                              className="text-charcoal-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <span className="text-[11px] text-charcoal-500 block font-light">
                            {item.variantLabel}
                          </span>

                          <div className="flex items-center justify-between pt-2">
                            {/* Quantity Controls */}
                            <div className="inline-flex items-center rounded-full bg-white border border-sand-300 p-0.5 shadow-sm">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.productId,
                                    item.variantId,
                                    item.quantity - 1
                                  )
                                }
                                aria-label="Disminuir cantidad"
                                className="w-6 h-6 rounded-full flex items-center justify-center text-charcoal-600 hover:bg-sand-100"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-xs font-mono font-medium text-charcoal-800">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.productId,
                                    item.variantId,
                                    item.quantity + 1
                                  )
                                }
                                aria-label="Aumentar cantidad"
                                className="w-6 h-6 rounded-full flex items-center justify-center text-charcoal-600 hover:bg-sand-100"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <span className="font-display font-medium text-sm text-charcoal-800">
                              {formatMxn(item.priceMxn * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer / Summary */}
              {items.length > 0 && (
                <div className="p-6 bg-[#F5EFE8] border-t border-sand-300 space-y-4">
                  {/* Coupon Code Section */}
                  <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Cupón (ej. RECONECTA10)"
                          className="w-full px-4 py-2.5 rounded-full bg-white border border-sand-300 text-xs uppercase placeholder:normal-case text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-800"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2.5 rounded-full bg-charcoal-800 text-sand-50 text-[10px] font-sub uppercase font-bold tracking-wider hover:bg-charcoal-900 transition-colors"
                      >
                        Aplicar
                      </button>
                    </div>

                    {discountError && (
                      <p className="text-[11px] text-red-600 font-medium pl-2">
                        {discountError}
                      </p>
                    )}

                    {appliedDiscount && (
                      <div className="flex items-center justify-between p-2 rounded-xl bg-botanical-forest/10 border border-botanical-forest/20 text-xs text-botanical-forest font-medium">
                        <span className="flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5" />
                          <span>{appliedDiscount.code}: {appliedDiscount.description}</span>
                        </span>
                        <button
                          type="button"
                          onClick={removeDiscount}
                          className="text-[10px] uppercase font-bold underline hover:text-red-700"
                        >
                          Quitar
                        </button>
                      </div>
                    )}
                  </form>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-charcoal-600 pt-2 border-t border-sand-300/80">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-mono text-charcoal-800">{formatMxn(subtotalMxn)}</span>
                    </div>

                    {discountMxn > 0 && (
                      <div className="flex justify-between text-botanical-forest font-medium">
                        <span>Descuento de Apapacho</span>
                        <span className="font-mono">-{formatMxn(discountMxn)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Envío a México</span>
                      <span className="font-mono text-charcoal-800">
                        {isFreeShipping ? 'GRATIS' : formatMxn(shippingMxn)}
                      </span>
                    </div>

                    <div className="flex justify-between text-base font-display font-semibold text-charcoal-800 pt-2 border-t border-sand-300">
                      <span>Total Estimado</span>
                      <span className="font-mono">{formatMxn(totalMxn)} MXN</span>
                    </div>
                  </div>

                  {/* Checkout Buttons */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={whatsappCheckoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-sub uppercase font-bold tracking-widest transition-all shadow-antigravity flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Coordinar Pedido por WhatsApp</span>
                    </a>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-charcoal-500 font-light">
                      <span>Preparado a mano y enviado con cuidado desde Querétaro</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
