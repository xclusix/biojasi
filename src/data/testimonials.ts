export interface Testimonial {
  id: string;
  name: string;
  location: string;
  productUsed: string;
  quote: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mariana S.',
    location: 'Querétaro, Qro.',
    productUsed: 'Shampoo BIOJÄSI 8',
    quote:
      'Llevaba meses buscando un shampoo sin sulfatos que realmente hiciera espuma suave y no me dejara el cabello pesado. El aroma a romero fresco en la regadera me cambia por completo el ánimo de la mañana.',
    rating: 5,
    date: '14 de Febrero, 2026',
  },
  {
    id: 'test-2',
    name: 'Sofía V.',
    location: 'Ciudad de México',
    productUsed: 'Brisa Aromaterapia Armonía',
    quote:
      'La Brisa Armonía se volvió mi ritual infaltable a las 3:00 de la tarde en la oficina. Tres disparos, respiro hondo y suelto la prisa. La combinación de lavanda y palo santo es mágica.',
    rating: 5,
    date: '28 de Enero, 2026',
  },
  {
    id: 'test-3',
    name: 'Carlos M.',
    location: 'San Miguel de Allende, Gto.',
    productUsed: 'Kit Esencial BIOJÄSI',
    quote:
      'Se lo regalé a mi esposa y los dos terminamos usándolo. El empaque en madera con flores secas y la calidad de los aceites se siente como un lujo artesanal muy honesto.',
    rating: 5,
    date: '02 de Febrero, 2026',
  },
  {
    id: 'test-4',
    name: 'Valeria R.',
    location: 'Guadalajara, Jal.',
    productUsed: 'Brisa Respira',
    quote:
      'Trabajo muchas horas frente a la computadora y la brisa Respira me despeja la cabeza en segundos. Es una sensación de frescura pura como estar en el bosque.',
    rating: 5,
    date: '19 de Febrero, 2026',
  },
];
