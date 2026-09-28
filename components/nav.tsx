"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const links = [
  // Root-relative so they also work from /gallery
  ["Work", "/#reels"],
  ["Collabs", "/#collabs"],
  ["Gallery", "/gallery"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
] as const

export function Nav() {
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const menu = useRef<HTMLDialogElement>(null)
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 24)
      // Hide while scrolling down, come back on any scroll up
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 320)
        last = y
      }
      const max = document.documentElement.scrollHeight - innerHeight
      bar.current?.style.setProperty("--p", String(max > 0 ? Math.min(y / max, 1) : 0))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = () => menu.current?.close()

  return (
    <header
      className={`nav-bar fixed inset-x-0 top-0 z-40 h-[var(--nav-h)] border-b ${
        solid ? "border-line bg-bg" : "border-transparent bg-transparent"
      } ${hidden ? "nav-hidden" : ""}`}
    >
      <nav aria-label="Main" className="mx-auto flex h-full max-w-[1160px] items-center justify-between px-4 sm:px-5">
        <Link href="/" className="display text-2xl" aria-label="Aayan, home">
          AAYAN
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="draw pb-0.5 text-[15px] font-medium text-muted transition-colors hover:text-ink">
              {label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary" data-magnetic>Work with me</Link>
        </div>
        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label="Open menu"
          aria-haspopup="dialog"
          onClick={() => menu.current?.showModal()}
        >
          <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>
      <div ref={bar} aria-hidden className="progress absolute inset-x-0 bottom-[-1px] h-[2px] bg-accent" />

      <dialog
        ref={menu}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-bg p-0 text-ink"
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="flex h-[var(--nav-h)] items-center justify-between px-4">
          <span className="display text-2xl">AAYAN</span>
          <button type="button" className="-mr-2 flex h-11 w-11 items-center justify-center" aria-label="Close menu" onClick={close}>
            <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-4 pt-6">
          {links.map(([label, href], i) => (
            <li key={href} className="menu-item" style={{ "--i": i } as React.CSSProperties}>
              <Link href={href} onClick={close} className="display block py-3 text-[clamp(36px,11vw,48px)]">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-item px-4 pt-8" style={{ "--i": links.length } as React.CSSProperties}>
          <Link href="/#contact" onClick={close} className="btn btn-primary w-full">Work with me</Link>
        </div>
      </dialog>
    </header>
  )
}
