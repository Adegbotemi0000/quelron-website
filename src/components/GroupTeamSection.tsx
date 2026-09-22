"use client";

import Image from "next/image";
import { groupTeam } from "@/data/team";
import { StaggerGroup, staggerItem, Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export function GroupTeamSection() {
  return (
    <section className="py-24 md:py-32">
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

        <StaggerGroup className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
          {groupTeam.map((member) => (
            <motion.div key={member.name} variants={staggerItem} whileHover={{ y: -6 }} className="group text-center">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="160px"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-blue/20 ring-offset-4" />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-navy">{member.name}</h3>
              <p className="text-sm font-medium text-blue">{member.role}</p>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-grey">{member.bio}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
