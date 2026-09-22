"use client";

import type { Subsidiary } from "@/data/subsidiaries";
import { StaggerGroup, staggerItem, Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icon-map";
import { motion } from "framer-motion";

export function WhyChooseUsSection({ s }: { s: Subsidiary }) {
  return (
    <section className="bg-navy py-24 text-white md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: s.highlight }}>
            Why Choose Us
          </p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold md:text-5xl">
            What sets {s.name} apart
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {s.whyChooseUs.map((w) => (
            <motion.div key={w.title} variants={staggerItem} whileHover={{ y: -6 }} className="text-center sm:text-left">
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl sm:mx-0"
                style={{ backgroundColor: s.highlight + "20", color: s.highlight }}
              >
                <Icon name={w.icon} size={22} />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{w.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
