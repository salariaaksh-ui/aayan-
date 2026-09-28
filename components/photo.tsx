import Image from "next/image"
import type { ImageSlot } from "@/lib/content"

/** Real photo when src is set, labelled placeholder otherwise. Same box either way — no layout shift. */
export function Photo({
  slot,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  className = "",
}: {
  slot: ImageSlot
  priority?: boolean
  sizes?: string
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: slot.ratio }}
    >
      {slot.src ? (
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${slot.alt} (photo coming soon)`}
          className="ph absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center"
        >
          <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span className="mono !text-[11px]">{slot.label}</span>
        </div>
      )}
    </div>
  )
}
