import { Leaf, Heart, Recycle, Sparkles, ShieldCheck, MapPin, Droplets, Sparkle, RefreshCw, Box } from 'lucide-react';

export interface BrandPillar {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
}

export const brandPillars = [
  {
    id: 'pillar-1',
    title: '100% Extractos Naturales',
    shortDesc: 'Aceites esenciales e hidrolatos botánicos puros sin diluciones sintéticas.',
    icon: Leaf,
  },
  {
    id: 'pillar-2',
    title: 'Libre de Crueldad Animal',
    shortDesc: 'Respeto absoluto a todas las formas de vida. Jamás probado en animales.',
    icon: Heart,
  },
  {
    id: 'pillar-3',
    title: 'Envases Sustentables',
    shortDesc: 'Vidrio ámbar reciclable y materiales pensados para reutilizarse.',
    icon: Box,
  },
  {
    id: 'pillar-4',
    title: 'Ingredientes Orgánicos',
    shortDesc: 'Cosechas agroecológicas libres de pesticidas y fertilizantes sintéticos.',
    icon: Sparkles,
  },
  {
    id: 'pillar-5',
    title: 'Fórmula 100% Vegana',
    shortDesc: 'Exclusivamente activos del reino vegetal y mineral de la tierra.',
    icon: Sparkle,
  },
  {
    id: 'pillar-6',
    title: 'Cero Parabenos ni Sulfatos',
    shortDesc: 'Sin ftalatos, siliconas pesadas ni fragancias artificiales que agredan Tu piel.',
    icon: ShieldCheck,
  },
  {
    id: 'pillar-7',
    title: 'Producción Local en Querétaro',
    shortDesc: 'Elaboración artesanal en pequeños lotes con Ciencia Ancestral.',
    icon: MapPin,
  },
  {
    id: 'pillar-8',
    title: 'Fórmulas Biodegradables',
    shortDesc: 'El agua de Tu regadera regresa limpia a la tierra sin contaminar mantos.',
    icon: Droplets,
  },
  {
    id: 'pillar-9',
    title: 'Sin Microplásticos',
    shortDesc: 'Cero polímeros contaminantes; textura natural y honesta.',
    icon: RefreshCw,
  },
  {
    id: 'pillar-10',
    title: '100% Reciclable',
    shortDesc: 'Ciclo cerrado que promueve la economía circular y el menor residuo posible.',
    icon: Recycle,
  },
];
