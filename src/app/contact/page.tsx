import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Quelron Group. We'd love to hear from you.",
};

const details = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
  { icon: MapPin, label: "Office", value: CONTACT.address },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 9am – 6pm" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd Love to Hear From You"
        description="Whether it's a question about one of our subsidiaries or a partnership idea — reach out and our team will respond promptly."
      />

      <section className="py-20 md:py-28">
        <div className="container-px mx-auto grid max-w-6xl gap-14 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold text-navy">Contact Details</h2>
            <ul className="mt-8 space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <d.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-grey">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-navy transition-colors hover:text-blue">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-navy">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-3xl border border-black/5">
              <iframe
                title="Quelron Group office map"
                src="https://www.google.com/maps?q=Lagos%2C%20Nigeria&output=embed"
                className="h-64 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:col-span-3 md:p-10">
            <h2 className="font-display text-2xl font-bold text-navy">Send a Message</h2>
            <p className="mt-2 text-sm text-grey">
              Fill out the form and we&rsquo;ll route your message to the right team.
            </p>
            <div className="mt-8">
              <ContactForm accentColor="#1E3A8A" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
