"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import type { Subsidiary } from "@/data/subsidiaries";

export function SubsidiaryHero({ s }: { s: Subsidiary }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92svh] items-end overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={s.imagery.hero} alt="" fill priority className="object-cover opacity-45" sizes="100vw" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0F172A66 0%, #0F172ACC 60%, #0F172A 100%)`,
          }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[8%] top-[18%] h-40 w-40 rounded-full blur-3xl md:h-64 md:w-64"
        style={{ backgroundColor: s.highlight, opacity: 0.35 }}
      />

      <motion.div style={{ opacity }} className="container-px relative z-10 mx-auto w-full max-w-7xl pb-16 pt-40 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <Image
            src={s.logo}
            alt={`${s.name} logo`}
            width={56}
            height={56}
            className="h-12 w-12 rounded-2xl object-cover shadow-lg md:h-14 md:w-14"
          />
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ backgroundColor: s.highlight + "26", color: s.highlight }}
          >
            A Quelron Group Company
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-3xl text-balance text-5xl font-bold leading-[1.05] text-white md:text-7xl"
        >
          {s.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-xl text-balance text-lg font-medium md:text-2xl"
          style={{ color: s.highlight }}
        >
          {s.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-lg text-balance text-sm leading-relaxed text-white/70 md:text-base"
        >
          {s.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Link
            href="#contact"
            className="rounded-full px-7 py-3.5 text-sm font-semibold text-navy shadow-xl transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: s.highlight, color: "#0F172A" }}
          >
            {s.cta.primary}
          </Link>
          <Link
            href="#services"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {s.cta.secondary}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50"
        aria-hidden
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
