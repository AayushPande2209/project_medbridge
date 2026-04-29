const points = [
  {
    title: "Billions in Waste Annually",
    body:
      "U.S. hospitals generate an estimated $5 billion in medical supply waste each year — equipment that is unused, overstocked, or nearing expiration but still perfectly viable.",
  },
  {
    title: "Unmet Community Need",
    body:
      "Community health clinics, free clinics, and under-resourced care facilities in Central Ohio regularly operate without basic supplies — gauze, gloves, bandaging material, and diagnostic tools.",
  },
  {
    title: "The Gap We Bridge",
    body:
      "Healthcare providers lack a streamlined, compliant pathway to donate surplus. Project MedBridge is that pathway — handling collection, logistics, and redistribution at no cost to your organization.",
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">The Problem</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight text-balance max-w-xl">
            A System-Wide Surplus and a Community in Need
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-sm text-sm text-pretty">
            Every day, functional medical supplies are discarded across Ohio&apos;s healthcare system while clinics
            serving the uninsured and underinsured go without.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-xl border border-border bg-card hover:border-brand-slate hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-md bg-brand-red flex items-center justify-center mb-6">
                <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-base">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
