"use client";

import { Layers, ShieldCheck, Rocket, Globe2 } from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "@/components/Reveal";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Layers,
    title: "Unified Diversity",
    description: "Six distinct industries, one shared standard of craftsmanship and integrity.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Trust",
    description: "From governments to global brands, our partners rely on Quelron for mission-critical work.",
  },
  {
    icon: Rocket,
    title: "Relentless Innovation",
    description: "We invest ahead of the curve — in people, technology, and process.",
  },
  {
    icon: Globe2,
    title: "Global Ambition",
    description: "Built in Africa, engineered for the world — scaling responsibly across markets.",
  },
];

export function WhyQuelron() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Why Quelron</p>
          <h2 className="font-display mt-3 text-balance text-4xl font-bold text-navy md:text-5xl">
            Built Different. Built to Last.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-black/5 p-7 transition-shadow hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                <r.icon size={22} />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-navy">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-grey">{r.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
