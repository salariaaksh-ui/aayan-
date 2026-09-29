import { site, whatsappHref } from "@/lib/content"

const link =
  "nudge inline-flex min-h-[44px] items-center gap-1 px-4 text-[14px] font-semibold transition-colors hover:text-accent focus-visible:text-accent"

/** Always-visible corner shortcuts. Plain text (no platform logos, per brief). */
export function SocialDock() {
  return (
    <nav
      aria-label="Message Aayan"
      className="fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-4 z-30 flex items-center rounded-full bg-ink text-bg shadow-[0_12px_30px_-10px_rgb(0_0_0/0.45)] ring-1 ring-bg/15 sm:right-5"
    >
      {whatsappHref && (
        <>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={link}>
            WhatsApp <span aria-hidden className="arr">↗</span>
          </a>
          <span aria-hidden className="h-5 w-px bg-bg/25" />
        </>
      )}
      <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={link}>
        Instagram <span aria-hidden className="arr">↗</span>
      </a>
    </nav>
  )
}
