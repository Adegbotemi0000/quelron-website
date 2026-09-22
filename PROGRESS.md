# Quelron Group Website

Marketing site for Quelron Group and its six subsidiaries (Tech, Inc, Autos, Farms, Apparels, Artisan) — built with Next.js.

**Tech Stack:** Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · Framer Motion · React Hook Form + Zod · lucide-react

**Last Updated:** 2026-09-22

## ✅ Completed
- Homepage — animated hero, subsidiary marquee, subsidiary grid, "Why Quelron," news section, CTA
- All 6 subsidiary pages (`/subsidiaries/[slug]`) on one shared template — hero, about, services, why-choose-us, portfolio/testimonials where defined, contact form
- Subsidiary content rewritten to match real businesses (Tech, Inc — cards/identity/TapProfile, Autos — sourcing & import, Farms — Ekiti State food & livestock, Apparels — incl. bespoke/sportswear, Artisan)
- About Us page — origin story, vision/mission/philosophy, org chart, Group Leadership section (Taiwo Adeyeye – CEO, Gbotemi Ayodeji Alao – COO, Khaleed Usman – Head of Design)
- Group Leadership section redesigned — large 3:4 floating portrait photo cards (replacing small circular avatars), full-resolution uncropped team photos
- Full site source (previously only the create-next-app skeleton was tracked) committed and pushed to GitHub for the first time
- Contact page — contact details, Google Maps embed, working (simulated) contact form
- Book a Session page — subsidiary/session-type/date/time picker, working (simulated) booking form
- Sticky navbar with animated Subsidiaries dropdown + mobile menu; footer with subsidiary links and contact info
- Brand logo system: master wordmark + icon extracted/cleaned from `Primary Master.png`, white variants generated for dark backgrounds, used consistently across navbar/footer/hero/favicon
- SEO: metadata, Open Graph tags, `sitemap.ts`, `robots.ts`
- Accessibility basics: skip link, focus-visible states, `prefers-reduced-motion` support, alt text
- Deployed to Vercel (production): **https://quelron-website.vercel.app**

## 🚧 In Progress
- Nothing actively mid-build — last session ended with a clean, verified build

## 📋 Next Steps
- Wire up real email delivery for Contact/Book-a-Session forms (currently simulate submission, no backend)
- Connect the Vercel project to the GitHub repo in the Vercel dashboard for auto-deploy-on-push (currently deployed via `vercel` CLI direct upload)
- Run a Lighthouse/axe accessibility audit and address findings (WCAG 2.1 AA / Lighthouse 90+ goal was never formally measured)
- Consider adding a real booking backend (e.g. Google Calendar API) per original brief
- Add analytics (Vercel Analytics or GA)

## 🐛 Known Issues
- Vercel deploy is done via `vercel` CLI direct upload, not git-linked — pushes to GitHub don't auto-deploy yet
- Contact/booking forms don't actually send anywhere (simulated success state only)
- `Primary Master.png` and an unused dark wordmark variant remain in `public/logos/` as source assets but are excluded from the deploy bundle

## 🔗 Links
- GitHub: https://github.com/Adegbotemi0000/quelron-website
- Deployed: https://quelron-website.vercel.app
- Notion: https://app.notion.com/p/3cc2f05193ac8154a09dc16ad4ef5200
