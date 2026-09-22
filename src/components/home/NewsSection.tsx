"use client";

import Image from "next/image";
import { Reveal, StaggerGroup, staggerItem } from "@/components/Reveal";
import { ux, IMG } from "@/lib/unsplash";
import { motion } from "framer-motion";

const news = [
  {
    tag: "Quelron Tech",
    title: "Quelron Tech launches AI-powered analytics suite for enterprise clients",
    date: "Aug 2026",
    image: ux(IMG.tech.c, 800),
  },
  {
    tag: "Quelron Farms",
    title: "Quelron Farms achieves full organic certification across three regions",
    date: "Jul 2026",
    image: ux(IMG.farms.c, 800),
  },
  {
    tag: "Quelron Autos",
    title: "Quelron Autos unveils next-gen concierge program for premium clients",
    date: "Jun 2026",
    image: ux(IMG.autos.a, 800),
  },
];

export function NewsSection() {
  return (
    <section className="bg-[#F7F8FA] py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Latest</p>
          <h2 className="font-display mt-3 text-balance text-4xl font-bold text-navy md:text-5xl">
            News &amp; Updates
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {news.map((n) => (
            <motion.article
              key={n.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={n.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue">
                  <span>{n.tag}</span>
                  <span className="text-grey/50">&middot;</span>
                  <span className="text-grey">{n.date}</span>
                </div>
                <h3 className="font-display mt-3 text-balance text-lg font-semibold leading-snug text-navy">
                  {n.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
