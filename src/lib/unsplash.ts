/**
 * Curated, content-verified Unsplash CDN images (no API key required).
 * Each helper returns a fully-formed, optimized image URL.
 */
export function ux(id: string, w = 1600, q = 80): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const IMG = {
  tech: {
    hero: "photo-1542831371-29b0f74f9713", // code on screen
    a: "photo-1515879218367-8466d910aaa4", // developer workspace
    b: "photo-1461749280684-dccba630e2f6", // person typing laptop
    c: "photo-1607799279861-4dd421887fb3", // developer at desk
    d: "photo-1607706189992-eae578626c86", // coding session
    portfolio1: "photo-1619410283995-43d9134e7656",
    portfolio2: "photo-1587620962725-abab7fe55159",
    portfolio3: "photo-1484417894907-623942c8ee29",
  },
  inc: {
    hero: "photo-1613243555988-441166d4d6fd", // dark NFC smart card
    a: "photo-1728044849236-5e8a061e1895", // tapping smart card
    b: "photo-1495846111602-a16f6a1ede09", // branded card stack
    c: "photo-1758887248912-03a0c34a2f41", // printed ID card on stand
    d: "photo-1605098293544-25f4c32344c8", // branded card with QR code
    portfolio1: "photo-1563013544-824ae1b704d3", // credit/smart cards
    portfolio2: "photo-1609429019995-8c40f49535a5", // credit cards
    portfolio3: "photo-1589758438368-0ad531db3366", // card payment
  },
  autos: {
    hero: "photo-1614200179396-2bdb77ebf81b", // red sports car
    a: "photo-1541348263662-e068662d82af",
    b: "photo-1601929862217-f1bf94503333",
    c: "photo-1761264889292-2d62b3964036", // interior/road
    d: "photo-1728415944921-6280c9be23dd",
  },
  farms: {
    hero: "photo-1560493676-04071c5f467b", // rolling farm field
    a: "photo-1655929299728-93ee15ed7967",
    b: "photo-1589742906594-b8f9bf425a15",
    c: "photo-1573119798379-011dfedae008",
    d: "photo-1573605954553-a39394846cfc",
  },
  apparels: {
    hero: "photo-1603189343302-e603f7add05a", // editorial fashion
    a: "photo-1662532577856-e8ee8b138a8b",
    b: "photo-1580478491436-fd6a937acc9e",
    c: "photo-1613915617430-8ab0fd7c6baf",
    d: "photo-1607997637503-d4d8dee871e4",
  },
  artisan: {
    hero: "photo-1595351298020-038700609878", // pottery wheel
    a: "photo-1609881583302-61548332039c",
    b: "photo-1590605095243-072811dbe64c",
    c: "photo-1589051088132-06f36a22012a",
    d: "photo-1607556671927-78a6605e290b",
  },
  portraits: [
    "photo-1500648767791-00dcc994a43e",
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1494790108377-be9c29b29330",
    "photo-1609436132311-e4b0c9370469",
    "photo-1659481993364-4512775ed911",
    "photo-1714462396046-29272a3cb549",
    "photo-1514960919797-5ff58c52e5ba",
    "photo-1760552069633-c05f246a5d8c",
    "photo-1764971591006-b6eb67a8f0cb",
    "photo-1609371497456-3a55a205d5eb",
    "photo-1701728667207-54b43dbdab97",
    "photo-1780733058439-b8952315e59c",
    "photo-1780733057950-0dc9055ddae9",
    "photo-1655249493799-9cee4fe983bb",
    "photo-1655249481446-25d575f1c054",
  ],
  about: {
    office: "photo-1690378820474-b468b8ee64d3", // business meeting
    team: "photo-1630487656049-6db93a53a7e9", // team collaboration
    hq: "photo-1758518731706-be5d5230e5a5", // modern office
  },
} as const;

export function portrait(index: number, w = 400): string {
  const id = IMG.portraits[index % IMG.portraits.length];
  return ux(id, w);
}
