import { ClipboardList, Truck, HeartHandshake, FileText } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Submit a Partnership Inquiry",
    body:
      "Complete our short intake form. Tell us about your institution, the types of surplus supplies available, and preferred coordination approach.",
  },
  {
    icon: Truck,
    title: "Schedule a Collection Day",
    body:
      "Our trained student volunteers coordinate a Boxing Day — a scheduled collection event at your facility. We handle all logistics and comply with your internal protocols.",
  },
  {
    icon: HeartHandshake,
    title: "Supplies Are Sorted & Redistributed",
    body:
      "Collected supplies are inventoried, sorted for viability, and delivered to partner free clinics, community health centers, and humanitarian organizations.",
  },
  {
    icon: FileText,
    title: "Receive an Impact Report",
    body:
      "Quarterly, we publish transparent impact reports. Partners receive a summary of their contribution — supply volume, estimated value, and communities reached.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">Process</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight text-balance max-w-xl">
            Simple, Compliant, and No-Cost to Your Organization
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-sm text-sm text-pretty">
            Our four-step process is designed to minimize burden on healthcare staff while maximizing the impact of
            every donated item.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-6">
          {/* Connector line (desktop) */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-brand-slate/30 hidden md:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative flex flex-col gap-4">
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-brand-ice border border-brand-red/20 flex items-center justify-center shadow-sm">
                  <Icon size={28} className="text-brand-red" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Step {i + 1}</p>
                  <h3 className="font-semibold text-foreground mb-2 text-sm leading-snug">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
