/**
 * Authoritative BIOJÄSI ® Brand Constants & MIV v1.1 Specifications
 */

export const BRAND = {
  name: 'BIOJÄSI ®',
  plainName: 'BIOJÄSI',
  slogan: 'Reconecta con tu esencia.',
  taglines: [
    'Regresa a lo natural • Date tu tiempo • Respira.',
    'Ciencia Ancestral.',
  ],
  manifesto:
    'Hemos seleccionado cada pieza buscando ése equilibrio, donde las plantas y sus aromas, sean una guía para el cuidado que Tú mereces. Te invitamos a descubrir nuestras creaciones, abre los sentidos y reconecta con tu esencia.',
  origin: {
    city: 'Querétaro',
    state: 'Querétaro',
    country: 'México',
    place: 'Huerto familiar y taller artesanal en Querétaro',
    craft: 'Elaboración artesanal en pequeños lotes',
  },
  social: {
    instagram: 'https://instagram.com/biojasi',
    instagramHandle: '@biojasi',
    facebook: 'https://facebook.com/biojasi',
    whatsappNumber: '+524421234567',
    whatsappDisplay: '+52 442 123 4567',
    email: 'contacto@biojasi.com',
  },
  voiceTone: {
    archetype: 'La Amiga Sabia',
    characteristics: ['Cercana', 'Sensorial', 'Serena', 'Empática', 'Terrenal'],
    inviolableRules: {
      mayusculaAfectiva: 'Escribir Tú, Ti, Tu centro, Tus manos con mayúscula afectiva.',
      modoInvitacion: 'Modo invitación sin urgencia comercial agresiva.',
      ceroPromesasMedicas: 'Cero promesas de cura clínica; acompañamiento y bienestar.',
      ceroAnglicismos: 'Evitar anglicismos de moda; destacar Ciencia Ancestral Mexicana.',
      armoniaDiurna: 'Brisa Armonía es para cualquier hora del día, no solo la noche.',
      nombreShampoo: 'Shampoo BIOJÄSI 8.',
    },
  },
} as const;

export const COMMERCE_CONFIG = {
  currency: 'MXN',
  currencySymbol: '$',
  countryCode: 'MX',
  freeShippingThresholdMxn: 899,
  standardShippingFeeMxn: 135,
  expressShippingFeeMxn: 210,
  taxRateIncluded: 0.16, // 16% IVA incluido en México
  discountCodes: [
    {
      code: 'RECONECTA10',
      type: 'PERCENTAGE' as const,
      value: 10,
      description: '10% de apapacho en Tu primera orden',
      minSubtotal: 0,
    },
    {
      code: 'BIENESTAR899',
      type: 'FIXED' as const,
      value: 100,
      description: '$100 MXN de regalo en órdenes mayores a $899',
      minSubtotal: 899,
    },
  ],
  paymentRails: [
    { name: 'Mercado Pago', methods: ['Tarjetas', 'OXXO', 'SPEI', 'Meses sin Intereses'] },
    { name: 'Stripe', methods: ['Visa', 'Mastercard', 'American Express', 'Apple Pay'] },
    { name: 'WhatsApp Concierge', methods: ['Transferencia directa', 'Atención personalizada'] },
  ],
} as const;
