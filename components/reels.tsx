"use client"

import { useEffect, useRef, useState } from "react"
import type { Reel } from "@/lib/content"
import { Photo } from "./photo"
import { LoopVideo } from "./loop-video"

/** Instagram's own embed page for a reel: no embed.js needed, works with /{user}/reel/{id}/ links. */
const embedUrl = (url: string) => {
  const id = url.match(/\/(?:reel|p)\/([^/?#]+)/)?.[1]
  return id ? `https://www.instagram.com/p/${id}/embed/` : null
}

export function Reels({ reels }: { reels: Reel[] }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState<Reel | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const [height, setHeight] = useState(760)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  // The embed page reports its content height via postMessage ({type:"MEASURE"}).
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (!/^https:\/\/www\.instagram\.com$/.test(e.origin) || typeof e.data !== "string") return
      try {
        const d = JSON.parse(e.data)
        if (d.type === "MEASURE" && d.details?.height > 100) setHeight(Math.ceil(d.details.height))
      } catch {}
    }
    addEventListener("message", onMsg)
    return () => removeEventListener("message", onMsg)
  }, [])

  const open = (reel: Reel) => {
    setLoaded(false)
    setFailed(!embedUrl(reel.url))
    setHeight(760)
    setActive(reel)
    dialog.current?.showModal()
    clearTimeout(timer.current)
    // Blocked (content blocker, offline, private post): offer the direct link.
    timer.current = setTimeout(() => setFailed(true), 10000)
  }

  const onClose = () => {
    clearTimeout(timer.current)
    setActive(null) // unmounts the iframe, which stops playback
  }

  return (
    <>
      <ul className="relative -mx-4 flex snap-x snap-mandatory scroll-px-4 sm:scroll-px-0 gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {reels.map((r, i) => (
          <li key={r.url} className="st w-[76vw] max-w-[300px] shrink-0 snap-start sm:w-auto sm:max-w-none" style={{ "--i": i } as React.CSSProperties}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey) return
                e.preventDefault()
                open(r)
              }}
              className="tilt glare group relative block rounded-2xl active:scale-[0.98]"
              data-tilt="9"
              data-cursor="Play"
              aria-label={`Watch reel: “${r.caption}”, ${r.views} views`}
            >
              <Photo slot={r.cover} sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 76vw" className="zoom" />
              {r.video && <LoopVideo src={r.video} />}
              <span aria-hidden className="mono absolute left-3 top-3 rounded-full bg-bg px-2.5 py-1 !text-[11px] text-ink">
                #{i + 1}
              </span>
              <span aria-hidden className="mono num absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 !text-[12px] text-bg">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4v16l14-8z" /></svg>
                {r.views}
              </span>
              <span className="absolute bottom-3 right-3">
                <span className="pulse flex h-12 w-12 items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:scale-115 motion-reduce:transition-none">
                  <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
                </span>
              </span>
            </a>
            <div className="pt-4">
              <span className={`chip mono !text-[11px] ${r.brand ? "chip-filled" : ""}`}>{r.chip}</span>
              <p className="display num mt-3 text-[32px] sm:text-4xl">{r.views}</p>
              <p className="mt-2 text-[16px]">“{r.caption}”</p>
              <p className="mono num mt-2 !text-[11px] text-muted">
                {r.likes} likes · {r.comments} comments · {r.shares} shares · {r.engagement} engagement
              </p>
              <div className="mt-3 h-1 rounded-full bg-line" role="presentation">
                <div className="bar h-full rounded-full bg-accent" style={{ width: `${r.bar}%` }} />
              </div>
              <span className="sr-only">{i === 0 ? "Top reel" : `${r.bar}% of top reel views`}</span>
            </div>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label={active ? `Reel: ${active.caption}` : "Reel"}
        onClose={onClose}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto max-h-[92dvh] w-[min(420px,calc(100vw-32px))] overflow-y-auto rounded-2xl bg-surface p-0 text-ink"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-2">
          <span className="mono !text-[11px] text-muted">{active?.views} views</span>
          <button
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center"
            aria-label="Close reel"
            onClick={() => dialog.current?.close()}
          >
            <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        <div className="p-3">
          <div className="relative overflow-hidden rounded-xl bg-bg" style={{ height: failed ? undefined : height, maxHeight: "calc(92dvh - 140px)" }}>
            {active && !failed && embedUrl(active.url) && (
              <iframe
                key={active.url}
                src={embedUrl(active.url)!}
                title={`Instagram reel: ${active.caption}`}
                allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                allowFullScreen
                onLoad={() => {
                  setLoaded(true)
                  clearTimeout(timer.current)
                }}
                className="absolute inset-0 h-full w-full border-0"
              />
            )}
            {!loaded && !failed && (
              <p className="absolute inset-0 flex items-center justify-center text-muted" aria-live="polite">Loading reel…</p>
            )}
          </div>
          {active && (
            <p className="pt-3 text-center">
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className={failed ? "btn btn-primary" : "inline-flex min-h-[44px] items-center text-[14px] text-muted underline underline-offset-4"}
              >
                {failed ? "Couldn't load here. Open on Instagram ↗" : "Open on Instagram ↗"}
              </a>
            </p>
          )}
        </div>
      </dialog>
    </>
  )
}
