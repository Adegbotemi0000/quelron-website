"use client";

import Image from "next/image";
import type { Subsidiary } from "@/data/subsidiaries";
import { StaggerGroup, staggerItem, Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export function PortfolioSection({ s }: { s: Subsidiary }) {
  if (!s.portfolio?.length) return null;
  return (
    <section className="bg-[#F7F8FA] py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: s.colors.primary }}>
            Case Studies
          </p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-navy md:text-5xl">
            Work That Speaks for Itself
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {s.portfolio.map((p) => (
            <motion.article
              key={p.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-balance text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">{p.description}</p>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
