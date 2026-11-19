import React from 'react';
import { Container } from '@/components/ui/Container';
import { brandPillars } from '@/data/pillars';
import { ShieldCheck } from 'lucide-react';

export const BrandPillarsGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[10px] font-sub uppercase tracking-[0.2em] font-bold shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-botanical-forest" />
            <span>HONESTIDAD RADICAL & COMPROMISO</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-charcoal-800 tracking-tight">
            Nuestros 10 Pilares de Pureza
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal-500 max-w-xl mx-auto font-light leading-relaxed">
            Cada fórmula se concibe con devoción por las plantas, respeto a Tu biología y armonía con la tierra mexicana.
          </p>
        </div>

        {/* 10-Pillars Infographic Grid (5 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {brandPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-sand-200 shadow-sm hover:shadow-antigravity hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-sand-50 border border-sand-200 flex items-center justify-center text-charcoal-800 group-hover:border-charcoal-800 transition-colors">
                    <IconComponent className="w-5 h-5 text-charcoal-700" />
                  </div>
                  <span className="font-mono text-[10px] text-charcoal-400 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display font-medium text-base text-charcoal-800 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="font-body text-[11px] text-charcoal-500 font-light leading-relaxed">
                    {pillar.shortDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
