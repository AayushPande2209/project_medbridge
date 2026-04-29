"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

const schema = z.object({
  institutionName: z.string().min(2, "Institution name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  role: z.string().min(2, "Role / title is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  supplyTypes: z.string().min(5, "Please briefly describe available supplies"),
  frequency: z.string().min(1, "Please select a frequency"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const frequencies = [
  "One-time donation",
  "Monthly",
  "Quarterly",
  "Twice a year",
  "Unsure — would like to discuss",
]

export default function PartnershipForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    console.log("Partnership inquiry:", data)
    setSubmitted(true)
    reset()
  }

  const inputClass =
    "px-3 py-2.5 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"

  return (
    <section id="partnership" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">Partner With Us</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight text-balance mb-6">
              Ready to Turn Surplus Into Impact?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm text-pretty">
              Fill out the inquiry form and our team will follow up within 48 hours to schedule an introductory call
              and discuss how your institution can participate in our next Boxing Day collection event.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                "Zero cost to your organization",
                "We handle all logistics and transport",
                "Compliant with hospital waste and donation protocols",
                "Quarterly impact report with your contribution data",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-brand-ice border border-brand-slate-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-brand-navy" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 text-center py-12">
                <div className="w-14 h-14 rounded-full bg-brand-ice flex items-center justify-center">
                  <CheckCircle size={28} className="text-brand-navy" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Inquiry Received</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Thank you for your interest in partnering with MedBridge. We&apos;ll be in touch within 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs text-brand-red underline underline-offset-2 hover:text-brand-red-dark"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                <h3 className="font-semibold text-foreground text-base mb-1">Partnership Inquiry</h3>

                {/* Institution + Contact row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="institutionName" className="text-xs font-medium text-foreground">
                      Institution Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="institutionName"
                      type="text"
                      placeholder="e.g. OhioHealth Riverside"
                      className={inputClass}
                      {...register("institutionName")}
                    />
                    {errors.institutionName && (
                      <p className="text-xs text-brand-red">{errors.institutionName.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contactName" className="text-xs font-medium text-foreground">
                      Contact Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      placeholder="Full name"
                      className={inputClass}
                      {...register("contactName")}
                    />
                    {errors.contactName && (
                      <p className="text-xs text-brand-red">{errors.contactName.message}</p>
                    )}
                  </div>
                </div>

                {/* Role + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="role" className="text-xs font-medium text-foreground">
                      Role / Title <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="role"
                      type="text"
                      placeholder="e.g. Supply Chain Manager"
                      className={inputClass}
                      {...register("role")}
                    />
                    {errors.role && <p className="text-xs text-brand-red">{errors.role.message}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-foreground">
                      Email Address <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@hospital.org"
                      className={inputClass}
                      {...register("email")}
                    />
                    {errors.email && <p className="text-xs text-brand-red">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-medium text-foreground">
                    Phone <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(614) 555-0100"
                    className={inputClass}
                    {...register("phone")}
                  />
                </div>

                {/* Supply types */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="supplyTypes" className="text-xs font-medium text-foreground">
                    Available Supply Types <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="supplyTypes"
                    type="text"
                    placeholder="e.g. gloves, gauze, IV tubing, syringes"
                    className={inputClass}
                    {...register("supplyTypes")}
                  />
                  {errors.supplyTypes && (
                    <p className="text-xs text-brand-red">{errors.supplyTypes.message}</p>
                  )}
                </div>

                {/* Frequency */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="frequency" className="text-xs font-medium text-foreground">
                    Preferred Donation Frequency <span className="text-brand-red">*</span>
                  </label>
                  <select
                    id="frequency"
                    className={inputClass}
                    {...register("frequency")}
                  >
                    <option value="">Select frequency</option>
                    {frequencies.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  {errors.frequency && (
                    <p className="text-xs text-brand-red">{errors.frequency.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-foreground">
                    Additional Notes <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Any constraints, questions, or context we should know..."
                    className={`${inputClass} resize-none`}
                    {...register("message")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-md bg-brand-red text-white font-semibold text-sm hover:bg-brand-red-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  We respond to all inquiries within 48 business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
