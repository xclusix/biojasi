import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { testimonials } from '@/data/testimonials';

export const TestimonialsBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5EFE8] border-y border-sand-300">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[10px] font-sub uppercase tracking-[0.2em] font-bold shadow-sm">
            <Heart className="w-3.5 h-3.5 text-botanical-rose" />
            <span>EXPERIENCIAS DE APAPACHO COTIDIANO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-medium text-charcoal-800 tracking-tight">
            Lo que Dice Nuestra Comunidad
          </h2>
        </div>

        {/* Testimonials 4-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-3xl bg-white border border-sand-200 shadow-sm flex flex-col justify-between space-y-4 text-left"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 text-botanical-amber">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-xs text-charcoal-700 font-light leading-relaxed italic">
                &ldquo;{test.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-2 border-t border-sand-200/80">
                <strong className="font-display font-medium text-sm text-charcoal-800 block">
                  {test.name}
                </strong>
                <span className="text-[10px] text-charcoal-400 block font-light">
                  {test.location} • {test.productUsed}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
