import React, { useState } from 'react';
import { Input, Textarea, Button } from '@/components/ui';
import { Check, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'CONSULTA_PRODUCTO',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'CONSULTA_PRODUCTO',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="rounded-3xl bg-white border border-sand-300 p-8 sm:p-12 shadow-antigravity space-y-6 text-left">
      <div className="space-y-2">
        <h3 className="font-display font-medium text-3xl text-charcoal-800">
          Escríbenos un Mensaje
        </h3>
        <p className="font-body text-xs sm:text-sm text-charcoal-500 font-light leading-relaxed">
          Escríbenos tu duda o consulta sobre nuestros productos y con gusto te responderemos pronto.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-8 rounded-2xl bg-botanical-forest/10 border border-botanical-forest/20 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-botanical-forest text-white flex items-center justify-center mx-auto">
            <Check className="w-6 h-6" />
          </div>
          <h4 className="font-display font-medium text-2xl text-charcoal-800">
            ¡Mensaje Recibido!
          </h4>
          <p className="font-body text-xs text-charcoal-600 font-light max-w-sm mx-auto">
            Hemos recibido tu mensaje. Nos pondremos en contacto contigo a la brevedad.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="text-xs text-botanical-forest font-bold uppercase underline tracking-wider pt-2"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Nombre Completo *"
              required
              placeholder="¿Cómo te gusta que te llamen?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <Input
              label="Correo Electrónico *"
              type="email"
              required
              placeholder="tu@correo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Teléfono / WhatsApp (Opcional)"
              type="tel"
              placeholder="+52 442..."
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />

            <div className="space-y-1.5 text-left">
              <label
                htmlFor="contact-subject"
                className="block text-xs font-sub uppercase font-bold tracking-wider text-charcoal-700"
              >
                Motivo de Consulta
              </label>
              <select
                id="contact-subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-sand-300 text-charcoal-800 text-sm focus:outline-none focus:border-charcoal-800 shadow-sm"
              >
                <option value="CONSULTA_PRODUCTO">Asesoría de Producto o Ritual</option>
                <option value="ESTADO_PEDIDO">Dudas sobre Envío o Mi Pedido</option>
                <option value="DISTRIBUCION">Puntos de Venta y Distribución</option>
                <option value="TALLERES">Visita al Huerto / Talleres</option>
                <option value="OTRO">Otro mensaje</option>
              </select>
            </div>
          </div>

          <Textarea
            label="Tu Mensaje *"
            required
            rows={5}
            placeholder="Escribe aquí con toda confianza..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <Button
            type="submit"
            size="lg"
            isLoading={isSubmitting}
            fullWidth
            className="flex items-center justify-center gap-2"
          >
            <span>Enviar Mensaje</span>
            <Send className="w-4 h-4" />
          </Button>
        </form>
      )}
    </div>
  );
};
