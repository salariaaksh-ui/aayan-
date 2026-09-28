"use client"

import { useState } from "react"
import { form as formCfg, site } from "@/lib/content"

type Status = "idle" | "sending" | "ok" | "error"

const field =
  "mt-1.5 block w-full min-h-[44px] rounded-xl border border-line bg-surface px-3.5 py-2.5 text-[16px] text-ink placeholder:text-muted"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const el = e.currentTarget
    if (!el.checkValidity()) {
      el.reportValidity()
      return
    }
    // Not wired yet — fail loudly with the direct-email fallback.
    if (!site.formspreeId) {
      setStatus("error")
      return
    }
    setStatus("sending")
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(el),
      })
      if (!res.ok) throw new Error(String(res.status))
      el.reset()
      setStatus("ok")
    } catch {
      setStatus("error")
    }
  }

  if (status === "ok") {
    return (
      <p role="status" className="rounded-2xl border border-line p-6 text-lg">
        Thanks, we&apos;ll reply within 48 hours.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="_subject" value="New collab enquiry: aayan site" />
      {/* Honeypot — Formspree drops submissions that fill _gotcha */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="text-[15px] font-medium">
        Name <span className="text-muted">(required)</span>
        <input className={field} name="name" required autoComplete="name" maxLength={120} />
      </label>
      <label className="text-[15px] font-medium">
        Brand / agency <span className="text-muted">(required)</span>
        <input className={field} name="brand" required autoComplete="organization" maxLength={160} />
      </label>
      <label className="text-[15px] font-medium sm:col-span-2">
        Email <span className="text-muted">(required)</span>
        <input className={field} type="email" name="email" required autoComplete="email" maxLength={200} />
      </label>
      <label className="text-[15px] font-medium">
        Type of collab
        <select className={field} name="collab_type" defaultValue={formCfg.collabTypes[0]}>
          {formCfg.collabTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="text-[15px] font-medium">
        Budget range <span className="text-muted">(optional)</span>
        <select className={field} name="budget" defaultValue="">
          <option value="">Select…</option>
          {formCfg.budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>
      <label className="text-[15px] font-medium sm:col-span-2">
        Message <span className="text-muted">(required)</span>
        <textarea className={`${field} min-h-32`} name="message" required maxLength={5000} rows={5} />
      </label>

      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p role="alert" className="mt-3 min-h-6 text-[15px]">
          {status === "error" && (
            <>
              That didn&apos;t send. Email{" "}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a> directly.
            </>
          )}
        </p>
      </div>
    </form>
  )
}

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
