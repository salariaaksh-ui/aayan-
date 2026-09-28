"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import type { ImageSlot } from "@/lib/content"
import { Photo } from "./photo"

/** "masonry": every photo in columns (the /gallery page). "row": a few equal tiles, swipeable on phones (home page). */
export function Gallery({ items, variant = "masonry" }: { items: ImageSlot[]; variant?: "masonry" | "row" }) {
  const row = variant === "row"
  const dialog = useRef<HTMLDialogElement>(null)
  const [idx, setIdx] = useState(0)
  const current = items[idx]
  const go = (d: number) => setIdx((i) => (i + d + items.length) % items.length)

  return (
    <>
      <ul
        className={
          row
            ? "-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0"
            : "columns-2 gap-4 sm:gap-6 lg:columns-3"
        }
      >
        {items.map((slot, i) => (
          <li
            key={slot.label}
            className={row ? "st w-[70vw] max-w-[300px] shrink-0 snap-start sm:w-auto sm:max-w-none" : "st mb-4 break-inside-avoid sm:mb-6"}
            style={{ "--i": i } as React.CSSProperties}
          >
            <button
              type="button"
              data-cursor="View"
              className="group block w-full overflow-hidden rounded-2xl transition-transform active:scale-[0.97]"
              aria-label={`Open photo: ${slot.alt}`}
              onClick={() => {
                setIdx(i)
                dialog.current?.showModal()
              }}
            >
              <Photo
                slot={slot}
                sizes={row ? "(min-width: 640px) 33vw, 70vw" : "(min-width: 1024px) 360px, 50vw"}
                className="transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label="Photo viewer"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1)
          if (e.key === "ArrowLeft") go(-1)
        }}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto w-[min(640px,calc(100vw-32px))] bg-transparent p-0 text-ink"
      >
        <div className="relative rounded-2xl bg-surface p-3">
          {current.src ? (
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: current.ratio, maxHeight: "78dvh" }}>
              <Image src={current.src} alt={current.alt} fill sizes="640px" className="object-contain" />
            </div>
          ) : (
            <Photo slot={current} className="mx-auto max-h-[78dvh]" />
          )}
          <div className="mt-3 flex items-center justify-between">
            <button type="button" className="btn btn-secondary" onClick={() => go(-1)} aria-label="Previous photo">←</button>
            <span className="mono num !text-[11px] text-muted" aria-live="polite">{idx + 1} / {items.length}</span>
            <div className="flex gap-2">
              <button type="button" className="btn btn-secondary" onClick={() => go(1)} aria-label="Next photo">→</button>
              <button type="button" className="btn btn-primary" onClick={() => dialog.current?.close()}>Close</button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
