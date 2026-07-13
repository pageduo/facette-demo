export const company = {
  name: "FACETTE",
  fullName: "FACETTE: Studio für Markendesign & Brand Identity",
  founded: 2017,
  city: "Berlin",
  claim: "Jede Marke hat viele Seiten.",
  claimSecondLine: "Wir gestalten sie alle.",
  subline:
    "Ein Berliner Studio für Markenidentität, Verpackung und digitale Bühnen, für Unternehmen, die mehr sein wollen als ein Logo.",
  usp:
    "Keine Marke ist eindimensional. Wir gestalten jede Facette einzeln (Identität, Sprache, Verpackung, Raum, Bewegung) und halten sie im Wandel trotzdem zusammen.",
  phone: "+49 30 555 214 70",
  phoneHref: "tel:+493055521470",
  email: "hallo@facette-demo.de",
  whatsappHref: "https://wa.me/493055521470",
  address: {
    street: "Torstraße 111",
    zip: "10119",
    city: "Berlin",
  },
  hours: [
    { day: "Montag – Freitag", time: "9:00 – 18:00 Uhr" },
    { day: "Samstag", time: "nach Vereinbarung" },
    { day: "Sonntag", time: "geschlossen" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
  ],
};

// Anchor-Sektionen der Ein-Seiten-Erfahrung. "number" speist die
// Scroll-Fortschritts-/Sektionsnummerierung am Bildschirmrand.
export const sections = [
  { id: "hero", label: "Start", number: "00" },
  { id: "arbeiten", label: "Arbeiten", number: "01" },
  { id: "leistungen", label: "Leistungen", number: "02" },
  { id: "prozess", label: "Prozess", number: "03" },
  { id: "studio", label: "Studio", number: "04" },
  { id: "kontakt", label: "Kontakt", number: "05" },
] as const;

export const stats = [
  { value: 9, suffix: "", label: "Jahre Studio" },
  { value: 140, suffix: "+", label: "Markenprojekte" },
  { value: 98, suffix: "%", label: "Weiterempfehlung" },
  { value: 12, suffix: "", label: "Köpfe im Team" },
];

export type WorkItem = {
  slug: string;
  brand: string;
  category: string;
  year: string;
  description: string;
  color: string;
  colorSoft: string;
};

// Jedes Projekt trägt einen eigenen Akzentton — beim Hover/Fokus "verfärbt"
// sich die gesamte Seite (Verlaufsflächen, Cursor, Progress-Leiste) in diese
// Farbe. Das ist die visuelle Kernidee des Studios: eine Marke hat viele
// Facetten, jede mit eigener Farbe, aber demselben Kern.
export const work: WorkItem[] = [
  {
    slug: "nordkorn",
    brand: "Nordkorn",
    category: "Bio-Bäckerei · Rebranding & Verpackung",
    year: "2025",
    description:
      "Vom Nischenbäcker zur Regalmarke: ein warmes, erdiges Identitätssystem für Sauerteigbrot mit Haltung.",
    color: "#E8A33D",
    colorSoft: "#f3c785",
  },
  {
    slug: "pulse-radio",
    brand: "Pulse Radio",
    category: "Kultur & Musik · Identität & Bewegtbild",
    year: "2024",
    description:
      "Ein visuelles System, das sich im Takt bewegt, für einen Streaming-Sender zwischen Club und Feuilleton.",
    color: "#FF3D7F",
    colorSoft: "#ff8fb4",
  },
  {
    slug: "voltra",
    brand: "Voltra",
    category: "E-Mobility · Markenidentität & Digital",
    year: "2025",
    description:
      "Elektrisch, aber nicht kalt: eine Tech-Marke, die Ladeinfrastruktur menschlich erzählt.",
    color: "#2FD4E0",
    colorSoft: "#8ff0f7",
  },
  {
    slug: "muse-cosmetics",
    brand: "Muse Cosmetics",
    category: "Beauty · Verpackung & Retail",
    year: "2023",
    description:
      "Reduzierte Formen, ein Hauch Lila: Verpackungsdesign, das im Regal flüstert statt schreit.",
    color: "#C79AFF",
    colorSoft: "#e3d0ff",
  },
  {
    slug: "hafenkantine",
    brand: "Hafenkantine",
    category: "Gastronomie · Identität & Signage",
    year: "2024",
    description:
      "Terrakotta, Handschrift und Fernweh: eine Restaurantmarke mit Hafenluft für Innenstadtlage.",
    color: "#D4592B",
    colorSoft: "#f0a37e",
  },
  {
    slug: "gruenwerk",
    brand: "Grünwerk",
    category: "Urban Gardening · Markenidentität",
    year: "2022",
    description:
      "Ein Grün, das wächst statt greenwasht: Identität für ein Netzwerk urbaner Gemeinschaftsgärten.",
    color: "#5FBE71",
    colorSoft: "#a6e0b1",
  },
];

export const services = [
  {
    key: "strategie",
    title: "Markenstrategie",
    description:
      "Positionierung, Naming und Markenkern: die Fragen, die vor jedem Formensuchen beantwortet sein müssen.",
    size: "lg",
  },
  {
    key: "identitaet",
    title: "Identität & Design",
    description: "Logo, Farbwelt, Typografie und ein System, das über Jahre trägt.",
    size: "md",
  },
  {
    key: "verpackung",
    title: "Verpackung",
    description: "Strukturdesign und Displaylösungen, die im Regal auffallen.",
    size: "md",
  },
  {
    key: "digital",
    title: "Digitale Bühne",
    description: "Websites, Social-Kits und Motion Design für alle digitalen Kanäle.",
    size: "md",
  },
  {
    key: "editorial",
    title: "Editorial & Print",
    description: "Kataloge, Reports und redaktionelle Gestaltung mit ruhiger Hand.",
    size: "sm",
  },
  {
    key: "raum",
    title: "Raum & Signage",
    description: "Ladenbau, Wayfinding und Messeauftritte, die Marke räumlich erlebbar machen.",
    size: "sm",
  },
];

export const process = [
  {
    number: "01",
    title: "Entdecken",
    description:
      "Workshops, Wettbewerbsanalyse und viele unbequeme Fragen, bis der eigentliche Markenkern sichtbar wird.",
  },
  {
    number: "02",
    title: "Entwerfen",
    description:
      "Moodboards und erste Formensprachen entstehen parallel in mehreren Richtungen, bewusst divers.",
  },
  {
    number: "03",
    title: "Verdichten",
    description:
      "Feedback-Runden schärfen die Richtung, bis ein einziges, konsistentes System übrig bleibt.",
  },
  {
    number: "04",
    title: "Ausrollen",
    description:
      "Guidelines, Vorlagen und Rollout über alle Touchpoints, vom Briefpapier bis zur Ladenfront.",
  },
  {
    number: "05",
    title: "Weiterdenken",
    description:
      "Marken leben. Wir begleiten Weiterentwicklung, neue Formate und Relaunches auch danach.",
  },
];

export const testimonials = [
  {
    quote:
      "FACETTE hat aus einem vagen Bauchgefühl eine Marke gemacht, die wir sofort wiedererkennen, und unsere Kund:innen auch.",
    author: "Mareike Sondermann",
    role: "Gründerin, Nordkorn",
  },
  {
    quote:
      "Kein Studio hat uns vorher so genau zugehört, bevor der erste Entwurf entstand. Das Ergebnis merkt man.",
    author: "Jonas Reetz",
    role: "Head of Brand, Voltra",
  },
  {
    quote: "Verspielt, präzise, nie beliebig. Genau die Mischung, die eine Restaurantmarke braucht.",
    author: "Elin Vogt",
    role: "Inhaberin, Hafenkantine",
  },
];

export const faq = [
  {
    question: "Wie läuft ein Projekt bei euch ab?",
    answer:
      "In fünf Phasen von Entdecken bis Weiterdenken, siehe unser Prozess weiter oben. Am Anfang steht immer ein unverbindliches Kennenlerngespräch.",
  },
  {
    question: "Arbeitet ihr auch mit Startups oder kleineren Marken?",
    answer:
      "Ja. Neben etablierten Unternehmen begleiten wir bewusst auch junge Marken früh, oft entstehen daraus die mutigsten Projekte.",
  },
  {
    question: "Was kostet ein Rebranding bei FACETTE?",
    answer:
      "Das hängt vom Umfang ab, von der reinen Identität bis zum vollständigen System inklusive Verpackung und Raum. Nach dem Erstgespräch erhalten Sie ein individuelles Angebot.",
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer:
      "Kleinere Identitätsprojekte etwa 6–8 Wochen, umfassende Markensysteme mit Verpackung und Rollout 3–5 Monate.",
  },
];

export const defaultAccent = "#7C5CFF";
