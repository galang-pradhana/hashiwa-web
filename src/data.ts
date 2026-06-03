import { Service, PeaceValue, LanguageSupport, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "translation-localization",
    title: "Translation & Localization",
    titleJp: "翻訳・ローカライズ",
    shortDesc: "Bridge cultures with highly accurate localized content tailored to Indonesian and Japanese markets.",
    description: "Language is more than just words; it represents culture, nuance, and intent. We adapt your services, software, marketing campaigns, and technical documents to resonate authentically with target audiences, while maintaining pristine professional standards.",
    icon: "Languages",
    languages: ["Japanese", "Indonesian", "English"],
    workflow: [
      "Linguistic Audit & Cultural Assessment",
      "Native Glossary & Tone Formulation",
      "Double-pass Translation (Native Translator + Specialized Editor)",
      "Linguistic Quality Assurance (LQA) & Styling Review"
    ],
    useCases: [
      "Japanese companies adapting legal, compliance & policy standards for Indonesian subsidiaries.",
      "Global software startups localizing technical manuals, UX copy, and product platforms.",
      "Creative agencies seeking native translation of promotional videos, campaigns, and websites."
    ],
    ctaText: "Request a Translation Quote",
    details: {
      format: "B2B Document & Digital Asset Localization",
      target: "Corporate Entities, Tech Startups, Publishers"
    }
  },
  {
    id: "annotation",
    title: "Data Annotation & Labeling",
    titleJp: "アノテーション・データ作成",
    shortDesc: "Fuel artificial intelligence and machine learning models with precise human-annotated data across multiple languages.",
    description: "High-performance AI requires stellar ground-truth training data. PT. Hashiwa Global Strategy manages high-quality specialized crowds to tag, categorize, and annotate text, audio, and images for advanced machine learning models.",
    icon: "BrainCircuit",
    languages: ["Japanese", "Vietnamese", "Indonesian", "Dutch", "Arabic", "English"],
    workflow: [
      "Guideline Alignment & Pilot Annotation Run",
      "Secured Annotation Management & Multi-tier Peer Validation",
      "Automated Syntax & Consistency Checks",
      "Structured Format Delivery (JSON, CSV, XML)"
    ],
    useCases: [
      "Natural Language Processing (NLP) models requiring deep sentiment labeling in diverse dialects.",
      "Speech recognition databases built from multi-accented native audio recordings.",
      "Computer vision projects requiring precise boundary drawing and classification for industrial automation."
    ],
    ctaText: "Start Annotation Project",
    details: {
      format: "Image, Text, and Voice labeling on-demand",
      target: "AI Developers, Tech Enterprises, Research Institutes",
      extra: "Strict compliance with client security guidelines and high-quality validation loops."
    }
  },
  {
    id: "japanese-learning-center",
    title: "Japanese Learning Center (JLC)",
    titleJp: "ハシワ日本語ラーニングセンター",
    shortDesc: "Professional language training programs from JLPT N5 to N1, tailored for career development.",
    description: "Hashiwa JLC provides structured training designed specifically for professionals, students, and employees looking to achieve fluency in Japanese. Combining experienced native instructors and modern learning materials, we guide students through JLPT levels in a friendly, outcome-oriented atmosphere.",
    icon: "GraduationCap",
    workflow: [
      "Initial Placement Test & Skill Profile Formulation",
      "Hybrid Class Engagement (Interactive Live Online Sessions & On-site Classroom)",
      "Continuous Module Progress Check & Accent Alignment",
      "Dedicated JLPT Preparation Bootcamps"
    ],
    useCases: [
      "Corporate employees looking to coordinate smoothly with Japanese executives or overseas branches.",
      "Students targeting study-abroad scholarships or professional career paths in Tokyo.",
      "General learners seeking practical, fluent conversational ability and professional vocabulary."
    ],
    ctaText: "Register for Class",
    details: {
      location: "Ruko Sinpasa Summarecon Bekasi, Unit A-20, West Java",
      level: "JLPT N5, N4, N3, N2, and N1 classes available",
      format: "Flexible Formats (Online, Offline & Corporate Hybrid-Inhouse)"
    }
  },
  {
    id: "japanese-locale-services",
    title: "Japanese Locale Services",
    titleJp: "和文・日本企業支援",
    shortDesc: "End-to-end organizational support and cultural integration for Japanese companies operating in Indonesia.",
    description: "Entering or operating in a new region brings intense organizational and operational challenges. We serve as your trusted on-the-ground execution partner, optimizing workforce coordination, policy implementation, cultural mediation, and administrative navigation.",
    icon: "Handshake",
    workflow: [
      "Strategic Needs Assessment & Operational Mapping",
      "Bilingual Policy Framing & Intercultural Workshops",
      "On-field Liaison Support & Crowdworker Coordination",
      "Ongoing Administrative Progress Supervision"
    ],
    useCases: [
      "Japanese executives establishing regional headquarters and needing native operational guidance.",
      "Joint-venture organizations running complex teams requiring daily bilingual policy syncs.",
      "Expatriates looking for comprehensive local transition, training, and strategic workforce solutions."
    ],
    ctaText: "Schedule Consultation",
    details: {
      format: "Custom B2B Project Management",
      target: "Japanese Joint Ventures, MNCs, Brand Representatives"
    }
  }
];

