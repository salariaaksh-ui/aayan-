import { about, collabs, gallery, hero, images, lanes, reels, services, site, stats } from "@/lib/content"
import { Nav } from "@/components/nav"
import { Photo } from "@/components/photo"
import { CountUp } from "@/components/count-up"
import { Reels } from "@/components/reels"
import { Gallery } from "@/components/gallery"
import { ContactForm, CopyEmail } from "@/components/contact-form"
import { RevealObserver } from "@/components/reveal"

const wrap = "mx-auto w-full max-w-[1160px] px-4 sm:px-5"
const section = "py-14 sm:py-[72px] lg:py-[120px]"

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

function SectionTitle({ children, id, eyebrow }: { children: React.ReactNode; id?: string; eyebrow: string }) {
  return (
    <div className="border-t border-ink pt-5">
      <p className="mono text-muted">{eyebrow}</p>
      <h2 id={id} className="display mt-3 max-w-[18ch] text-[34px] sm:mt-4 sm:text-[52px]">
        {children}
      </h2>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        {/* 2 · Hero — no reveal, visible on first paint */}
        <section id="top" aria-labelledby="hero-title" className={`${wrap} pt-[calc(var(--nav-h)+16px)] pb-14 sm:pb-[72px] lg:pt-[calc(var(--nav-h)+56px)] lg:pb-[120px]`}>
          <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
            <div>
              <p className="mono flex items-center gap-3 text-muted">
                <span aria-hidden className="h-px w-8 bg-ink" />
                {hero.eyebrow}
              </p>
              <h1 id="hero-title" className="display mt-3 text-[clamp(60px,22vw,112px)] sm:mt-4 lg:text-[150px]">
                {hero.headline}
              </h1>
              <p className="mt-5 max-w-[22ch] text-[22px] font-semibold leading-snug sm:mt-6 sm:text-[30px]">
                {hero.sub} <span className="mark">{hero.subMark}</span>
              </p>
              <p className="mt-4 max-w-[46ch] text-muted">{hero.support}</p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
                <a href="#contact" className="btn btn-primary">Work with me</a>
                <a href="#reels" className="btn btn-secondary">Watch reels</a>
              </div>
              <p className="mt-10 hidden flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line pt-5 sm:flex">
                <span className="mono !text-[11px] text-muted">Collabs with</span>
                <span className="display text-[20px]">Zudio</span>
                <span aria-hidden className="text-muted">/</span>
                <span className="display text-[20px]">@amityfreshers</span>
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-[230px] sm:max-w-[420px] lg:max-w-none">
              <Photo slot={images.hero} priority sizes="(min-width: 1024px) 45vw, 420px" className="shadow-[0_30px_60px_-30px_rgb(27_24_20/0.45)]" />
              <p className="sticker mono num absolute -bottom-5 left-3 !text-[12px] lg:-left-8">
                <svg aria-hidden width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4v16l14-8z" /></svg>
                {hero.tag}
              </p>
              <p aria-hidden className="mono absolute -right-2 top-6 hidden origin-top-right -rotate-90 !text-[11px] text-muted lg:block">
                {site.handle}
              </p>
            </div>
          </div>
        </section>

        {/* Signature: caption tape — his real reel captions, the lines people share */}
        <div aria-hidden className="tape overflow-hidden border-y border-ink bg-ink py-3 text-bg sm:py-4">
          <div className="tape-track flex w-max">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center">
                {reels.map((r) => (
                  <span key={r.url} className="flex items-center">
                    <span className="display whitespace-nowrap px-4 text-[18px] sm:px-6 sm:text-[28px]">“{r.caption}”</span>
                    <span className="mono num whitespace-nowrap !text-[11px] opacity-70">▶ {r.views}</span>
                    <span className="px-4 text-accent sm:px-6">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 3 · Numbers strip */}
        <section aria-label="Reel numbers" className="reveal border-y border-line bg-surface">
          <div className={`${wrap} py-10 sm:py-12 lg:py-20`}>
            <dl className="stats grid grid-cols-2 gap-y-8 sm:gap-y-10 sm:grid-cols-6 lg:grid-cols-[1.1fr_1fr_0.7fr_0.9fr_1.2fr]">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col-reverse pr-4 sm:px-5 sm:first:pl-0 lg:last:pr-0 ${i < 3 ? "sm:col-span-2" : "sm:col-span-3"} lg:col-span-1 ${i === 0 ? "col-span-2 border-b border-line pb-8 sm:border-0 sm:pb-0" : ""}`}
                >
                  <dt className="mono mt-3 max-w-[16ch] text-muted">{s.label}</dt>
                  <dd className={`display ${i === 0 ? "text-[64px]" : "text-[36px]"} sm:text-[56px] lg:text-[42px] xl:text-[46px] ${i === 0 ? "text-accent" : ""}`}>
                    <CountUp value={s.value} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mono mt-8 !text-[11px] text-muted sm:mt-12">Public reel counts as of {site.statsDate}</p>
          </div>
        </section>

        {/* 4 · Content lanes */}
        <section aria-labelledby="lanes-title" className={`${wrap} ${section} reveal`}>
          <SectionTitle id="lanes-title" eyebrow="What he makes">Three kinds of content</SectionTitle>
          <ul className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
            {lanes.map((l) => (
              <li key={l.title} className="card flex flex-col p-5 sm:p-6 lg:p-8">
                <span className="chip mono self-start !text-[11px]">{l.label}</span>
                <h3 className="display mt-5 text-[26px] leading-none sm:mt-8 sm:text-[28px] lg:text-[32px]">{l.title}</h3>
                <p className="mt-3 flex-1 text-[16px] text-muted sm:mt-4">{l.text}</p>
                <p className="mono num mt-5 border-t border-line pt-4 !text-[12px]">{l.stat}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 5 · Featured reels */}
        <section id="reels" aria-labelledby="reels-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <SectionTitle id="reels-title" eyebrow={`Featured · ${reels.length} reels`}>Reels that show the range</SectionTitle>
          <p className="mt-3 text-muted sm:mt-4">Tap any reel to watch it here.</p>
          <div className="mt-8 sm:mt-12">
            <Reels reels={reels} />
          </div>
        </section>

        {/* 6 · Collabs */}
        <section id="collabs" aria-labelledby="collabs-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <SectionTitle id="collabs-title" eyebrow={`Brand & campus · ${collabs.length} collabs`}>Collabs so far</SectionTitle>
          <ul className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2">
            {collabs.map((c) => (
              <li key={c.title} className="card grid grid-cols-[clamp(76px,24vw,96px)_1fr] gap-x-4 gap-y-0 p-4 sm:grid-cols-[2fr_3fr] sm:grid-rows-[auto_1fr] sm:gap-x-5 sm:p-5">
                <Photo slot={c.image} sizes="(min-width: 1024px) 200px, (min-width: 640px) 35vw, 96px" className="sm:row-span-2" />
                <div className="flex min-w-0 flex-col justify-center sm:justify-start">
                  <span className={`chip mono self-start !text-[11px] ${c.chip === "BRAND" ? "chip-filled" : ""}`}>{c.chip}</span>
                  <h3 className="mt-3 sm:mt-5">
                    <span className={`display block leading-none ${c.title.split(" · ")[0].length > 10 ? "text-[clamp(15px,4.6vw,22px)] sm:text-[30px] lg:text-[26px]" : "text-[30px] sm:text-[40px]"}`}>{c.title.split(" · ")[0]}</span>
                    <span className="mt-2 block text-[16px] font-semibold text-muted">{c.title.split(" · ")[1]}</span>
                  </h3>
                </div>
                <div className="col-span-2 flex min-w-0 flex-col sm:col-span-1">
                  <dl className="mt-5 flex gap-5 border-y sm:gap-6 border-line py-4">
                    {c.stats.map((s) => (
                      <div key={s.label} className="flex flex-col-reverse">
                        <dt className="mono !text-[11px] text-muted">{s.label}</dt>
                        <dd className="display num text-[clamp(20px,6.5vw,26px)]">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 flex-1 text-[16px] text-muted">{c.text}</p>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-[44px] items-center self-start font-semibold text-accent sm:mt-5 underline-offset-4 hover:underline"
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
          <SectionTitle id="gallery-title" eyebrow="Gallery">Fits, shoots &amp; travel</SectionTitle>
          <div className="mt-8 sm:mt-12">
            <Gallery items={galleryItems} />
          </div>
        </section>

        {/* 8 · About */}
        <section id="about" aria-labelledby="about-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <div className="grid gap-8 md:grid-cols-[5fr_7fr] md:items-center md:gap-10 lg:gap-16">
            <Photo slot={images.about} sizes="(min-width: 768px) 40vw, 100vw" className="w-3/4 max-w-[420px] sm:mx-auto sm:w-full" />
            <div>
              <SectionTitle id="about-title" eyebrow="About">{about.title}</SectionTitle>
              <p className="mt-5 max-w-[60ch] text-[17px] sm:mt-6 sm:text-[18px]">
                {about.body} <span className="text-muted">{about.bodyPlaceholder}</span>
              </p>
              <dl className="mt-8 grid gap-3 border-t border-line pt-6">
                {about.facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[112px_1fr] gap-3 sm:gap-4 sm:grid-cols-[150px_1fr]">
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
          <SectionTitle id="services-title" eyebrow={`Formats · ${services.length} ways`}>Ways to work together</SectionTitle>
          <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
            {services.map((s) => (
              <li key={s.mark} className="card grid grid-cols-[auto_1fr] gap-x-5 p-5 sm:gap-x-6 sm:p-6 lg:p-8">
                <span className="display row-span-2 text-[48px] leading-[0.8] text-accent sm:text-[64px] lg:text-[80px]" aria-hidden>
                  {s.mark}
                </span>
                <h3 className="text-[20px] font-semibold leading-snug sm:text-[22px]">
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
            <p className="mono flex items-center gap-3 text-muted"><span aria-hidden className="h-px w-8 bg-ink" />COLLAB ENQUIRIES</p>
            <h2 id="contact-title" className="display mt-5 max-w-[14ch] text-[clamp(38px,11vw,44px)] sm:text-[72px] lg:text-[96px]">
              Let&apos;s make something <span className="mark-contact">people share.</span>
            </h2>
            <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-[3fr_2fr] lg:gap-16">
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
      <footer>
        <div className={`${wrap} overflow-hidden pt-12 sm:pt-16`} aria-hidden>
          <p className="display select-none whitespace-nowrap text-center text-[19.5vw] leading-[0.8] text-line lg:text-[268px]">AAYAN</p>
        </div>
        <div className={`${wrap} grid gap-6 border-t border-line py-8 sm:py-10 md:grid-cols-[1fr_2fr_1fr] md:items-center`}>
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
