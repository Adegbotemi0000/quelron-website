import { IMG, ux } from "@/lib/unsplash";

export interface SubsidiaryColors {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
}

export interface Subsidiary {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  logo: string;
  colors: SubsidiaryColors;
  /** A saturated, always-legible-on-navy color used for text/icon highlights on dark sections. */
  highlight: string;
  dark: boolean;
  imagery: {
    hero: string;
    accent: string[];
  };
  services: Array<{ title: string; description: string; icon: string }>;
  whyChooseUs: Array<{ title: string; description: string; icon: string }>;
  cta: { primary: string; secondary: string };
  /** Physical locations this subsidiary operates from, if relevant. */
  locations?: string[];
  portfolio?: Array<{ title: string; description: string; image: string }>;
  testimonials?: Array<{ quote: string; author: string; role: string; image: string }>;
}

export const subsidiaries: Subsidiary[] = [
  // =====================
  // 1. QUELRON TECH
  // =====================
  {
    id: "tech",
    name: "Quelron Tech",
    slug: "tech",
    tagline: "Innovation Through Code",
    description: "IT, Web Development, Graphics Design, Application Development",
    longDescription:
      "Quelron Tech is at the forefront of digital innovation. We build world-class web experiences, cutting-edge applications, and stunning visual designs that empower businesses to succeed in the digital age. From concept to deployment, we deliver technology that matters — engineered with precision, shipped with confidence, and designed to scale alongside the ambitions of every client we serve.",
    logo: "/logos/quelron-tech.jpeg",
    colors: { primary: "#1E3A8A", secondary: "#0F172A", accent: "#06D6A0", neutral: "#7A8A9C" },
    highlight: "#06D6A0",
    dark: true,
    imagery: { hero: ux(IMG.tech.hero), accent: [IMG.tech.a, IMG.tech.b, IMG.tech.c, IMG.tech.d].map((i) => ux(i)) },
    services: [
      { title: "Web Development", description: "Full-stack web applications built with modern frameworks and best practices.", icon: "Globe" },
      { title: "App Development", description: "Native and cross-platform mobile applications for iOS and Android.", icon: "Smartphone" },
      { title: "Graphics Design", description: "Stunning visual designs that bring your brand to life.", icon: "Palette" },
      { title: "AI Integration", description: "Machine learning and AI solutions tailored to your business needs.", icon: "Brain" },
      { title: "Cloud Solutions", description: "Scalable, secure cloud infrastructure and migration services.", icon: "Cloud" },
    ],
    whyChooseUs: [
      { title: "Innovation First", description: "We stay ahead of technology trends to deliver cutting-edge solutions.", icon: "Zap" },
      { title: "Expert Team", description: "Seasoned developers, designers, and architects with proven track records.", icon: "Users" },
      { title: "Quality Guaranteed", description: "Rigorous testing and code reviews ensure production-ready deliverables.", icon: "CheckCircle" },
      { title: "Scalable Solutions", description: "Build solutions that grow with your business from day one.", icon: "TrendingUp" },
    ],
    cta: { primary: "Start Your Project", secondary: "Schedule Consultation" },
    portfolio: [
      { title: "TapProfile — Digital Business Card Platform", description: "Next.js-powered NFC digital business card platform with real-time profile updates.", image: ux(IMG.tech.portfolio1) },
      { title: "E-commerce Mobile App", description: "Full-featured mobile marketplace with payment integration and real-time notifications.", image: ux(IMG.tech.portfolio2) },
      { title: "SaaS Analytics Dashboard", description: "Data visualization platform for enterprise analytics with real-time processing.", image: ux(IMG.tech.portfolio3) },
    ],
    testimonials: [
      { quote: "Quelron Tech transformed our vision into reality. The attention to detail and innovation is unmatched.", author: "CEO, Tech Startup", role: "Founder", image: ux(IMG.about.office, 200) },
      { quote: "Working with their team was seamless. They delivered on time and exceeded our expectations.", author: "Product Manager, Scale-up", role: "Product Lead", image: ux(IMG.about.team, 200) },
    ],
  },

  // =====================
  // 2. QUELRON INC
  // =====================
  {
    id: "inc",
    name: "Quelron Inc",
    slug: "inc",
    tagline: "Cards, Identity & Brand Excellence",
    description: "Smart Cards, Bespoke Memorabilia, Brand Consultation, Identity Systems",
    longDescription:
      "Quelron Inc supplies smart cards and identity solutions for organizations that need to look and operate at their best. We source and supply high-quality smart cards, craft bespoke branded memorabilia, offer expert brand consultation, and manage end-to-end identity systems for our clients. We're also the team behind TapProfile — our digital platform for managing and sharing identity with a simple tap.",
    logo: "/logos/quelron-inc.jpeg",
    colors: { primary: "#FF6B35", secondary: "#2D3436", accent: "#0F172A", neutral: "#7A8A9C" },
    highlight: "#FF8A5C",
    dark: true,
    imagery: { hero: ux(IMG.inc.hero), accent: [IMG.inc.a, IMG.inc.b, IMG.inc.c, IMG.inc.d].map((i) => ux(i)) },
    services: [
      { title: "Smart Card Supply", description: "High-quality smart cards for identification, access control, and payments.", icon: "CreditCard" },
      { title: "Bespoke Memorabilia", description: "Custom-branded merchandise and memorabilia crafted for your organization.", icon: "Gift" },
      { title: "Brand Consultation", description: "Strategic guidance on brand identity, applied consistently across every touchpoint.", icon: "Palette" },
      { title: "Identity System Management", description: "End-to-end management of organizational ID systems and access credentials.", icon: "Lock" },
      { title: "TapProfile Platform", description: "Our digital identity platform for managing and sharing profiles with a tap.", icon: "Smartphone" },
    ],
    whyChooseUs: [
      { title: "Trusted Supplier", description: "Reliable sourcing and quality-checked cards, every single order.", icon: "Award" },
      { title: "Security First", description: "Identity systems built around encryption, access control, and accountability.", icon: "Lock" },
      { title: "Brand Expertise", description: "Consultation that connects your identity systems to your wider brand story.", icon: "Sparkles" },
      { title: "Fast Turnaround", description: "Efficient sourcing and delivery without compromising on quality.", icon: "Clock" },
    ],
    cta: { primary: "Request a Quote", secondary: "Explore TapProfile" },
    portfolio: [
      { title: "Corporate ID & Access Cards", description: "Supplied secure smart cards and access credentials for enterprise clients.", image: ux(IMG.inc.portfolio1) },
      { title: "Bespoke Event Memorabilia", description: "Custom-branded cards and keepsakes produced for corporate events.", image: ux(IMG.inc.portfolio2) },
      { title: "TapProfile Identity Platform", description: "A digital platform for managing and sharing identity profiles instantly.", image: ux(IMG.inc.portfolio3) },
    ],
  },

  // =====================
  // 3. QUELRON AUTOS
  // =====================
  {
    id: "autos",
    name: "Quelron Autos",
    slug: "autos",
    tagline: "Your Trusted Auto Partner",
    description: "Vehicle Sourcing, Consultation & Global Import Services",
    longDescription:
      "Quelron Autos helps clients find, evaluate, and import the right vehicle. We source cars, offer honest advice and consultation on vehicle choices, and help buy and ship cars in from China, the USA, and Europe. With a presence in Lagos, Ado-Ekiti, Ikare-Akoko, and Osogbo, we make vehicle ownership simple, informed, and reliable for clients across the region.",
    logo: "/logos/quelron-autos.jpeg",
    colors: { primary: "#0F172A", secondary: "#FF6B35", accent: "#C0C0C0", neutral: "#7A8A9C" },
    highlight: "#FF8A5C",
    dark: true,
    imagery: { hero: ux(IMG.autos.hero), accent: [IMG.autos.a, IMG.autos.b, IMG.autos.c, IMG.autos.d].map((i) => ux(i)) },
    services: [
      { title: "Vehicle Sourcing", description: "We help you find the right car from trusted dealers and auctions worldwide.", icon: "Search" },
      { title: "Expert Consultation", description: "Honest, expert advice before you buy — on models, pricing, and condition.", icon: "Users" },
      { title: "Import & Shipping", description: "We handle buying and shipping vehicles in from China, the USA, and Europe.", icon: "Truck" },
      { title: "Documentation & Clearing", description: "We help manage the paperwork and clearing process from start to finish.", icon: "Shield" },
      { title: "After-Sale Support", description: "Ongoing guidance and support even after your purchase is complete.", icon: "Wrench" },
    ],
    whyChooseUs: [
      { title: "Trusted Locally", description: "Teams on the ground across Lagos, Ekiti, Ondo, and Osun states.", icon: "MapPin" },
      { title: "Global Reach", description: "Direct sourcing connections across China, the USA, and Europe.", icon: "Globe" },
      { title: "Honest Advice", description: "Consultation focused on what's right for you, not just a sale.", icon: "Award" },
      { title: "Full-Service Support", description: "From sourcing to shipping to after-sale — we stay with you.", icon: "Wrench" },
    ],
    cta: { primary: "Request a Sourcing Consultation", secondary: "Talk to an Advisor" },
    locations: ["Lagos", "Ado-Ekiti, Ekiti State", "Ikare-Akoko, Ondo State", "Osogbo, Osun State"],
  },

  // =====================
  // 4. QUELRON FARMS
  // =====================
  {
    id: "farms",
    name: "Quelron Farms",
    slug: "farms",
    tagline: "Rooted in Ekiti, Raised with Care",
    description: "Food Crops, Garri & Palm Oil Production, Livestock Farming",
    longDescription:
      "Quelron Farms operates out of Ekiti State, Nigeria, where we grow and process staple food crops — garri, palm oil, maize, and more — alongside a full livestock operation raising cattle, goats, chickens, and poultry. We combine hands-on farming experience with modern, responsible practices to deliver quality food and livestock products to our communities.",
    logo: "/logos/quelron-farms.jpeg",
    colors: { primary: "#2D5016", secondary: "#8BC34A", accent: "#8B6F47", neutral: "#87CEEB" },
    highlight: "#A4D65E",
    dark: false,
    imagery: { hero: ux(IMG.farms.hero), accent: [IMG.farms.a, IMG.farms.b, IMG.farms.c, IMG.farms.d].map((i) => ux(i)) },
    services: [
      { title: "Garri Production", description: "Locally processed, high-quality garri from our Ekiti farms.", icon: "Wheat" },
      { title: "Palm Oil Processing", description: "Fresh, quality palm oil produced and supplied directly from our farm.", icon: "Droplet" },
      { title: "Maize & Food Crops", description: "Maize and other staple food crops grown using sustainable methods.", icon: "Leaf" },
      { title: "Livestock Farming", description: "Cattle, goats, chickens, and poultry raised with care on our farm.", icon: "Heart" },
      { title: "Farm-to-Market Supply", description: "Direct supply of fresh food stuffs and livestock to markets and communities.", icon: "Truck" },
    ],
    whyChooseUs: [
      { title: "Rooted in Ekiti", description: "Locally grown and raised, with deep knowledge of the land.", icon: "Leaf" },
      { title: "Quality You Can Trust", description: "Well-cared-for livestock and carefully processed food crops.", icon: "Award" },
      { title: "Full Farm Operation", description: "From crops to livestock, all managed under one roof.", icon: "Users" },
      { title: "Reliable Supply", description: "Consistent, dependable supply of food stuffs and livestock.", icon: "Truck" },
    ],
    cta: { primary: "Partner With Us", secondary: "Learn More" },
    locations: ["Ekiti State, Nigeria"],
  },

  // =====================
  // 5. QUELRON APPARELS
  // =====================
  {
    id: "apparels",
    name: "Quelron Apparels",
    slug: "apparels",
    tagline: "Premium Fashion, Timeless Style",
    description: "Premium Clothing, Bespoke Wears, Sportswear & Jerseys",
    longDescription:
      "Quelron Apparels is a luxury fashion brand dedicated to timeless elegance and superior craftsmanship. Every piece is designed with meticulous attention to detail, using premium fabrics and sustainable production methods. Beyond our premium collections, we also craft bespoke wears, sportswear, and jerseys — tailored to teams, brands, and individuals who want quality with their name on it.",
    logo: "/logos/quelron-apparels.jpeg",
    colors: { primary: "#0F172A", secondary: "#D4AF37", accent: "#FFFFFF", neutral: "#2D3436" },
    highlight: "#E9C767",
    dark: true,
    imagery: { hero: ux(IMG.apparels.hero), accent: [IMG.apparels.a, IMG.apparels.b, IMG.apparels.c, IMG.apparels.d].map((i) => ux(i)) },
    services: [
      { title: "Premium Collections", description: "Curated collections of luxury apparel for men and women.", icon: "Shirt" },
      { title: "Custom Tailoring", description: "Bespoke clothing tailored to your exact measurements and preferences.", icon: "Scissors" },
      { title: "Sportswear & Jerseys", description: "Custom-made sportswear and jerseys for teams, clubs, and brands.", icon: "Trophy" },
      { title: "Fashion Design", description: "Exclusive designs crafted by award-winning fashion designers.", icon: "Palette" },
      { title: "Sustainable Fashion", description: "Eco-friendly materials and ethical production practices.", icon: "Leaf" },
      { title: "Styling Services", description: "Personal styling and wardrobe consultation from fashion experts.", icon: "Users" },
    ],
    whyChooseUs: [
      { title: "Exceptional Quality", description: "Premium fabrics and impeccable craftsmanship in every garment.", icon: "Star" },
      { title: "Timeless Design", description: "Classic silhouettes that transcend trends and seasons.", icon: "Award" },
      { title: "Sustainable", description: "Ethical sourcing and environmentally responsible production.", icon: "Leaf" },
      { title: "Exclusive Access", description: "Limited edition pieces and early access to new collections.", icon: "Lock" },
    ],
    cta: { primary: "Explore Collections", secondary: "Book Styling Session" },
  },

  // =====================
  // 6. QUELRON ARTISAN
  // =====================
  {
    id: "artisan",
    name: "Quelron Artisan",
    slug: "artisan",
    tagline: "Connecting Craft & Community",
    description: "Artisan Marketplace, Service Booking, Craft Connection",
    longDescription:
      "Quelron Artisan is a vibrant community marketplace connecting skilled artisans with clients seeking authentic, handmade goods and services. We celebrate traditional craftsmanship, support independent makers, and create meaningful connections between creators and the people who value their work.",
    logo: "/logos/quelron-artisan.jpeg",
    colors: { primary: "#FF6B6B", secondary: "#06D6A0", accent: "#0F172A", neutral: "#F5D5B8" },
    highlight: "#2FE6B8",
    dark: false,
    imagery: { hero: ux(IMG.artisan.hero), accent: [IMG.artisan.a, IMG.artisan.b, IMG.artisan.c, IMG.artisan.d].map((i) => ux(i)) },
    services: [
      { title: "Artisan Marketplace", description: "Platform connecting independent artisans with buyers worldwide.", icon: "ShoppingBag" },
      { title: "Service Booking", description: "Book services from skilled craftspeople for custom projects.", icon: "Calendar" },
      { title: "Community Support", description: "Resources, training, and networking for independent makers.", icon: "Users" },
      { title: "Craft Workshops", description: "Learn traditional craftsmanship from master artisans.", icon: "BookOpen" },
      { title: "Direct Payment", description: "Secure payment systems ensuring fair compensation for makers.", icon: "DollarSign" },
    ],
    whyChooseUs: [
      { title: "Authentic Craftsmanship", description: "Genuine handmade goods with stories behind every piece.", icon: "Heart" },
      { title: "Fair Trade", description: "Direct support to artisans with transparent pricing and payment.", icon: "Handshake" },
      { title: "Community Driven", description: "Part of a vibrant network of creators and craft enthusiasts.", icon: "Users" },
      { title: "Unique Offerings", description: "One-of-a-kind items you won't find anywhere else.", icon: "Sparkles" },
    ],
    cta: { primary: "Join the Community", secondary: "Browse Artisans" },
  },
];

export function getSubsidiaryBySlug(slug: string): Subsidiary | undefined {
  return subsidiaries.find((s) => s.slug === slug);
}

export function getAllSubsidiaries(): Subsidiary[] {
  return subsidiaries;
}
