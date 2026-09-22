"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy">
      {/* Ambient background */}
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(120% 90% at 15% 10%, #1E3A8A 0%, #0F172A 45%, #0F172A 100%)",
          }}
        />
        <div className="grain absolute inset-0" />
        <motion.div
          animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-blue/30 blur-[100px] md:h-[28rem] md:w-[28rem]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#06D6A0]/20 blur-[100px] md:h-96 md:w-96"
        />
      </div>

      <div className="container-px relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 pt-24 md:grid-cols-2 md:pt-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#06D6A0]" />
            Six Subsidiaries. One Vision.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl"
          >
            One Vision.
            <br />
            <span className="bg-gradient-to-r from-white via-white to-[#06D6A0] bg-clip-text text-transparent">
              Infinite Potential.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-white/60"
          >
            Quelron Group unites six industry-leading subsidiaries — technology,
            cards &amp; identity, automotive, agriculture, fashion, and artisan
            craft — under one bold, forward-looking brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#subsidiaries"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Our Ecosystem
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center md:flex"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full border border-white/10"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute inset-0 scale-125 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <Image
              src="/logos/quelron-wordmark-white.png"
              alt="Quelron"
              width={758}
              height={562}
              priority
              className="relative w-64 drop-shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:w-72"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40"
        aria-hidden
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
