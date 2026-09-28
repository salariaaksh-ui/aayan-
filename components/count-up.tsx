"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Server renders the exact final string (crawlers / no-JS see real values).
 * On first view, animates 0 → number, then lands on the literal string.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const el = ref.current
    const m = value.match(/^([^\d]*)([\d,.]+)(.*)$/)
    if (!el || !m || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const [, pre, numStr, suf] = m
    const target = parseFloat(numStr.replace(/,/g, ""))
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0
    const comma = numStr.includes(",")
    const fmt = (n: number) => {
      const s = n.toFixed(decimals)
      return pre + (comma ? Number(s).toLocaleString("en-US") : s) + suf
    }
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1200, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setShown(p < 1 ? fmt(target * eased) : value)
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        setShown(fmt(0))
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <span ref={ref} className="num">
      <span className="sr-only">{value}</span>
      <span aria-hidden>{shown}</span>
    </span>
  )
}
