"use client"

import { useRef, useState } from "react"
import type { Reel } from "@/lib/content"
import { Photo } from "./photo"

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

const EMBED_SRC = "https://www.instagram.com/embed.js"

function loadEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SRC}"]`)
    const s = existing ?? document.createElement("script")
    s.addEventListener("load", () => resolve(), { once: true })
    s.addEventListener("error", () => reject(), { once: true })
    if (!existing) {
      s.src = EMBED_SRC
      s.async = true
      document.body.appendChild(s)
    }
  })
}

export function Reels({ reels }: { reels: Reel[] }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState<Reel | null>(null)
  const [failed, setFailed] = useState(false)
  // embed.js swaps the blockquote for an iframe, so React must not own this subtree.
  const host = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const open = async (reel: Reel) => {
    setFailed(false)
    setActive(reel)
    dialog.current?.showModal()
    if (host.current) {
      const bq = document.createElement("blockquote")
      bq.className = "instagram-media"
      bq.dataset.instgrmPermalink = reel.url
      bq.dataset.instgrmVersion = "14"
      bq.style.cssText = "margin:0;width:100%;min-width:0;border:0"
      const a = document.createElement("a")
      a.href = reel.url
      a.target = "_blank"
      a.rel = "noopener noreferrer"
      a.className = "block p-6 text-center text-muted"
      a.textContent = "Loading reel…"
      bq.appendChild(a)
      host.current.replaceChildren(bq)
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      // Embed never sized itself (blocked, private, or offline) — offer the direct link.
      const f = host.current?.querySelector("iframe")
      if (!f || f.offsetHeight < 100) setFailed(true)
    }, 8000)
    try {
      await loadEmbedScript()
      // embed.js only scans on first load; process() picks up later blockquotes.
      window.instgrm?.Embeds.process()
    } catch {
      setFailed(true)
    }
  }

  const onClose = () => {
    clearTimeout(timer.current)
    host.current?.replaceChildren() // stops playback
    setActive(null)
  }

  return (
    <>
      <ul className="relative -mx-4 flex snap-x snap-mandatory scroll-px-4 sm:scroll-px-0 gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {reels.map((r, i) => (
          <li key={r.url} className="w-[72vw] max-w-[300px] shrink-0 snap-start sm:w-auto sm:max-w-none">
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey) return
                e.preventDefault()
                open(r)
              }}
              className="group relative block rounded-2xl"
              aria-label={`Watch reel: “${r.caption}”, ${r.views} views`}
            >
              <Photo slot={r.cover} sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 72vw" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-bg transition-transform duration-200 group-hover:scale-105 motion-reduce:transition-none">
                  <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
                </span>
              </span>
            </a>
            <div className="pt-4">
              <span className={`chip mono !text-[11px] ${r.brand ? "chip-filled" : ""}`}>{r.chip}</span>
              <p className="display num mt-3 text-4xl">{r.views}</p>
              <p className="mt-2 text-[16px]">“{r.caption}”</p>
              <p className="mono num mt-2 !text-[11px] text-muted">
                {r.likes} likes · {r.comments} comments · {r.shares} shares · {r.engagement} engagement
              </p>
              <div className="mt-3 h-1 rounded-full bg-line" role="presentation">
                <div className="h-full rounded-full bg-accent" style={{ width: `${r.bar}%` }} />
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
          <div ref={host} className="relative min-h-24" />
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
