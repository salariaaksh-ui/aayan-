import { about, collabs, gallery, hero, images, lanes, reels, services, site, stats } from "@/lib/content"
import { Nav } from "@/components/nav"
import { Photo } from "@/components/photo"
import { CountUp } from "@/components/count-up"
import { Reels } from "@/components/reels"
import { Gallery } from "@/components/gallery"
import { ContactForm, CopyEmail } from "@/components/contact-form"
import { RevealObserver } from "@/components/reveal"

const wrap = "mx-auto w-full max-w-[1160px] px-4 sm:px-5"
const section = "py-[72px] lg:py-[120px]"

// Optional gallery slots (7–9) hidden until they have a photo.
const galleryItems = gallery.filter((g) => !g.optional || g.src)

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aayan",
  alternateName: site.handle,
  jobTitle: "Content creator",
  email: `mailto:${site.email}`,
  homeLocation: [
    { "@type": "Place", name: "Delhi, India" },
    { "@type": "Place", name: "Jammu, India" },
  ],
  sameAs: [site.instagram],
}

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="display text-[36px] sm:text-[44px]">
      {children}
    </h2>
  )
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        {/* 2 · Hero — no reveal, visible on first paint */}
        <section id="top" aria-labelledby="hero-title" className={`${wrap} pt-[calc(var(--nav-h)+24px)] pb-[72px] lg:pt-[calc(var(--nav-h)+56px)] lg:pb-[120px]`}>
          <div className="flex flex-col-reverse gap-9 lg:grid lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
            <div>
              <p className="mono text-muted">{hero.eyebrow}</p>
              <h1 id="hero-title" className="display mt-3 text-[60px] sm:text-[96px] lg:text-[132px]">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-[22ch] text-[24px] font-semibold leading-snug sm:text-[28px]">
                College humour, fits and travel, <span className="mark">made to be shared.</span>
              </p>
              <p className="mt-4 max-w-[48ch] text-muted">{hero.support}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">Work with me</a>
                <a href="#reels" className="btn btn-secondary">Watch reels</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[250px] sm:max-w-[420px] lg:max-w-none">
              <Photo slot={images.hero} priority sizes="(min-width: 1024px) 45vw, 420px" className="shadow-[0_30px_60px_-30px_rgb(21_23_28/0.45)]" />
              <p className="mono num absolute -bottom-4 left-4 rounded-full border border-line bg-surface px-4 py-2 !text-[12px] text-ink lg:-left-6">
                {hero.tag}
              </p>
            </div>
          </div>
        </section>

        {/* 3 · Numbers strip */}
        <section aria-label="Reel numbers" className="reveal border-y border-line bg-surface">
          <div className={`${wrap} py-12 lg:py-16`}>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-6 lg:grid-cols-5">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col-reverse ${i < 3 ? "sm:col-span-2" : "sm:col-span-3"} lg:col-span-1 ${i === 4 ? "col-span-2 sm:col-span-3" : ""}`}
                >
                  <dt className="mono mt-2 text-muted">{s.label}</dt>
                  <dd className="display text-[44px] sm:text-[52px]">
                    <CountUp value={s.value} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-[14px] text-muted">Public reel counts as of {site.statsDate}.</p>
          </div>
        </section>

        {/* 4 · Content lanes */}
        <section aria-labelledby="lanes-title" className={`${wrap} ${section} reveal`}>
          <SectionTitle id="lanes-title">Three kinds of content</SectionTitle>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {lanes.map((l) => (
              <li key={l.title} className="card flex flex-col p-6">
                <p className="mono !text-[11px] text-accent">{l.label}</p>
                <h3 className="mt-3 text-[20px] font-semibold">{l.title}</h3>
                <p className="mt-2 flex-1 text-[16px] text-muted">{l.text}</p>
                <p className="mono num mt-6 border-t border-line pt-4 !text-[12px]">{l.stat}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 5 · Featured reels */}
        <section id="reels" aria-labelledby="reels-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <SectionTitle id="reels-title">Reels that show the range</SectionTitle>
          <p className="mt-3 text-muted">Tap any reel to watch it here.</p>
          <div className="mt-10">
            <Reels reels={reels} />
          </div>
        </section>

        {/* 6 · Collabs */}
        <section id="collabs" aria-labelledby="collabs-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <SectionTitle id="collabs-title">Collabs so far</SectionTitle>
          <ul className="mt-10 grid gap-5 lg:grid-cols-2">
            {collabs.map((c) => (
              <li key={c.title} className="card grid grid-cols-1 gap-5 p-4 sm:grid-cols-[2fr_3fr] sm:p-5">
                <Photo slot={c.image} sizes="(min-width: 1024px) 200px, (min-width: 640px) 35vw, 100vw" />
                <div className="flex flex-col">
                  <span className="chip mono self-start !text-[11px]">{c.chip}</span>
                  <h3 className="mt-3 text-[20px] font-semibold">{c.title}</h3>
                  <dl className="mt-4 flex gap-5">
                    {c.stats.map((s) => (
                      <div key={s.label} className="flex flex-col-reverse">
                        <dt className="mono !text-[11px] text-muted">{s.label}</dt>
                        <dd className="display num text-[26px]">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 flex-1 text-[16px] text-muted">{c.text}</p>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-[44px] items-center self-start font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    Watch the reel ↗<span className="sr-only"> (opens Instagram)</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">Open to brand, agency and campus-page collabs.</p>
        </section>

        {/* 7 · Gallery */}
        <section aria-labelledby="gallery-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <SectionTitle id="gallery-title">Fits, shoots &amp; travel</SectionTitle>
          <div className="mt-10">
            <Gallery items={galleryItems} />
          </div>
        </section>

        {/* 8 · About */}
        <section id="about" aria-labelledby="about-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:items-center lg:gap-16">
            <Photo slot={images.about} sizes="(min-width: 768px) 40vw, 100vw" className="mx-auto w-full max-w-[420px]" />
            <div>
              <SectionTitle id="about-title">{about.title}</SectionTitle>
              <p className="mt-6 max-w-[60ch] text-[18px]">
                {about.body} <span className="text-muted">{about.bodyPlaceholder}</span>
              </p>
              <dl className="mt-8 grid gap-3 border-t border-line pt-6">
                {about.facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[120px_1fr] gap-4 sm:grid-cols-[150px_1fr]">
                    <dt className="mono !text-[11px] text-muted">{k}</dt>
                    <dd className="mono !text-[12px]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 9 · Ways to collab */}
        <section aria-labelledby="services-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <SectionTitle id="services-title">Ways to work together</SectionTitle>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.mark} className="card p-6">
                <span className="mono flex h-8 w-8 items-center justify-center rounded-full border border-line !text-[12px]" aria-hidden>
                  {s.mark}
                </span>
                <h3 className="mt-4 text-[20px] font-semibold">
                  <span className="sr-only">{s.mark}. </span>
                  {s.title}
                </h3>
                <p className="mt-2 text-[16px] text-muted">{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">Rates and full Instagram Insights (reach, audience age and top cities) shared on request.</p>
          {site.mediaKit && (
            <a href={site.mediaKit} className="btn btn-secondary mt-6" download>
              Download media kit (PDF)
            </a>
          )}
        </section>

        {/* 10 · Contact — inverted block */}
        <section id="contact" aria-labelledby="contact-title" className="inverted bg-bg text-ink">
          <div className={`${wrap} ${section}`}>
            <p className="mono text-muted">COLLAB ENQUIRIES</p>
            <h2 id="contact-title" className="display mt-4 max-w-[16ch] text-[40px] sm:text-[60px] lg:text-[72px]">
              Let&apos;s make something people share.
            </h2>
            <div className="mt-12 grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
              <ContactForm />
              <div className="space-y-8 lg:border-l lg:border-line lg:pl-12">
                <div>
                  <p className="mono !text-[11px] text-muted">Email</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <a href={`mailto:${site.email}`} className="break-all text-[18px] font-semibold underline-offset-4 hover:underline">
                      {site.email}
                    </a>
                    <CopyEmail />
                  </div>
                </div>
                <div>
                  <p className="mono !text-[11px] text-muted">Instagram</p>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[18px] font-semibold underline-offset-4 hover:underline">
                    {site.handle} ↗
                  </a>
                </div>
                {site.management && (
                  <div>
                    <p className="mono !text-[11px] text-muted">Management</p>
                    <p className="mt-2 text-muted">{site.management}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11 · Footer */}
      <footer className="border-t border-line">
        <div className={`${wrap} grid gap-6 py-10 md:grid-cols-[1fr_2fr_1fr] md:items-center`}>
          <div>
            <p className="display text-xl">AAYAN</p>
            <p className="mt-1 text-[14px] text-muted">© 2026 Aayan</p>
          </div>
          <p className="text-[14px] text-muted">
            Stats from public reel counts, {site.statsDate}. Engagement = (likes + comments + shares) ÷ views.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] md:justify-end">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center hover:underline">Instagram</a>
            <a href={`mailto:${site.email}`} className="inline-flex min-h-[44px] items-center hover:underline">Email</a>
            <a href="#top" className="inline-flex min-h-[44px] items-center hover:underline">Back to top ↑</a>
          </div>
        </div>
      </footer>
      <RevealObserver />
    </>
  )
}
