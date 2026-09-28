"use client"

import { useEffect, useRef, useState } from "react"

const links = [
  ["Work", "#reels"],
  ["Collabs", "#collabs"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const

export function Nav() {
  const [solid, setSolid] = useState(false)
  const menu = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = () => menu.current?.close()

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-[var(--nav-h)] border-b transition-colors duration-200 ${
        solid ? "border-line bg-bg" : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-full max-w-[1160px] items-center justify-between px-4 sm:px-5">
        <a href="#top" className="display text-2xl" aria-label="Aayan, back to top">
          AAYAN
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[15px] font-medium text-muted hover:text-ink">
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">Work with me</a>
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
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={close} className="display block py-3 text-[clamp(36px,11vw,48px)]">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-4 pt-8">
          <a href="#contact" onClick={close} className="btn btn-primary w-full">Work with me</a>
        </div>
      </dialog>
    </header>
  )
}
