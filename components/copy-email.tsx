"use client"

import { useState } from "react"
import { site } from "@/lib/content"

export function CopyEmail() {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      className="btn btn-secondary !px-4 !text-[13px]"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(site.email)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch {}
      }}
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  )
}
