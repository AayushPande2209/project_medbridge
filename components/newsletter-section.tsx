"use client"

import { useState } from "react"
import { z } from "zod"

const emailSchema = z.string().email()

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setErrorMsg("Please enter a valid email address.")
      return
    }

    setStatus("submitting")
    await new Promise((r) => setTimeout(r, 700))
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="py-20 bg-brand-teal-light/40 border-y border-brand-teal/20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal mb-3">Stay Updated</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight text-balance mb-3">
          Quarterly Updates Straight to Your Inbox
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 text-pretty">
          Subscribe to receive our quarterly impact reports, upcoming Boxing Day dates, and partnership spotlights —
          no spam, unsubscribe anytime.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal text-white text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            You&apos;re subscribed — thank you!
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@hospital.org"
                className="w-full px-4 py-3 rounded-md border border-input bg-white text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                aria-label="Email address for newsletter"
              />
              {errorMsg && <p className="text-xs text-destructive mt-1 text-left">{errorMsg}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-5 py-3 rounded-md bg-brand-navy text-white font-semibold text-sm hover:bg-brand-teal transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === "submitting" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
