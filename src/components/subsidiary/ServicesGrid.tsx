"use client";

import type { Subsidiary } from "@/data/subsidiaries";
import { StaggerGroup, staggerItem, Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icon-map";
import { motion } from "framer-motion";

export function ServicesGrid({ s }: { s: Subsidiary }) {
  return (
    <section id="services" className="bg-[#F7F8FA] py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: s.colors.primary }}>
            What We Do
          </p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-navy md:text-5xl">
            Services &amp; Capabilities
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={staggerItem}
              whileHover={{ y: -6, boxShadow: `0 20px 48px ${s.colors.primary}22` }}
              className="rounded-3xl border border-black/5 bg-white p-7 transition-shadow"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: s.colors.primary + "14", color: s.colors.primary }}
              >
                <Icon name={svc.icon} size={22} />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-navy">{svc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-grey">{svc.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
