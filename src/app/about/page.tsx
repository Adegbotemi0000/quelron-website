import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup } from "@/components/Reveal";
import { GroupTeamSection } from "@/components/GroupTeamSection";
import { subsidiaries } from "@/data/subsidiaries";
import { IMG, ux } from "@/lib/unsplash";
import { Target, Compass, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, vision, and philosophy behind Quelron Group — a unified holding company built on six distinct subsidiaries.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Six Industries. One Standard of Excellence."
        description="Quelron Group was founded on a simple belief: that ambition should have no ceiling, and that excellence in one field should uplift every other."
      />

      {/* Origin story */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Origin</p>
            <h2 className="font-display mt-3 text-balance text-3xl font-bold text-navy md:text-4xl">
              From a single idea to a group of six
            </h2>
            <div className="mt-6 space-y-4 text-balance text-base leading-relaxed text-grey md:text-lg">
              <p>
                Quelron Group began as a single conviction — that a company built on
                genuine craftsmanship could compete anywhere, in any industry. What
                started as one venture grew, deliberately and carefully, into six:
                each chosen not for convenience, but for the chance to do
                extraordinary work in a field that deserved it.
              </p>
              <p>
                Today, Quelron Tech builds the software that powers modern
                businesses. Quelron Inc supplies the cards and identity
                systems that organizations run on. Quelron Autos sources and
                delivers vehicles for the discerning. Quelron Farms feeds
                communities sustainably. Quelron Apparels dresses with
                intention. And Quelron Artisan gives makers a global stage.
              </p>
              <p>
                Different markets, different customers, different rhythms — but
                one shared DNA: precision, integrity, and an obsession with doing
                things properly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-64 overflow-hidden rounded-3xl">
              <Image src={ux(IMG.about.office)} alt="" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative h-40 overflow-hidden rounded-3xl">
              <Image src={ux(IMG.about.team)} alt="" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative h-40 overflow-hidden rounded-3xl">
              <Image src={ux(IMG.about.hq)} alt="" fill className="object-cover" sizes="25vw" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission / Philosophy */}
      <section className="bg-[#F7F8FA] py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Our Vision",
                text: "To be a global standard-bearer for excellence across every industry we enter.",
              },
              {
                icon: Target,
                title: "Our Mission",
                text: "Build subsidiaries that lead their markets on quality, integrity, and care for the people they serve.",
              },
              {
                icon: Sparkles,
                title: "Our Philosophy",
                text: "Unified diversity — one brand DNA, six distinct expressions, infinite room to grow.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-black/5 bg-white p-8" style={{opacity:1}}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                  <item.icon size={22} />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">{item.text}</p>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Org structure */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Structure</p>
            <h2 className="font-display mt-3 text-balance text-3xl font-bold text-navy md:text-5xl">
              How the Group is Organized
            </h2>
            <p className="mt-4 text-balance text-lg text-grey">
              Quelron Group sits at the center, providing capital, standards, and
              shared services — while each subsidiary operates with full
              creative and operational autonomy in its market.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative mt-16 flex flex-col items-center">
            <div className="rounded-2xl bg-navy px-8 py-4 text-center text-white shadow-xl">
              <p className="font-display text-lg font-semibold">Quelron Group</p>
              <p className="text-xs text-white/50">Parent Holding Company</p>
            </div>
            <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {subsidiaries.map((s) => (
                <Link
                  key={s.slug}
                  href={`/subsidiaries/${s.slug}`}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full transition-transform group-hover:scale-125"
                    style={{ backgroundColor: s.colors.primary }}
                  />
                  <span className="text-xs font-semibold text-navy">{s.name}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <GroupTeamSection />

      {/* Innovation commitment */}
      <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div className="grain pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-px relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#06D6A0]">
              Looking Forward
            </p>
            <h2 className="font-display mt-3 text-balance text-3xl font-bold md:text-5xl">
              Investing in what comes next
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-balance text-white/60">
              We reinvest across the group — in technology, in talent, and in the
              markets we serve — because a company that stops evolving stops
              leading.
            </p>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
