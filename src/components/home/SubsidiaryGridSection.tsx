import { subsidiaries } from "@/data/subsidiaries";
import { Reveal, StaggerGroup } from "@/components/Reveal";
import { SubsidiaryCard } from "@/components/SubsidiaryCard";

export function SubsidiaryGridSection() {
  return (
    <section id="subsidiaries" className="bg-[#F7F8FA] py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">
            The Ecosystem
          </p>
          <h2 className="font-display mt-3 text-balance text-4xl font-bold text-navy md:text-5xl">
            Six Subsidiaries. One Vision.
          </h2>
          <p className="mt-4 text-balance text-lg text-grey">
            Each division carries its own identity and expertise, unified by the
            Quelron standard of excellence.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subsidiaries.map((s) => (
            <SubsidiaryCard key={s.slug} s={s} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
