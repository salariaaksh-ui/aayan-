import Link from "next/link"
import { about, collabs, gallery, hero, images, lanes, reels, services, site, stats } from "@/lib/content"
import { Nav } from "@/components/nav"
import { Photo } from "@/components/photo"
import { CountUp } from "@/components/count-up"
import { Reels } from "@/components/reels"
import { Gallery } from "@/components/gallery"
import { CopyEmail } from "@/components/copy-email"
import { RevealObserver } from "@/components/reveal"
import { Fx } from "@/components/fx"
import { Footer } from "@/components/footer"

const wrap = "mx-auto w-full max-w-[1160px] px-4 sm:px-5"
const section = "py-14 sm:py-[72px] lg:py-[120px]"

// Home page shows only the featured shots; the rest live on /gallery.
const galleryFeatured = gallery.filter((g) => g.featured && g.src).slice(0, 3)

/** Stagger index for .st / .enter children */
const v = (vars: Record<string, string | number>) => vars as React.CSSProperties

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
    <div className="relative pt-5">
      <span aria-hidden className="sect-line absolute inset-x-0 top-0 h-px bg-ink" />
      <p className="mono text-muted">{eyebrow}</p>
      <h2 id={id} className="sect-title display mt-3 max-w-[18ch] text-[34px] sm:mt-4 sm:text-[52px]">
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
        <section id="top" aria-labelledby="hero-title" className={`${wrap} relative isolate pt-[calc(var(--nav-h)+16px)] pb-14 sm:pb-[72px] lg:pt-[calc(var(--nav-h)+56px)] lg:pb-[120px]`}>
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_65%,transparent)]">
            <div className="blob blob-a" />
            <div className="blob blob-b" />
          </div>
          <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
            <div>
              <p className="enter mono flex items-center gap-3 text-muted" style={v({ "--d": "0ms" })}>
                <span aria-hidden className="h-px w-8 bg-ink" />
                {hero.eyebrow}
              </p>
              <h1 id="hero-title" className="display mt-3 text-[clamp(60px,22vw,112px)] sm:mt-4 lg:text-[150px]">
                <span className="sr-only">{hero.headline}</span>
                <span aria-hidden className="rise-word">
                  {hero.headline.split("").map((c, i) => (
                    <span key={i} style={v({ "--i": i })}>{c}</span>
                  ))}
                </span>
              </h1>
              <p className="enter mt-5 max-w-[22ch] text-[22px] font-semibold leading-snug sm:mt-6 sm:text-[30px]" style={v({ "--d": "420ms" })}>
                {hero.sub} <span className="mark">{hero.subMark}</span>
              </p>
              <p className="enter mt-4 max-w-[46ch] text-muted" style={v({ "--d": "520ms" })}>{hero.support}</p>
              <div className="enter mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap" style={v({ "--d": "620ms" })}>
                <a href="#contact" className="btn btn-primary" data-magnetic>Work with me <span aria-hidden className="arr">→</span></a>
                <a href="#reels" className="btn btn-secondary" data-magnetic>Watch reels</a>
              </div>
              <p className="enter mt-10 hidden flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line pt-5 sm:flex" style={v({ "--d": "720ms" })}>
                <span className="mono !text-[11px] text-muted">Collabs with</span>
                <span className="display text-[20px]">Zudio</span>
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-[230px] sm:max-w-[420px] lg:max-w-none" data-parallax="-0.06">
              <div className="tilt glare rounded-2xl" data-tilt="7">
                <Photo slot={images.hero} priority sizes="(min-width: 1024px) 45vw, 420px" className="enter-photo shadow-[0_30px_60px_-30px_rgb(27_24_20/0.45)]" />
              </div>
              <p aria-hidden className="mono absolute -right-2 top-6 hidden origin-top-right -rotate-90 !text-[11px] text-muted lg:block">
                {site.handle}
              </p>
            </div>
          </div>
        </section>

        {/* Signature: caption tape — his real reel captions, the lines people share */}
        <div aria-hidden className="tapes">
          <div className="tape tape-back overflow-hidden bg-accent py-2.5 text-on-accent sm:py-3">
            <div className="tape-track flex w-max">
              {[0, 1].map((k) => (
                <div key={k} className="mono flex shrink-0 items-center !text-[12px] sm:!text-[13px]">
                  {Array.from({ length: 4 }, (_, j) => (
                    <span key={j} className="flex items-center whitespace-nowrap">
                      <span className="px-4">Open for collabs</span>✦<span className="px-4">Humour</span>✦<span className="px-4">Fits</span>✦<span className="px-4">Travel</span>✦
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        <div className="tape relative overflow-hidden border-y border-ink bg-ink py-3 text-bg sm:py-4">
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
          <p className="mono mt-4 flex items-center gap-2 !text-[11px] text-muted md:hidden">Swipe <span aria-hidden className="swipe-arr">→</span></p>
          <ul className="-mx-4 mt-5 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-3 sm:-mx-5 sm:scroll-px-5 sm:px-5 md:mx-0 md:mt-12 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
            {lanes.map((l, i) => (
              <li key={l.title} className="card st flex w-[80vw] max-w-[340px] shrink-0 snap-start flex-col p-5 sm:p-6 md:w-auto md:max-w-none lg:p-8" data-tilt="5" style={v({ "--i": i })}>
                <div className="flex items-center justify-between">
                  <span className="chip mono !text-[11px]">{l.label}</span>
                  <span aria-hidden className="mono num !text-[11px] text-muted">0{i + 1}/0{lanes.length}</span>
                </div>
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
          <SectionTitle id="collabs-title" eyebrow={`Brand collabs · ${collabs.length}`}>Collabs so far</SectionTitle>
          <ul className={`mt-8 grid gap-4 sm:mt-12 sm:gap-5 ${collabs.length > 1 ? "lg:grid-cols-2" : "max-w-[760px]"}`}>
            {collabs.map((c, i) => (
              <li key={c.title} style={v({ "--i": i })} className="card st group grid grid-cols-[clamp(76px,24vw,96px)_1fr] gap-x-4 gap-y-0 p-4 sm:grid-cols-[2fr_3fr] sm:grid-rows-[auto_1fr] sm:gap-x-5 sm:p-5">
                <Photo slot={c.image} sizes="(min-width: 1024px) 200px, (min-width: 640px) 35vw, 96px" className="zoom sm:row-span-2" />
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
                    className="nudge mt-3 inline-flex min-h-[44px] items-center gap-1 self-start font-semibold text-accent sm:mt-5"
                  >
                    <span className="draw">Watch the reel</span> <span aria-hidden className="arr">↗</span><span className="sr-only"> (opens Instagram)</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted">Open to brand and agency collabs.</p>
        </section>

        {/* 7 · Gallery */}
        <section aria-labelledby="gallery-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <SectionTitle id="gallery-title" eyebrow={`Gallery · ${gallery.length} photos`}>Fits, shoots &amp; travel</SectionTitle>
          <div className="mt-8 sm:mt-12">
            <Gallery items={galleryFeatured} variant="row" />
          </div>
          <Link href="/gallery" className="btn btn-secondary mt-8" data-magnetic>
            See the full gallery <span aria-hidden className="arr">→</span>
          </Link>
        </section>

        {/* 8 · About */}
        <section id="about" aria-labelledby="about-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <div className="grid gap-8 md:grid-cols-[5fr_7fr] md:items-center md:gap-10 lg:gap-16">
            <div className="tilt glare w-3/4 max-w-[420px] rounded-2xl sm:mx-auto sm:w-full" data-tilt="6">
              <Photo slot={images.about} sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
            <div>
              <SectionTitle id="about-title" eyebrow="About">{about.title}</SectionTitle>
              <p className="mt-5 max-w-[60ch] text-[17px] sm:mt-6 sm:text-[18px]">
                {about.body}
              </p>
              <dl className="mt-8 grid gap-3 border-t border-line pt-6">
                {about.facts.map(([k, val], i) => (
                  <div key={k} style={v({ "--i": i })} className="st grid grid-cols-[112px_1fr] gap-3 sm:gap-4 sm:grid-cols-[150px_1fr]">
                    <dt className="mono !text-[11px] text-muted">{k}</dt>
                    <dd className="mono !text-[12px]">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 9 · Ways to collab */}
        <section aria-labelledby="services-title" className={`${wrap} ${section} reveal pt-0 lg:pt-0`}>
          <SectionTitle id="services-title" eyebrow={`Formats · ${services.length} ways`}>Ways to work together</SectionTitle>
          <ul className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.mark} style={v({ "--i": i })} data-tilt="5" className="card st grid grid-cols-[auto_1fr] content-start gap-x-5 p-5 sm:gap-x-6 sm:p-6 lg:p-8">
                <span className="svc-mark display row-span-2 text-[48px] leading-[0.8] text-accent sm:text-[64px] lg:text-[80px]" aria-hidden>
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
        <section id="contact" aria-labelledby="contact-title" className="inverted overflow-hidden bg-bg text-ink">
          <div className={`${wrap} ${section} reveal relative`}>
            <svg aria-hidden viewBox="0 0 200 200" className="badge-spin pointer-events-none absolute right-4 top-4 w-[80px] text-accent sm:right-5 sm:top-16 sm:w-[150px] lg:top-24 lg:w-[180px]">
              <defs>
                <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text fill="currentColor" style={{ font: "500 15.5px var(--font-mono)", letterSpacing: "0.22em" }}>
                <textPath href="#badge-circle">OPEN FOR COLLABS ✦ DELHI / JAMMU ✦ </textPath>
              </text>
              <path fill="currentColor" d="M100 72l7 21 21 7-21 7-7 21-7-21-21-7 21-7z" />
            </svg>
            <p className="st mono flex items-center gap-3 text-muted"><span aria-hidden className="h-px w-8 bg-ink" />COLLAB ENQUIRIES</p>
            <h2 id="contact-title" style={v({ "--i": 1 })} className="st display mt-5 max-w-[14ch] text-[clamp(38px,11vw,44px)] sm:text-[72px] lg:text-[96px]">
              Let&apos;s make something <span className="mark-contact">people share.</span>
            </h2>
            <div className="st mt-10 border-t border-line pt-8 sm:mt-14" style={v({ "--i": 2 })}>
              <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-x-16">
                <div>
                  <p className="mono !text-[11px] text-muted">Email</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <a href={`mailto:${site.email}`} className="draw break-all text-[18px] font-semibold">
                      {site.email}
                    </a>
                    <CopyEmail />
                  </div>
                </div>
                <div>
                  <p className="mono !text-[11px] text-muted">Instagram</p>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="nudge mt-2 inline-block text-[18px] font-semibold">
                    <span className="draw">{site.handle}</span> <span aria-hidden className="arr">↗</span>
                  </a>
                </div>
                {site.whatsapp && (
                  <div>
                    <p className="mono !text-[11px] text-muted">WhatsApp</p>
                    <a
                      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nudge mt-2 inline-block text-[18px] font-semibold"
                    >
                      <span className="draw">Message on WhatsApp</span> <span aria-hidden className="arr">↗</span>
                    </a>
                  </div>
                )}
                {site.management && (
                  <div>
                    <p className="mono !text-[11px] text-muted">Management</p>
                    <p className="mt-2 text-[18px] font-semibold">{site.management}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11 · Footer */}
      <Footer />
      <RevealObserver />
      <Fx />
    </>
  )
}
