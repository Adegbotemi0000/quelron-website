"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Subsidiary } from "@/data/subsidiaries";
import { staggerItem } from "./Reveal";

export function SubsidiaryCard({ s }: { s: Subsidiary }) {
  return (
    <motion.div variants={staggerItem}>
      <Link
        href={`/subsidiaries/${s.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
        style={{ ["--glow" as string]: s.colors.primary }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
          style={{ backgroundColor: s.colors.primary }}
          aria-hidden
        />
        <div className="flex items-center justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundColor: s.colors.primary + "14" }}
          >
            <Image src={s.logo} alt={`${s.name} logo`} width={44} height={44} className="h-8 w-8 rounded-lg object-cover" />
          </div>
          <ArrowUpRight
            size={18}
            className="text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black/60"
          />
        </div>

        <h3 className="mt-6 font-display text-xl font-semibold text-navy">{s.name}</h3>
        <p className="mt-1 text-sm font-medium" style={{ color: s.colors.primary }}>
          {s.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-grey">{s.description}</p>

        <div className="mt-6 flex items-center gap-1.5">
          {[s.colors.primary, s.colors.secondary, s.colors.accent].map((c, i) => (
            <span key={i} className="h-1.5 w-6 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
