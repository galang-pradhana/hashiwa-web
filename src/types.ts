export interface Service {
  id: string;
  title: string;
  titleJp: string;
  shortDesc: string;
  description: string;
  icon: string;
  languages?: string[];
  workflow: string[];
  useCases: string[];
  ctaText: string;
  details?: {
    location?: string;
    level?: string;
    format?: string;
    target?: string;
    extra?: string;
  };
}

export interface PeaceValue {
  letter: string;
  word: string;
  meaning: string;
  description: string;
  icon: string;
}

export interface LanguageSupport {
  code: string;
  name: string;
  originalName: string;
  flag: string;
  level: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarSeed: string;
}
