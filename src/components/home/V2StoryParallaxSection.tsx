import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BiojasiFlowerMask } from '@/components/ui/BiojasiFlowerMask';
import { BiojasiOrnament } from '@/components/ui/BiojasiOrnament';
import { Sparkles, Leaf, Award, HeartHandshake } from 'lucide-react';

export const V2StoryParallaxSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yFlower = useTransform(scrollYProgress, [0.4, 0.8], [60, -60]);
  const yBottle = useTransform(scrollYProgress, [0.4, 0.8], [-40, 40]);
  const rotateBottle = useTransform(scrollYProgress, [0.4, 0.8], [8, -12]);

  const badges = [
    { label: '100% Natural', icon: Leaf },
    { label: 'Vegano', icon: Sparkles },
    { label: 'Sin sulfatos ni siliconas', icon: Award },
    { label: 'Elaborado en Querétaro', icon: HeartHandshake },
  ];

  return (
    <section className="relative w-full py-20 sm:py-32 bg-[#FAF8F5] overflow-hidden border-t border-[#1C1917]/10">
      <Container size="xl">
        {/* Centered Editorial Statement (Pages 5 & 6 of Home Biojäsi 1) */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#177333]/10 text-[#177333] mb-2">
              <BiojasiOrnament size={16} color="#177333" />
              <span className="font-sans font-bold text-xs tracking-wider">
                Nuestra historia
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-light leading-[1.18] tracking-tight">
              &ldquo;Fórmulas botánicas vivas destiladas a mano en Querétaro para acompañar el descanso, la claridad mental y la regeneración capilar.&rdquo;
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-sans text-xs sm:text-sm text-charcoal-600 tracking-widest font-medium">
              Para cada cuerpo, en cualquier momento.
            </p>
          </ScrollReveal>
        </div>

        {/* Parallax Organic Composition (Flower Mask + Floating Bottle) */}
        <div className="relative mt-16 sm:mt-24 max-w-5xl mx-auto min-h-[380px] sm:min-h-[460px] flex items-center justify-around">
          {/* Left: Floating Organic Flower Mask */}
          <motion.div
            style={{ y: yFlower }}
            className="relative z-10"
          >
            <BiojasiFlowerMask
              imageSrc="/assets/extracted/catalogo_p8_img1_935x1633.jpeg"
              size={300}
              className="sm:w-[320px] sm:h-[320px]"
            />
          </motion.div>

          {/* Center/Right: Floating Authentic Product in Parallax */}
          <motion.div
            style={{ y: yBottle, rotate: rotateBottle }}
            className="relative z-20 hidden md:block"
          >
            <div className="w-56 lg:w-64 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/extracted/direccion_creativa_p11_img1_1920x1080.jpeg"
                alt="Elaboración botánica en Querétaro"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* 4 Clean Value Badges in Rounded Pills */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={i}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#1C1917]/15 shadow-sm text-charcoal-700 font-sans text-xs font-semibold hover:border-[#177333] hover:text-[#177333] transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-[#177333]" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
