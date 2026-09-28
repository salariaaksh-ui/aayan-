"use client"

import { useEffect } from "react"

/**
 * Pointer + scroll effects, all event-delegated from one set of listeners:
 * - custom cursor ring/dot; [data-cursor="Play"] shows a label, links grow the ring
 * - [data-tilt]: 3D tilt toward the pointer (+ glare via --mx/--my)
 * - .card: spotlight position (--mx/--my)
 * - [data-magnetic]: element drifts toward the pointer
 * - [data-parallax="0.08"]: scroll parallax (≥1024px)
 * Fine pointers only for the pointer effects; nothing runs under reduced motion.
 */
export function Fx() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const root = document.documentElement
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches
    const cleanups: (() => void)[] = []

    // ── Parallax (desktop layouts only; on phones it collides with stacked content) ──
    const para = [...document.querySelectorAll<HTMLElement>("[data-parallax]")]
    if (para.length && matchMedia("(min-width: 1024px)").matches) {
      let raf = 0
      const update = () => {
        raf = 0
        const vh = innerHeight
        for (const el of para) {
          const r = el.getBoundingClientRect()
          if (r.bottom < -200 || r.top > vh + 200) continue
          const f = parseFloat(el.dataset.parallax || "0")
          el.style.translate = `0 ${((r.top + r.height / 2 - vh / 2) * f).toFixed(1)}px`
        }
      }
      const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
      update()
      addEventListener("scroll", onScroll, { passive: true })
      cleanups.push(() => removeEventListener("scroll", onScroll))
    }

    if (!fine) return () => cleanups.forEach((c) => c())

    // ── Cursor ──
    const ring = document.createElement("div")
    const dot = document.createElement("div")
    ring.className = "cur-ring"
    dot.className = "cur-dot"
    ring.setAttribute("aria-hidden", "true")
    dot.setAttribute("aria-hidden", "true")
    document.body.append(ring, dot)

    let x = -100, y = -100, rx = x, ry = y, raf = 0
    let tiltEl: HTMLElement | null = null
    let magEl: HTMLElement | null = null

    const loop = () => {
      rx += (x - rx) * 0.2
      ry += (y - ry) * 0.2
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      dot.style.transform = `translate(${x}px, ${y}px)`
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.2 ? requestAnimationFrame(loop) : 0
    }

    const resetTilt = () => {
      if (!tiltEl) return
      tiltEl.classList.remove("tilting")
      tiltEl.style.removeProperty("--rx")
      tiltEl.style.removeProperty("--ry")
      tiltEl = null
    }
    const resetMag = () => {
      if (!magEl) return
      magEl.style.translate = ""
      magEl = null
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return
      x = e.clientX
      y = e.clientY
      root.classList.add("cursor-on")
      if (!raf) raf = requestAnimationFrame(loop)

      const t = e.target as Element
      const labelled = t.closest<HTMLElement>("[data-cursor]")
      const link = t.closest("a, button, select, label, [role=button]")
      root.classList.toggle("cursor-label", !!labelled)
      root.classList.toggle("cursor-link", !labelled && !!link)
      ring.textContent = labelled?.dataset.cursor ?? ""

      // Spotlight on cards
      const card = t.closest<HTMLElement>(".card")
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty("--mx", `${x - r.left}px`)
        card.style.setProperty("--my", `${y - r.top}px`)
      }

      // Tilt
      const tl = t.closest<HTMLElement>("[data-tilt]")
      if (tl !== tiltEl) resetTilt()
      if (tl) {
        tiltEl = tl
        const r = tl.getBoundingClientRect()
        const px = (x - r.left) / r.width
        const py = (y - r.top) / r.height
        const max = parseFloat(tl.dataset.tilt || "8")
        tl.classList.add("tilting")
        tl.style.setProperty("--ry", `${((px - 0.5) * max * 2).toFixed(2)}deg`)
        tl.style.setProperty("--rx", `${((0.5 - py) * max * 2).toFixed(2)}deg`)
        tl.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`)
        tl.style.setProperty("--my", `${(py * 100).toFixed(1)}%`)
      }

      // Magnetic
      const mg = t.closest<HTMLElement>("[data-magnetic]")
      if (mg !== magEl) resetMag()
      if (mg) {
        magEl = mg
        const r = mg.getBoundingClientRect()
        const dx = x - (r.left + r.width / 2)
        const dy = y - (r.top + r.height / 2)
        mg.style.translate = `${(dx * 0.25).toFixed(1)}px ${(dy * 0.35).toFixed(1)}px`
      }
    }
    const onLeave = () => {
      root.classList.remove("cursor-on", "cursor-link", "cursor-label")
      resetTilt()
      resetMag()
    }
    const onDown = () => ring.animate([{ scale: 1 }, { scale: 0.8 }, { scale: 1 }], { duration: 300 })

    addEventListener("pointermove", onMove, { passive: true })
    addEventListener("pointerdown", onDown, { passive: true })
    document.addEventListener("pointerleave", onLeave)
    cleanups.push(() => {
      removeEventListener("pointermove", onMove)
      removeEventListener("pointerdown", onDown)
      document.removeEventListener("pointerleave", onLeave)
      cancelAnimationFrame(raf)
      ring.remove()
      dot.remove()
      root.classList.remove("cursor-on", "cursor-link", "cursor-label")
    })
    return () => cleanups.forEach((c) => c())
  }, [])
  return null
}
