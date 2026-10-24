import type { Lang } from "@/lib/i18n";

export type CatKey = "All" | "Web Design" | "Events" | "Portfolio" | "Food";

export type Localized = { en: string; fr: string };

/** A full-page capture, shown through a scrolling viewport. width/height are the file's pixel size. */
export type Screen = { src: string; width: number; height: number; alt: Localized };

export type CaseStudy = {
  tagline: Localized;            // one-line hook
  challenge: Localized;          // "The brief": who the client is and what the work needed to do
  approach: Localized;           // 2-4 sentences, brand + design direction
  principles?: { title: Localized; text: Localized }[]; // 3 short design principles
  outcomes: Localized[];         // 3-5 qualitative bullets
  features: Localized[];         // capability chips, benefit wording only
  services: Localized[];         // e.g. "Brand refresh", "Web design"
  cover: { src: string; alt: Localized };   // 16:10 crop: social image + structured data
  after: Screen;                 // full-page capture of the new site's home page (hero)
  before?: Screen;               // full-page capture of the original site, shown neutrally
  pages?: { label: Localized; screen: Screen }[]; // further pages, explored via tabs
  gallery?: { src: string; alt: Localized }[];
  quote?: { text: Localized; author: string; role: Localized }; // only if client approved
  metrics?: { label: Localized; value: string }[];              // only if real data
  year?: string;
};

export type Project = {
  id: number;
  slug: string;
  name: string;
  client: Localized | string;
  tags: CatKey[];
  year: string;
  gradient: string;
  image: string;
  url: string;
  desc: Localized | string;       // longer copy, home page
  descShort: Localized | string;  // shorter copy, /work grid
  imgPosition?: string;
  featured?: boolean;             // shown in the home page "Selected work"
  caseStudy?: CaseStudy;          // presence of this = button + page exist
};

