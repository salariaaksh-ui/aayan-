import { site } from "@/lib/content"

const wrap = "mx-auto w-full max-w-[1160px] px-4 sm:px-5"

export function Footer() {
  return (
    <footer>
      <div className={`${wrap} overflow-hidden pt-12 sm:pt-16`} aria-hidden>
        <p className="wm display flex select-none justify-center whitespace-nowrap text-[19.5vw] leading-[0.8] text-line lg:text-[268px]" data-parallax="0.05">
          {"AAYAN".split("").map((c, i) => <span key={i}>{c}</span>)}
        </p>
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
          <a href="#top" className="group inline-flex min-h-[44px] items-center gap-1 hover:underline">Back to top <span aria-hidden className="inline-block transition-transform duration-300 group-hover:-translate-y-1">↑</span></a>
        </div>
      </div>
    </footer>
  )
}
