import { subsidiaries } from "@/data/subsidiaries";

export function TaglineMarquee() {
  const items = [...subsidiaries, ...subsidiaries];
  return (
    <section className="border-y border-black/5 bg-white py-8">
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
          {items.map((s, i) => (
            <span key={i} className="flex shrink-0 items-center gap-2.5 text-sm font-semibold text-navy/40">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.colors.primary }} />
              {s.name}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12" aria-hidden>
          {items.map((s, i) => (
            <span key={i} className="flex shrink-0 items-center gap-2.5 text-sm font-semibold text-navy/40">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.colors.primary }} />
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