export const projects: Project[] = [
  {
    id: 9, slug: "harmonia-therapy-center", name: "Harmonia Therapy Center",
    client: { en: "Health & Wellness", fr: "Santé et bien-être" },
    tags: ["Web Design"], year: "2026",
    gradient: "linear-gradient(135deg, #2E3030 0%, #4A4D45 50%, #6B7A50 100%)",
    image: "/work-harmonia.webp", url: "https://harmoniatherapycenter.ca/", featured: true,
    desc: {
      en: "A considered digital home for a multidisciplinary psychotherapy practice: bilingual, editorial and quietly confident.",
      fr: "Une présence numérique soignée pour une pratique de psychothérapie multidisciplinaire : bilingue, éditoriale et sereinement assurée.",
    },
    descShort: {
      en: "Editorial, bilingual website for a psychotherapy practice in Châteauguay.",
      fr: "Site web éditorial et bilingue pour une pratique de psychothérapie à Châteauguay.",
    },
    caseStudy: {
      tagline: {
        en: "A digital home as considered as the care within it.",
        fr: "Une présence numérique aussi soignée que les soins qu'elle présente.",
      },
      challenge: {
        en: "Harmonia Therapy Center is a multidisciplinary practice in Châteauguay offering counselling, clinical hypnotherapy, art therapy and assessments, in person and online across Québec and Ontario. As the practice grew, it called for a digital presence equal to the depth of its care: one that introduces a team of six clinicians, guides each visitor toward the right support, and speaks with equal ease in English and French.",
        fr: "Le Centre de thérapie Harmonia est une pratique multidisciplinaire établie à Châteauguay, qui offre du counselling, de l'hypnothérapie clinique, de l'art-thérapie et des évaluations, en personne et en ligne au Québec et en Ontario. À mesure que la pratique grandissait, elle appelait une présence numérique à la mesure de la profondeur de ses soins : une présence qui fait connaître une équipe de six cliniciens, guide chaque visiteur vers le bon soutien et s'exprime avec la même aisance en français et en anglais.",
      },
      approach: {
        en: "We began with a single question: what does it feel like to ask for help? The answer shaped every decision. A quiet palette of charcoal, slate and sand. Editorial serif typography with generous room to breathe. Imagery and copy created specifically for the practice, held in a restrained monochrome register that keeps the focus on people. Every page is composed to shorten the distance between a first visit and a first conversation.",
        fr: "Nous sommes partis d'une seule question : que ressent-on lorsqu'on demande de l'aide ? La réponse a guidé chaque décision. Une palette feutrée de charbon, d'ardoise et de sable. Une typographie à empattements, éditoriale, qui laisse respirer. Des images et des textes créés spécialement pour la pratique, dans un registre monochrome sobre qui garde l'attention sur les personnes. Chaque page est composée pour raccourcir la distance entre une première visite et une première conversation.",
      },
      principles: [
        {
          title: { en: "Warmth, held in restraint", fr: "La chaleur, avec retenue" },
          text: { en: "A calm, editorial language that feels human without ever raising its voice.", fr: "Un langage éditorial et posé, humain sans jamais élever la voix." },
        },
        {
          title: { en: "Clarity before everything", fr: "La clarté avant tout" },
          text: { en: "Services, clinicians and booking are never more than a glance away.", fr: "Les services, les cliniciens et la prise de rendez-vous ne sont jamais à plus d'un regard." },
        },
        {
          title: { en: "Two languages, one voice", fr: "Deux langues, une seule voix" },
          text: { en: "English and French are composed as equals, to one standard of craft.", fr: "Le français et l'anglais sont composés à égalité, avec la même exigence." },
        },
      ],
      outcomes: [
        { en: "A distinctive identity that carries the warmth of the practice into every detail", fr: "Une identité distinctive qui porte la chaleur de la pratique jusque dans les moindres détails" },
        { en: "Clear pathways from first visit to first appointment", fr: "Des parcours clairs, de la première visite au premier rendez-vous" },
        { en: "Six clinician profiles that help each visitor find the right fit", fr: "Six profils de cliniciens qui aident chaque visiteur à trouver la bonne personne" },
        { en: "Seamless English and French throughout", fr: "Un français et un anglais fluides, d'un bout à l'autre" },
        { en: "A platform the team can maintain and grow on its own", fr: "Une plateforme que l'équipe peut maintenir et faire évoluer en toute autonomie" },
      ],
      features: [
        { en: "Bilingual EN / FR", fr: "Bilingue FR / EN" },
        { en: "Online appointment booking", fr: "Prise de rendez-vous en ligne" },
        { en: "Individual clinician profiles", fr: "Profils individuels des cliniciens" },
        { en: "Custom imagery & copywriting", fr: "Images et rédaction sur mesure" },
        { en: "Mobile-first design", fr: "Conception d'abord pour mobile" },
        { en: "Fast loading", fr: "Chargement rapide" },
        { en: "Easy for the team to update", fr: "Facile à mettre à jour par l'équipe" },
      ],
      services: [
        { en: "Brand refresh", fr: "Rafraîchissement de marque" },
        { en: "Web design", fr: "Conception Web" },
        { en: "Art direction", fr: "Direction artistique" },
        { en: "Copywriting", fr: "Rédaction" },
        { en: "Bilingual build", fr: "Conception bilingue" },
      ],
      cover: {
        src: "/case-studies/harmonia/cover.webp",
        alt: { en: "The Harmonia Therapy Center website", fr: "Le site web du Centre de thérapie Harmonia" },
      },
      after: {
        src: "/case-studies/harmonia/after-home.webp", width: 1600, height: 8034,
        alt: { en: "The Harmonia Therapy Center home page, full length", fr: "La page d'accueil du Centre de thérapie Harmonia, en entier" },
      },
      before: {
        src: "/case-studies/harmonia/before-home.webp", width: 1440, height: 3984,
        alt: { en: "The original Harmonia Therapy Center home page, full length", fr: "La page d'accueil d'origine du Centre de thérapie Harmonia, en entier" },
      },
      pages: [
        { label: { en: "Services", fr: "Services" }, screen: {
          src: "/case-studies/harmonia/after-services.webp", width: 1600, height: 5584,
          alt: { en: "Services page", fr: "Page des services" } } },
        { label: { en: "Counselling", fr: "Counselling" }, screen: {
          src: "/case-studies/harmonia/after-counselling.webp", width: 1600, height: 6092,
          alt: { en: "Counselling page", fr: "Page de counselling" } } },
        { label: { en: "Team", fr: "Équipe" }, screen: {
          src: "/case-studies/harmonia/after-team.webp", width: 1600, height: 3942,
          alt: { en: "Team page", fr: "Page de l'équipe" } } },
        { label: { en: "Contact", fr: "Contact" }, screen: {
          src: "/case-studies/harmonia/after-contact.webp", width: 1600, height: 1452,
          alt: { en: "Contact page", fr: "Page de contact" } } },
      ],
      year: "2026",
    },
  },
  {
    id: 6, slug: "poissonnerie-moj", name: "Poissonnerie MOJ", client: "Food & Seafood Market", tags: ["Web Design", "Food"], year: "2025",
    gradient: "linear-gradient(135deg, #061E2C 0%, #0D3A52 45%, #1A6080 100%)", image: "/work-moj.webp", url: "https://moj-three.vercel.app/", featured: true,
    desc: {
      en: "A warm, bilingual storefront for a family-run seafood market, bringing the daily catch and the takeout kitchen to the Châteauguay community.",
      fr: "Une vitrine chaleureuse et bilingue pour une poissonnerie familiale, qui met en valeur l'arrivage du jour et la cuisine à emporter pour la communauté de Châteauguay.",
    },
    descShort: {
      en: "A warm, bilingual storefront for a family-run seafood market in Châteauguay.",
      fr: "Une vitrine chaleureuse et bilingue pour une poissonnerie familiale de Châteauguay.",
    },
  },
  {
    id: 1, slug: "in-bloom-events", name: "In Bloom Events", client: "Events & Networking", tags: ["Web Design", "Events"], year: "2025",
    gradient: "linear-gradient(135deg, #2A0F18 0%, #4A1F30 45%, #7A3A50 100%)", image: "/work-inbloom.jpeg", url: "https://www.inbloomevents.ca/", featured: true,
    desc: {
      en: "An elegant website for a women's empowerment and networking experience in Québec, designed to feel as elevated as the event itself.",
      fr: "Un site élégant pour une expérience de réseautage et d'inspiration au féminin au Québec, à la hauteur de l'événement lui-même.",
    },
    descShort: {
      en: "An elegant, bilingual event website for a women's empowerment and networking experience.",
      fr: "Un site d'événement élégant et bilingue pour une expérience de réseautage au féminin.",
    },
  },
  {
    id: 2, slug: "blue-rabbit-therapy", name: "Blue Rabbit Therapy", client: "Health & Wellness", tags: ["Web Design"], year: "2024",
    gradient: "linear-gradient(135deg, #0A1520 0%, #142538 45%, #1E3A58 100%)", image: "/work-bluerabbit.webp", url: "https://bluerabbittherapy.com/", featured: true,
    desc: {
      en: "A calm, reassuring website for a virtual psychotherapy practice, guiding clients across Ontario from first consult to first session.",
      fr: "Un site apaisant et rassurant pour une pratique de psychothérapie virtuelle, qui accompagne les clients de l'Ontario de la première consultation à la première séance.",
    },
    descShort: {
      en: "A reassuring digital home for a virtual psychotherapy practice across Ontario.",
      fr: "Une présence numérique rassurante pour une pratique de psychothérapie virtuelle en Ontario.",
    },
  },
  {
    id: 3, slug: "jess-blackwell", name: "Jess Blackwell", client: "Film & Creative", tags: ["Web Design", "Portfolio"], year: "2024",
    gradient: "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 45%, #2A2520 100%)", image: "/work-jessblackwell.jpeg", url: "https://www.jessblackwell.com/",
    desc: {
      en: "A restrained, cinematic portfolio for a Toronto filmmaker, designed to let the work lead.",
      fr: "Un portfolio sobre et cinématographique pour une personne cinéaste de Toronto, conçu pour laisser l'œuvre au premier plan.",
    },
    descShort: {
      en: "A restrained, cinematic portfolio for a Toronto filmmaker, designed to let the work lead.",
      fr: "Un portfolio sobre et cinématographique pour une personne cinéaste de Toronto, conçu pour laisser l'œuvre au premier plan.",
    },
  },
  {
    id: 4, slug: "reno-pro-plus", name: "Reno Pro Plus", client: "Home Renovation", tags: ["Web Design"], year: "2024",
    gradient: "linear-gradient(135deg, #0D1525 0%, #1A2840 50%, #253A5A 100%)", image: "/work-renoproplus.jpeg", url: "https://renoproplus.com/",
    desc: {
      en: "A clear, confident website for a renovation company serving Laval and Montréal, built to turn a first look into a quote request.",
      fr: "Un site clair et assuré pour une entreprise de rénovation de Laval et Montréal, conçu pour transformer un premier regard en demande de soumission.",
    },
    descShort: {
      en: "A clear, confident website for a renovation company serving Laval and Montréal, built to turn a first look into a quote request.",
      fr: "Un site clair et assuré pour une entreprise de rénovation de Laval et Montréal, conçu pour transformer un premier regard en demande de soumission.",
    },
  },
  {
    id: 5, slug: "dalmaa", name: "Dalmaa", client: "Food & Recipe Blog", tags: ["Web Design", "Food"], year: "2025",
    gradient: "linear-gradient(135deg, #1A0D05 0%, #2E1A0A 50%, #4A2C10 100%)", image: "/work-dalmaa.webp", url: "https://dalmaa.vercel.app/",
    desc: {
      en: "A warm, image-led recipe notebook celebrating Indian and continental cooking.",
      fr: "Un carnet de recettes chaleureux, porté par l'image, qui célèbre la cuisine indienne et continentale.",
    },
    descShort: {
      en: "A warm, image-led recipe notebook celebrating Indian and continental cooking.",
      fr: "Un carnet de recettes chaleureux, porté par l'image, qui célèbre la cuisine indienne et continentale.",
    },
  },
  {
    id: 7, slug: "gloss-by-mia", name: "Gloss by Mia", client: "Beauty & Nail Studio", tags: ["Web Design"], year: "2025",
    gradient: "linear-gradient(135deg, #0D0A14 0%, #1A1025 50%, #2A1A40 100%)", image: "/work-nails.webp", url: "https://nailsalon-sigma.vercel.app/",
    desc: {
      en: "A dark, glamorous showcase for a premium nail art studio in Montréal, with a filterable gallery and booking built in.",
      fr: "Une vitrine sombre et glamour pour un studio d'art des ongles haut de gamme à Montréal, avec galerie filtrable et réservation intégrée.",
    },
    descShort: {
      en: "A dark, glamorous showcase for a premium nail art studio in Montréal, with a filterable gallery and booking built in.",
      fr: "Une vitrine sombre et glamour pour un studio d'art des ongles haut de gamme à Montréal, avec galerie filtrable et réservation intégrée.",
    },
  },
  {
    id: 8, slug: "sourcils-et-beaute", name: "Sourcils & Beauté", client: "Beauty & Brow Bar", tags: ["Web Design"], year: "2025",
    gradient: "linear-gradient(135deg, #1A1512 0%, #2E241E 50%, #4A3A30 100%)", image: "/work-sourcils.webp", url: "https://sourcil.vercel.app/", imgPosition: "object-left-top",
    desc: {
      en: "An editorial, refined website for a women-only beauty sanctuary in Montréal, composed around the ritual of care.",
      fr: "Un site éditorial et raffiné pour un sanctuaire de beauté exclusivement féminin à Montréal, composé autour du rituel de soin.",
    },
    descShort: {
      en: "An editorial, refined website for a women-only beauty sanctuary in Montréal, composed around the ritual of care.",
      fr: "Un site éditorial et raffiné pour un sanctuaire de beauté exclusivement féminin à Montréal, composé autour du rituel de soin.",
    },
  },
];

export const hasCaseStudy = (p: Project): p is Project & { caseStudy: CaseStudy } => !!p.caseStudy;

export const featuredProjects = projects.filter(p => p.featured);
export const caseStudyProjects = projects.filter(hasCaseStudy);

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);

/** Resolve a plain string or an EN/FR pair to the active language. */
export const localize = (v: Localized | string, lang: Lang): string =>
  typeof v === "string" ? v : v[lang];
