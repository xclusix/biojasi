import React from 'react';
import { Truck, Check } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { formatMxn } from '@/lib/formatters';

export const FreeShippingBar: React.FC = () => {
  const { getTotals } = useCartStore();
  const { isFreeShipping, freeShippingProgress, amountNeededForFreeShipping } =
    getTotals();

  return (
    <div className="p-4 rounded-2xl bg-sand-100 border border-sand-300 space-y-2">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {isFreeShipping ? (
            <div className="w-6 h-6 rounded-full bg-botanical-forest/15 text-botanical-forest flex items-center justify-center">
              <Check className="w-3.5 h-3.5" />
            </div>
          ) : (
            <Truck className="w-4 h-4 text-charcoal-700" />
          )}
          <span className="font-medium text-charcoal-800">
            {isFreeShipping ? (
              <span className="text-botanical-forest font-medium">
                Tu pedido cuenta con envío sin costo a todo México
              </span>
            ) : (
              <span className="font-light">
                Agrega <strong className="font-medium">{formatMxn(amountNeededForFreeShipping)}</strong> para envío sin costo
              </span>
            )}
          </span>
        </div>
        <span className="font-mono text-[11px] text-charcoal-500 font-medium">
          {freeShippingProgress}%
        </span>
      </div>

      {/* Progress Track */}
      <div className="w-full h-2 bg-sand-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-charcoal-800 rounded-full transition-all duration-500"
          style={{ width: `${freeShippingProgress}%` }}
        />
      </div>
    </div>
  );
};
