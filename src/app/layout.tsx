import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quelrongroup.com"),
  title: {
    default: "Quelron Group — One Vision. Six Possibilities. Infinite Potential.",
    template: "%s | Quelron Group",
  },
  description:
    "Quelron Group is a multi-faceted holding company spanning technology, cards & identity, automotive, agriculture, fashion, and artisan craft — six subsidiaries, one unified vision.",
  keywords: [
    "Quelron", "Quelron Group", "Quelron Tech", "Quelron Inc", "Quelron Autos",
    "Quelron Farms", "Quelron Apparels", "Quelron Artisan",
  ],
  openGraph: {
    title: "Quelron Group",
    description: "One Vision. Six Possibilities. Infinite Potential.",
    url: "https://www.quelrongroup.com",
    siteName: "Quelron Group",
    images: ["/logos/quelron-master.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quelron Group",
    description: "One Vision. Six Possibilities. Infinite Potential.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
