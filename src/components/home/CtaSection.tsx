import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue/30 blur-[120px]"
        aria-hidden
      />
      <div className="container-px relative mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-balance text-4xl font-bold text-white md:text-6xl">
            Ready to Join the Quelron Ecosystem?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-white/60">
            Whether you&rsquo;re a partner, client, or future team member — let&rsquo;s build
            something extraordinary together.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-session"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book a Session
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
