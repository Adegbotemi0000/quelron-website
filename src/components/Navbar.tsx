"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
    if (dropdownOpen) setDropdownOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (y > lastY.current && y > 120) {
        setHidden(true);
        setDropdownOpen(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Quelron Group home">
          <Image
            src={scrolled ? "/logos/quelron-master.png" : "/logos/quelron-icon-white.png"}
            alt="Quelron Group"
            width={40}
            height={40}
            className="h-8 w-8 object-contain md:h-9 md:w-9"
            priority
          />
          <span
            className={`font-display text-lg font-semibold tracking-tight md:text-xl ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Quelron<span className={scrolled ? "text-blue" : "text-[#06D6A0]"}> Group</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 ${
                scrolled ? "text-navy/80 hover:text-navy" : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((v) => !v)}
            >
              Subsidiaries
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-black/5 bg-white/95 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
                    {subsidiaries.map((s, i) => (
                      <motion.div
                        key={s.slug}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.25 }}
                      >
                        <Link
                          href={`/subsidiaries/${s.slug}`}
                          className="group flex flex-col gap-1 rounded-xl p-3 transition-colors hover:bg-black/[0.04]"
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className="h-2 w-2 shrink-0 rounded-full transition-transform group-hover:scale-125"
                              style={{ backgroundColor: s.colors.primary }}
                            />
                            <span className="text-sm font-semibold text-navy">{s.name}</span>
                          </span>
                          <span className="text-xs leading-snug text-grey">{s.tagline}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 ${
                scrolled ? "text-navy/80 hover:text-navy" : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/book-session"
            className={`ml-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${
              scrolled
                ? "bg-navy text-white hover:bg-blue hover:shadow-lg hover:shadow-blue/20"
                : "bg-white text-navy hover:bg-white/90"
            }`}
          >
            Book a Session
          </Link>
        </div>

        <button
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-px mx-auto flex flex-col gap-1 py-4">
              <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-grey">
                Subsidiaries
              </p>
              {subsidiaries.map((s) => (
                <Link
                  key={s.slug}
                  href={`/subsidiaries/${s.slug}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-black/5"
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.colors.primary }} />
                  {s.name}
                </Link>
              ))}
              <div className="my-2 h-px bg-black/5" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-black/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book-session"
                className="mt-2 rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
