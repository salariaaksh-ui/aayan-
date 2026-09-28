"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Silent looping clip (src = .mp4; a same-name .webm is used as fallback) laid over a cover image. Nothing downloads until the card
 * is near the viewport; it plays while at least half visible and pauses otherwise.
 * Under reduced motion it never loads, so the cover image stays.
 */
export function LoopVideo({ src, className = "" }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)
  const [playing, setPlaying] = useState(false)
  const visible = useRef(false)

  useEffect(() => {
    const v = ref.current
    if (!v || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const near = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setLoad(true)
        near.disconnect()
      }
    }, { rootMargin: "300px" })
    const vis = new IntersectionObserver(([e]) => {
      visible.current = e.intersectionRatio >= 0.5
      if (visible.current) v.play().catch(() => {})
      else v.pause()
    }, { threshold: [0, 0.5] })
    near.observe(v)
    vis.observe(v)
    return () => {
      near.disconnect()
      vis.disconnect()
    }
  }, [])

  // <source> children added after mount need an explicit load()
  useEffect(() => {
    if (load) ref.current?.load()
  }, [load])

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      tabIndex={-1}
      onCanPlay={(e) => visible.current && e.currentTarget.play().catch(() => {})}
      onPlaying={() => setPlaying(true)}
      className={`pointer-events-none absolute inset-0 h-full w-full rounded-2xl object-cover transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {/* H.264 first (Safari/iOS), VP9 WebM for browsers without H.264 */}
      {load && <source src={src} type="video/mp4" />}
      {load && <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />}
    </video>
  )
}
