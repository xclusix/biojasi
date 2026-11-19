import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ContactForm, FaqAccordion } from '@/components/contact';
import { BRAND } from '@/lib/constants';

export const ContactPage: React.FC = () => {
  const cleanPhone = BRAND.social.whatsappNumber.replace(/[^0-9]/g, '');
  const waContactUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    '¡Hola! Me comunico desde la página web de BIOJÄSI ® para una consulta.'
  )}`;

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-[#FAF8F5] space-y-24 sm:space-y-32">
      {/* 1. Header & Contact Information + Form */}
      <section>
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h1 className="font-display font-medium text-4xl sm:text-6xl text-charcoal-800 tracking-tight">
              Contacto & Distribuidores
            </h1>
            <p className="font-body text-sm sm:text-base text-charcoal-500 max-w-xl mx-auto font-light leading-relaxed">
              Escríbenos con confianza; con gusto resolvemos tus dudas sobre nuestras creaciones o puntos de encuentro en Querétaro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* WhatsApp Card */}
              <div className="p-8 rounded-3xl bg-[#F5EFE8] border border-sand-300 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#25D366] text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-xl text-charcoal-800">
                      Atención por WhatsApp
                    </h3>
                    <span className="text-[10px] font-sub uppercase tracking-wider text-charcoal-500 font-bold">
                      Atención Personal
                    </span>
                  </div>
                </div>

                <p className="font-body text-xs text-charcoal-600 font-light leading-relaxed">
                  ¿Tienes dudas para elegir tu producto o quieres coordinar un pedido personalizado? Escríbenos directamente.
                </p>

                <a
                  href={waContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-sub uppercase font-bold tracking-wider transition-colors shadow-sm"
                >
                  Abrir Chat de WhatsApp
                </a>
              </div>

              {/* Direct Info List */}
              <div className="p-8 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-6">
                <h4 className="font-display font-medium text-lg text-charcoal-800 border-b border-sand-200 pb-3">
                  Canales Oficiales BIOJÄSI ®
                </h4>

                <ul className="space-y-4 text-xs text-charcoal-600 font-light">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-botanical-forest flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal-800 font-medium block">Ubicación del Taller:</strong>
                      <span>{BRAND.origin.place}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-botanical-forest flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal-800 font-medium block">Correo Electrónico:</strong>
                      <a href={`mailto:${BRAND.social.email}`} className="hover:underline">
                        {BRAND.social.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-botanical-forest flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal-800 font-medium block">Teléfono / Atención:</strong>
                      <a href={`tel:${BRAND.social.whatsappNumber}`} className="hover:underline">
                        {BRAND.social.whatsappDisplay}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-botanical-amber flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-charcoal-800 font-medium block">Horario de Atención:</strong>
                      <span>Lunes a Sábado de 9:00 AM a 6:00 PM</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Preguntas Frecuentes (FAQ Acordeón) */}
      <section className="py-20 bg-[#F5EFE8] border-t border-sand-300">
        <Container size="xl">
          <div className="max-w-4xl mx-auto">
            <FaqAccordion />
          </div>
        </Container>
      </section>
    </div>
  );
};
