"use client";

import Image from "next/image";
import { groupTeam } from "@/data/team";
import { StaggerGroup, staggerItem, Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const floatOffsets = [0, 0.6, 1.2];

export function GroupTeamSection() {
  return (
    <section className="overflow-hidden py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Leadership</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-navy md:text-5xl">
            Meet the Group Leadership
          </h2>
          <p className="mt-4 text-balance text-lg text-grey">
            One leadership team, stewarding all six subsidiaries toward the same
            standard of excellence.
          </p>
        </Reveal>

        <StaggerGroup className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-8">
          {groupTeam.map((member, i) => (
            <motion.div key={member.name} variants={staggerItem} className="group text-center">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: floatOffsets[i % floatOffsets.length],
                }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="mx-auto w-full max-w-[280px]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] ring-1 ring-navy/5">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 640px) 280px, 60vw"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
                </div>
              </motion.div>
              <h3 className="font-display mt-6 text-lg font-semibold text-navy">{member.name}</h3>
              <p className="text-sm font-medium text-blue">{member.role}</p>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-grey">{member.bio}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
