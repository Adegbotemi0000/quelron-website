import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { subsidiaries } from "@/data/subsidiaries";
import { ShieldCheck, Video, Clock3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Book a consultation session with any Quelron Group subsidiary.",
};

const perks = [
  { icon: Clock3, text: "Sessions typically last 30–45 minutes" },
  { icon: Video, text: "Conducted virtually or in person, your choice" },
  { icon: ShieldCheck, text: "No obligation — just an honest conversation" },
];

export default function BookSessionPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Session"
        title="Let's Talk About What You Need"
        description="Pick a subsidiary, a session type, and a time that works for you. We'll take care of the rest."
      />

      <section className="py-20 md:py-28">
        <div className="container-px mx-auto grid max-w-6xl gap-14 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold text-navy">What to Expect</h2>
            <ul className="mt-8 space-y-6">
              {perks.map((p) => (
                <li key={p.text} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <p.icon size={18} />
                  </div>
                  <p className="pt-2.5 text-sm text-navy/80">{p.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl border border-black/5 bg-[#F7F8FA] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-grey">
                Available Subsidiaries
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {subsidiaries.map((s) => (
                  <span
                    key={s.slug}
                    className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-navy"
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.colors.primary }} />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:col-span-3 md:p-10">
            <h2 className="font-display text-2xl font-bold text-navy">Schedule Your Session</h2>
            <p className="mt-2 text-sm text-grey">
              Fill in your details below and we&rsquo;ll confirm your session by email.
            </p>
            <div className="mt-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
