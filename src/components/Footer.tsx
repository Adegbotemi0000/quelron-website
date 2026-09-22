import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";
import { CONTACT } from "@/lib/contact";

const socialIcons = [
  {
    label: "Instagram",
    path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM17.5 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.51V23H.24V8.25ZM8.35 8.25h4.32v2.01h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V23h-4.51v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23H8.35V8.25Z",
  },
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
  },
  {
    label: "Facebook",
    path: "M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-px relative mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logos/quelron-icon-white.png"
                alt="Quelron Group"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-semibold">Quelron Group</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              One vision. Six possibilities. Infinite potential. A unified group of
              industry-leading subsidiaries built for tomorrow.
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Subsidiaries
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {subsidiaries.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/subsidiaries/${s.slug}`}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full transition-transform group-hover:scale-150"
                      style={{ backgroundColor: s.colors.primary }}
                    />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-white/40" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-white/40" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-white/40" />
                {CONTACT.address}
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold transition-colors hover:border-white/50"
              >
                Contact Us
              </Link>
              <Link
                href="/book-session"
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Quelron Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacy Policy</a>
            <a href="#" className="hover:text-white/70">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
