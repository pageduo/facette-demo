export const company = {
  name: "FACETTE",
  fullName: "FACETTE: Studio für Markendesign & Brand Identity",
  founded: 2017,
  city: "Berlin",
  // Seriennummer im Seitenrand — ein Artefakt aus der Produktwelt, in die
  // Oberfläche übersetzt.
  serial: "FACETTE 1-STUDIO",
  claim: "Eine Marke",
  claimSecondLine: "Viele Facetten",
  subline:
    "Berliner Studio für Markenidentität. Wir legen jede Marke unter Studiolicht, bis die eine Kante sichtbar wird, die sie von allen anderen trennt.",
  phone: "+49 30 555 214 70",
  phoneHref: "tel:+493055521470",
  email: "hallo@facette-demo.de",
  address: { street: "Torstraße 111", zip: "10119", city: "Berlin" },
  hours: [
    { day: "Montag – Freitag", time: "9:00 – 18:00" },
    { day: "Samstag", time: "Nach Vereinbarung" },
    { day: "Sonntag", time: "Geschlossen" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
  ],
};

// Vier Navigationspunkte, nicht mehr. Der Rest ist Scrollen.
export const nav = [
  { id: "intro", label: "Intro" },
  { id: "facetten", label: "Facetten" },
  { id: "archiv", label: "Archiv" },
  { id: "kontakt", label: "Kontakt" },
] as const;

export const sections = [
  { id: "intro", label: "Intro", number: "00" },
  { id: "manifest", label: "Manifest", number: "01" },
  { id: "facetten", label: "Facetten", number: "02" },
  { id: "archiv", label: "Archiv", number: "03" },
  { id: "verfahren", label: "Verfahren", number: "04" },
  { id: "studio", label: "Studio", number: "05" },
  { id: "kontakt", label: "Kontakt", number: "06" },
] as const;

// --- 01 Manifest -----------------------------------------------------------
// Die Signatur-Sektion: Überschrift links, Objekt in der Mitte, Fließtext
// rechts. Der einzige Ort mit gemischter Schreibweise.
export const manifest = {
  heading: ["Ist kein", "Logo."],
  body:
    "Ein Logo ist die eine Ansicht, die zufällig ganz oben liegt. Wir schleifen alle anderen mit: Sprache, Material, Bewegung, Raum. Erst wenn eine Marke aus jedem Winkel dieselbe bleibt, ist sie fertig.",
  credit: "Studio Facette, Berlin",
};

export const overture = {
  eyebrow: "Studio für Markenidentität, Berlin",
  tagline: "Gebaut für Marken, die aus jedem Winkel halten",
  note: "Sechs Facetten. Ein Kern. Jede einzeln geschliffen.",
};

// --- 02 Facetten (Leistungen) ---------------------------------------------
// Jede Facette entspricht einer Fläche des Objekts in der Mitte. Beim
// Fokussieren leuchtet die zugehörige Fläche auf.
export const facets = [
  {
    index: "F/01",
    title: "Strategie",
    lead: "Die Kante finden",
    description:
      "Positionierung, Naming, Markenkern. Die unbequemen Fragen, bevor die erste Form entsteht.",
  },
  {
    index: "F/02",
    title: "Identität",
    lead: "Die Form schleifen",
    description:
      "Zeichen, Farbe, Typografie. Ein System mit so wenigen Regeln, dass es jemand anderes weiterführen kann.",
  },
  {
    index: "F/03",
    title: "Verpackung",
    lead: "Im Regal bestehen",
    description:
      "Struktur, Material, Veredelung. Der Moment, in dem eine Marke tatsächlich in einer Hand liegt.",
  },
  {
    index: "F/04",
    title: "Digital",
    lead: "In Bewegung bleiben",
    description:
      "Websites, Social-Kits, Motion. Dieselbe Marke, jetzt mit Zeitachse und Cursor.",
  },
  {
    index: "F/05",
    title: "Editorial",
    lead: "Auf Papier halten",
    description:
      "Kataloge, Reports, Bücher. Wo Gestaltung langsamer wird und jeder Umbruch zählt.",
  },
  {
    index: "F/06",
    title: "Raum",
    lead: "Betretbar werden",
    description:
      "Ladenbau, Leitsystem, Messe. Die Facette, durch die Kundschaft körperlich hindurchgeht.",
  },
];

// --- 03 Archiv (Arbeiten) --------------------------------------------------
export type WorkItem = {
  slug: string;
  brand: string;
  discipline: string;
  year: string;
  heading: string;
  description: string;
  material: string;
};

export const work: WorkItem[] = [
  {
    slug: "nordkorn",
    brand: "Nordkorn",
    discipline: "Rebranding, Verpackung",
    year: "2025",
    heading: "Ist kein Brot.",
    description:
      "Eine Bäckerei, die seit vierzig Jahren dasselbe macht und es nie erzählt hat. Wir haben das Regal zum Erzähler gemacht: Papier, Prägung, ein Ton wie Roggenmehl.",
    material: "Graspapier, Blindprägung",
  },
  {
    slug: "pulse-radio",
    brand: "Pulse Radio",
    discipline: "Identität, Bewegtbild",
    year: "2024",
    heading: "Ist kein Sender.",
    description:
      "Ein Streaming-Kanal zwischen Club und Feuilleton. Das Zeichen liegt nie still, es folgt dem Takt der laufenden Sendung.",
    material: "Generatives System, 12 Zustände",
  },
  {
    slug: "voltra",
    brand: "Voltra",
    discipline: "Identität, Digital",
    year: "2025",
    heading: "Ist keine Säule.",
    description:
      "Ladeinfrastruktur wird meistens wie Technik gestaltet. Wir haben sie wie Gastfreundschaft gestaltet, angefangen beim Licht am Stellplatz.",
    material: "Signaletik, Aluminium eloxiert",
  },
  {
    slug: "muse-cosmetics",
    brand: "Muse",
    discipline: "Verpackung, Retail",
    year: "2023",
    heading: "Ist kein Tiegel.",
    description:
      "Im Kosmetikregal schreien alle. Muse flüstert: mattes Glas, ein einziger Prägestrich, sonst nichts. Der Rest ist Abstand.",
    material: "Mattglas, Heißfolie",
  },
  {
    slug: "hafenkantine",
    brand: "Hafenkantine",
    discipline: "Identität, Signage",
    year: "2024",
    heading: "Ist kein Lokal.",
    description:
      "Terrakotta, Handschrift, Fernweh. Eine Restaurantmarke, die nach Hafen riecht, obwohl sie in der Innenstadt steht.",
    material: "Emailleschild, Handsatz",
  },
  {
    slug: "gruenwerk",
    brand: "Grünwerk",
    discipline: "Identität, System",
    year: "2022",
    heading: "Ist kein Garten.",
    description:
      "Ein Netzwerk aus vierzig Gemeinschaftsgärten, das aussehen wollte wie eines. Ein Grün, das wächst, statt zu behaupten.",
    material: "Modularer Baukasten",
  },
];

// --- 04 Verfahren ----------------------------------------------------------
export const procedure = [
  {
    step: "01",
    title: "Zerlegen",
    description: "Workshops, Wettbewerb, Archiv. Wir nehmen die Marke auseinander, bevor wir etwas bauen.",
  },
  {
    step: "02",
    title: "Entwerfen",
    description: "Drei Richtungen parallel, bewusst weit auseinander. Keine Variationen desselben Gedankens.",
  },
  {
    step: "03",
    title: "Schleifen",
    description: "Eine Richtung bleibt. Sie wird so lange verdichtet, bis nichts Beliebiges mehr übrig ist.",
  },
  {
    step: "04",
    title: "Ausrollen",
    description: "Guidelines, Vorlagen, Übergabe. Vom Briefbogen bis zur Ladenfront, alles an einem Tag anwendbar.",
  },
  {
    step: "05",
    title: "Nachziehen",
    description: "Marken bewegen sich. Wir bleiben, wenn neue Formate, Märkte oder Relaunches anstehen.",
  },
];

// --- 05 Studio -------------------------------------------------------------
export const stats = [
  { value: 9, suffix: "", label: "Jahre Studio" },
  { value: 140, suffix: "+", label: "Markenprojekte" },
  { value: 98, suffix: "%", label: "Weiterempfehlung" },
  { value: 12, suffix: "", label: "Köpfe" },
];

export const studio = {
  heading: ["Zwölf Leute,", "ein Tisch."],
  body:
    "Kein Account-Layer, keine Weiterreichung. Wer den Entwurf macht, sitzt auch im Termin. Das begrenzt, wie viele Projekte gleichzeitig laufen können, und genau das ist beabsichtigt.",
  credits: [
    { role: "Gegründet", value: "2017, Berlin-Mitte" },
    { role: "Team", value: "12 Gestaltende, 2 Strateginnen" },
    { role: "Kapazität", value: "4 Projekte gleichzeitig" },
    { role: "Sprachen", value: "Deutsch, Englisch" },
  ],
};

export const testimonials = [
  {
    quote: "Aus einem vagen Bauchgefühl wurde eine Marke, die wir sofort wiedererkennen. Unsere Kundschaft auch.",
    author: "Mareike Sondermann",
    role: "Gründerin, Nordkorn",
  },
  {
    quote: "Kein Studio hat uns vorher so lange zugehört, bevor der erste Entwurf kam. Das sieht man dem Ergebnis an.",
    author: "Jonas Reetz",
    role: "Head of Brand, Voltra",
  },
  {
    quote: "Verspielt, präzise, nie beliebig. Genau die Mischung, die eine Restaurantmarke braucht.",
    author: "Elin Vogt",
    role: "Inhaberin, Hafenkantine",
  },
];

// --- 06 Kontakt ------------------------------------------------------------
export const contact = {
  heading: ["Legen Sie", "Ihre Marke", "unter Licht."],
  body:
    "Ein Gespräch, vierzig Minuten, ohne Rechnung. Danach wissen Sie, ob wir die Richtigen sind, und wir, ob wir Ihnen etwas zu sagen haben.",
  budgets: ["Bis 15 T€", "15 – 40 T€", "40 – 90 T€", "Offen"],
};

export const legalNote = "* Demo-Website. Facette ist kein reales Unternehmen.";
