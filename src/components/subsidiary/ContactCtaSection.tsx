import type { Subsidiary } from "@/data/subsidiaries";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export function ContactCtaSection({ s }: { s: Subsidiary }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-px relative mx-auto grid max-w-6xl items-start gap-14 md:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: s.highlight }}>
            Let&rsquo;s Talk
          </p>
          <h2 className="font-display mt-3 text-balance text-3xl font-bold text-white md:text-5xl">
            {s.cta.primary}
          </h2>
          <p className="mt-5 max-w-md text-balance text-white/60">
            Reach out and a member of the {s.name} team will follow up within one
            business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span
              className="rounded-full px-4 py-2 text-xs font-semibold"
              style={{ backgroundColor: s.highlight + "20", color: s.highlight }}
            >
              {s.cta.secondary}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl bg-white p-6 shadow-2xl md:p-8">
          <ContactForm accentColor={s.colors.primary} defaultSubsidiary={s.slug} showSubsidiarySelect={false} />
        </Reveal>
      </div>
    </section>
  );
}
