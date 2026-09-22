"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import type { Subsidiary } from "@/data/subsidiaries";
import { StaggerGroup, staggerItem, Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export function TestimonialsSection({ s }: { s: Subsidiary }) {
  if (!s.testimonials?.length) return null;
  return (
    <section className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: s.colors.primary }}>
            Testimonials
          </p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-navy md:text-5xl">
            Trusted by Our Clients
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {s.testimonials.map((t) => (
            <motion.figure
              key={t.author}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
            >
              <Quote size={28} style={{ color: s.colors.primary }} className="opacity-30" />
              <blockquote className="mt-4 text-balance text-lg leading-relaxed text-navy">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image src={t.image} alt="" fill className="object-cover" sizes="44px" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.author}</p>
                  <p className="text-xs text-grey">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