export const PEACE_VALUES: PeaceValue[] = [
  {
    letter: "P",
    word: "Professional",
    meaning: "私たちはプロフェッショナルです",
    description: "We hold ourselves to the highest global service deliverables, ensuring error-free accuracy, deep intellectual discipline, and clear, client-focused business workflows in every single translation and annotation cycle.",
    icon: "ShieldAlert"
  },
  {
    letter: "E",
    word: "Energetic",
    meaning: "私たちはエネルギッシュです",
    description: "Driven by passion and progress, we bring fresh, dynamic approaches to crowd management and language education. We energize our learners and teams, pushing boundaries to discover superior ways of working.",
    icon: "Zap"
  },
  {
    letter: "A",
    word: "Agile",
    meaning: "私たちは俊敏に動きます",
    description: "True to our legacy as 'Agile Explorers on Your Call', we adapt in real-time to evolving technological directions, changing project guidelines, and tight timelines without sacrificing structural quality.",
    icon: "Compass"
  },
  {
    letter: "C",
    word: "Care",
    meaning: "私たちは関わるすべての人を大切にします",
    description: "We design with empathy and foster respectful communities. From crowdworkers to corporate clients, we listen to every critical requirement, cultivating long-term partnerships built on shared concern and collaborative success.",
    icon: "Heart"
  },
  {
    letter: "E",
    word: "Ethic",
    meaning: "私たちは高潔に行動します",
    description: "Integrity is our absolute center. We practice rigorous corporate compliance, respect data confidentiality in AI annotation projects, and practice complete honesty, transparency, and ethical respect in all business agreements.",
    icon: "Bookmark"
  }
];

export const LANGUAGES: LanguageSupport[] = [
  { code: "jp", name: "Japanese", originalName: "日本語", flag: "🇯🇵", level: "Native-led Localization / N1-N5 Annotation" },
  { code: "vn", name: "Vietnamese", originalName: "Tiếng Việt", flag: "🇻🇳", level: "High Quality Dialect Training & Structured Annotation" },
  { code: "id", name: "Indonesian", originalName: "Bahasa Indonesia", flag: "🇮🇩", level: "Complete Native Localization & Accent Validation" },
  { code: "nl", name: "Dutch", originalName: "Nederlands", flag: "🇳🇱", level: "Advanced European Syntax Adaptation & Labeling" },
  { code: "ar", name: "Arabic", originalName: "العربية", flag: "🇸🇦", level: "High-precision Semitic Language Text & Audio Tagging" },
  { code: "en", name: "English", originalName: "English Language", flag: "🇬🇧", level: "Universal Target Standard Verification Services" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Akira Suzuki",
    role: "Director of AI Operations",
    company: "NextGen Technologies (Tokyo)",
    quote: "Hashiwa delivered incredible annotated speech training datasets for our Southeast Asian NLP models. Their quality control process is flawless, capturing micro-accents and syntax nuances in ways traditional large agencies miss.",
    avatarSeed: "Akira"
  },
  {
    id: "t2",
    name: "Dewi Lestari",
    role: "HR Development Manager",
    company: "Indo-Japan Logistics Venture",
    quote: "Our expatriate managers and local operations team were struggling with coordination gaps. Hashiwa's Japanese Locale integration program and customized business training bridged the cultural gap in just six weeks.",
    avatarSeed: "Dewi"
  },
  {
    id: "t3",
    name: "Sven van der Meer",
    role: "Product Owner",
    company: "LingoFlow SaaS",
    quote: "Superb localized translations and LQA protocols! Hashiwa's attention to cultural context transforms translated text into highly engaging interactive software for Indonesian users.",
    avatarSeed: "Sven"
  }
];

export const FAQS = [
  {
    question: "How does PT. Hashiwa Global Strategy manage crowds and data security?",
    answer: "We understand that raw data is highly confidential. Our annotators work under strict, encrypted terminal guidelines, and have signed binding Non-Disclosure Agreements (NDAs). We use peer validation loops to secure high quality while maintaining absolute system hygiene."
  },
  {
    question: "Where is the Japanese Learning Center located and are classes virtual?",
    answer: "Our flagship campus is at Ruko Sinpasa Summarecon Bekasi, Unit A-20, accessible easily from major transport routes. We support fully physical classes, hybrid systems via live stream, and special on-site inhouse corporate training packages."
  },
  {
    question: "What languages can you coordinate for Translation and Annotation?",
    answer: "Our core specialties are Japanese, English, and Indonesian. For Annotation processes, our certified crowdworker team supports Japanese, Vietnamese, Indonesian, Dutch, Arabic, and English securely."
  }
];
