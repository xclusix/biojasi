import React from 'react';
import { Leaf, Sun, Heart, ShieldCheck, MapPin, Compass, Droplets } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { HerbariumCarousel, DistribuidoresMap } from '@/components/about';
import { BRAND } from '@/lib/constants';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-[#FAF8F5] space-y-24 sm:space-y-32">
      {/* 1. Hero & La Historia */}
      <section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text Story (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="font-display font-medium text-4xl sm:text-6xl text-charcoal-800 tracking-tight leading-[1.06]">
                Nuestra Historia: <br />
                <span className="italic font-normal text-charcoal-500">Ciencia Ancestral</span>
              </h1>

              <div className="space-y-4 font-body text-xs sm:text-base text-charcoal-600 font-light leading-relaxed">
                <p>
                  BIOJÄSI ® nació en Querétaro a partir de un anhelo profundo y honesto: devolverle al cuidado personal la nobleza y sabiduría de las plantas que nuestros ancestros cultivaron y respetaron durante siglos.
                </p>
                <p>
                  Observamos cómo la industria convencional llenó los anaqueles de sulfatos, parabenos, siliconas sintéticas y perfumes artificiales que saturaban el cuerpo y asfixiaban la piel. Decidimos regresar a la tierra. Establecimos nuestro huerto agroecológico familiar y taller de destilación artesanal en el semidesierto queretano.
                </p>
                <p>
                  Aquí, cada ramillete de romero, cada flor de lavanda y cada penca de nopal se cosecha a mano en su momento de máxima vitalidad biológica. No aceleramos los procesos con químicos ni producimos en masa: elaboramos en pequeños lotes con devoción botánica.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sand-100 border border-sand-300 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-botanical-forest flex-shrink-0" />
                <span className="text-xs font-sub uppercase font-bold text-charcoal-800">
                  {BRAND.origin.place} • {BRAND.origin.craft}
                </span>
              </div>
            </div>

            {/* Right: Photography (5 cols) */}
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden bg-sand-200 border border-sand-300 shadow-antigravity-float">
              <img
                src="/assets/instagram/12_manos_gracias_tierra.jpg"
                alt="Manos en contacto con la tierra fértil en Querétaro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-sand-50 font-display italic text-lg sm:text-xl">
                &ldquo;La tierra nos regala el equilibrio; nosotros solo destilamos su sabiduría.&rdquo;
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Misión, Visión & Valores */}
      <section className="py-20 bg-[#F5EFE8] border-y border-sand-300">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Misión */}
            <div className="p-8 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sand-50 border border-sand-200 flex items-center justify-center text-botanical-forest">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-2xl text-charcoal-800">
                Nuestra Misión
              </h3>
              <p className="font-body text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Elaborar fórmulas botánicas vivas y biocompatibles que transformen las rutinas diarias en rituales conscientes de bienestar, honrando la biodiversidad y la sabiduría de la tierra mexicana.
              </p>
            </div>

            {/* Visión */}
            <div className="p-8 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sand-50 border border-sand-200 flex items-center justify-center text-botanical-amber">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-2xl text-charcoal-800">
                Nuestra Visión
              </h3>
              <p className="font-body text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                Ser el referente en México de cuidado personal artesanal y aromaterapia emocional, demostrando que la cosmética viva y sostenible supera con creces a la industria sintética tradicional.
              </p>
            </div>

            {/* Valores */}
            <div className="p-8 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sand-50 border border-sand-200 flex items-center justify-center text-botanical-rose">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-2xl text-charcoal-800">
                Nuestros Valores
              </h3>
              <ul className="font-body text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed space-y-1.5">
                <li>• <strong>Fórmulas Claras:</strong> Cero químicos ocultos.</li>
                <li>• <strong>Respeto por la Vida:</strong> 100% libre de crueldad.</li>
                <li>• <strong>Comercio Local:</strong> Respeto y apoyo al campo queretano.</li>
                <li>• <strong>Cuidado sin Prisa:</strong> Elaboración consciente a tu propio ritmo.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Filosofía del Proceso de Producción */}
      <section>
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-charcoal-800 tracking-tight">
              Filosofía de Producción Artesanal
            </h2>
            <p className="font-body text-sm sm:text-base text-charcoal-500 max-w-xl mx-auto font-light leading-relaxed">
              Cada creación pasa por un proceso de destilación por arrastre de vapor a baja temperatura para conservar íntegros los principios activos y aromas sutiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-sand-50 border border-sand-300/80 space-y-3">
              <span className="font-mono text-xs text-charcoal-400 font-bold">01</span>
              <h4 className="font-display font-medium text-xl text-charcoal-800">
                Cosecha al Amanecer
              </h4>
              <p className="font-body text-xs text-charcoal-600 font-light leading-relaxed">
                Recolectamos las hojas y flores cuando el rocío matutino retiene la mayor concentración de moléculas aromáticas en sus glándulas secretoras.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-sand-50 border border-sand-300/80 space-y-3">
              <span className="font-mono text-xs text-charcoal-400 font-bold">02</span>
              <h4 className="font-display font-medium text-xl text-charcoal-800">
                Destilación a Fuego Lento
              </h4>
              <p className="font-body text-xs text-charcoal-600 font-light leading-relaxed">
                Utilizamos vapor de agua pura de manantial para separar los aceites esenciales e hidrolatos sin someterlos a solventes sintéticos ni aditivos químicos.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-sand-50 border border-sand-300/80 space-y-3">
              <span className="font-mono text-xs text-charcoal-400 font-bold">03</span>
              <h4 className="font-display font-medium text-xl text-charcoal-800">
                Envasado en Vidrio Ámbar
              </h4>
              <p className="font-body text-xs text-charcoal-600 font-light leading-relaxed">
                El vidrio ámbar protege la vitalidad de los aceites esenciales de la luz solar directa, conservando su frescura y pureza botánica.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Carrusel de Imágenes de los 12 Ingredientes (Herbarium) */}
      <section id="herbarium">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[11px] font-sub uppercase font-bold tracking-[0.22em] text-charcoal-400">
              HERBARIO VIVO DE QUERÉTARO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-charcoal-800 tracking-tight">
              Los 12 Ingredientes Estrella
            </h2>
            <p className="font-body text-sm sm:text-base text-charcoal-500 max-w-xl mx-auto font-light leading-relaxed">
              Conoce la taxonomía, procedencia y virtudes botánicas tradicionales de las plantas cultivadas en nuestro huerto agroecológico.
            </p>
          </div>

          <HerbariumCarousel />
        </Container>
      </section>

      {/* 5. Distribuidores & Puntos de Encuentro */}
      <section id="distribuidores" className="py-20 bg-[#F5EFE8] border-t border-sand-300">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[11px] font-sub uppercase font-bold tracking-[0.22em] text-charcoal-400">
              PUNTOS DE VENTA & TIANGUIS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-charcoal-800 tracking-tight">
              Puntos de Encuentro & Distribuidores
            </h2>
            <p className="font-body text-sm sm:text-base text-charcoal-500 max-w-xl mx-auto font-light leading-relaxed">
              Encuentra nuestras fórmulas en espacios sustentables y tianguis orgánicos en Querétaro y San Miguel de Allende.
            </p>
          </div>

          <DistribuidoresMap />
        </Container>
      </section>
    </div>
  );
};
