import React from 'react';
import { MapPin, Calendar, Phone, ExternalLink } from 'lucide-react';
import { distributors } from '@/data/distributors';

export const DistribuidoresMap: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
      {distributors.map((dist) => (
        <div
          key={dist.id}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-sand-300/90 shadow-sm hover:shadow-antigravity transition-all duration-300 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-3">
            <span className="text-[10px] font-sub uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-sand-100 text-charcoal-700 inline-block">
              {dist.type}
            </span>

            <h4 className="font-display font-medium text-xl text-charcoal-800 leading-snug">
              {dist.name}
            </h4>

            <p className="font-body text-xs text-charcoal-600 font-light flex items-start gap-2 pt-1">
              <MapPin className="w-4 h-4 text-botanical-forest flex-shrink-0 mt-0.5" />
              <span>{dist.address}, {dist.city}</span>
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-sand-200/80 text-xs text-charcoal-500 font-light">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-botanical-amber" />
              <span>{dist.schedule}</span>
            </div>

            {dist.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-botanical-forest" />
                <span>{dist.phone}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
