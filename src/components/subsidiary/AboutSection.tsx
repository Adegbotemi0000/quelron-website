import Image from "next/image";
import type { Subsidiary } from "@/data/subsidiaries";
import { Reveal } from "@/components/Reveal";
import { MapPin } from "lucide-react";

export function AboutSection({ s }: { s: Subsidiary }) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: s.colors.primary }}>
            About This Division
          </p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-navy md:text-4xl">
            The story behind {s.name}
          </h2>
          <p className="mt-6 text-balance text-base leading-relaxed text-grey md:text-lg">
            {s.longDescription}
          </p>
          {s.locations && s.locations.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {s.locations.map((loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-1.5 rounded-full border border-black/10 px-3.5 py-1.5 text-xs font-medium text-navy/70"
                >
                  <MapPin size={12} style={{ color: s.colors.primary }} />
                  {loc}
                </div>
              ))}
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 h-56 overflow-hidden rounded-3xl md:h-64">
            <Image src={s.imagery.accent[0]} alt="" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative h-40 overflow-hidden rounded-3xl">
            <Image src={s.imagery.accent[1]} alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative h-40 overflow-hidden rounded-3xl">
            <Image src={s.imagery.accent[2]} alt="" fill className="object-cover" sizes="25vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
