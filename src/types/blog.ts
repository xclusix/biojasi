export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  readingTimeMinutes: number;
  publishDate: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  featured: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface FaqItem {
  id: string;
  category: 'USO_APLICACION' | 'BRISAS_VS_SHOTS' | 'CADUCIDAD_CALIDAD' | 'ENVIOS_PAGOS';
  question: string;
  answer: string;
}

export interface BotanicalSpecimen {
  id: string;
  commonName: string;
  scientificName: string;
  role: string;
  harvestSeason: string;
  origin: string;
  benefits: string[];
  olfactoryNotes: string;
  imageUrl: string;
}

export interface DistributorLocation {
  id: string;
  name: string;
  type: string;
  address: string;
  city: string;
  schedule: string;
  phone?: string;
  mapUrl: string;
}
