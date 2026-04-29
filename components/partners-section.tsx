const partners = [
  { name: "OhioHealth", type: "Healthcare System" },
  { name: "Nationwide Children's Hospital", type: "Children's Health" },
  { name: "OSU Wexner Medical Center", type: "Academic Medical Center" },
  { name: "Mount Carmel Health", type: "Catholic Health System" },
  { name: "Central Ohio Primary Care", type: "Primary Care Network" },
  { name: "Columbus Free Clinic", type: "Community Health" },
]

const beneficiaries = [
  "Southeast Health Center",
  "HealthPath Foundation",
  "Faith Mission Medical",
  "PrimaryOne Health",
  "Equitas Health",
]

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal mb-4">Community</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight text-balance max-w-xl">
            Trusted by Healthcare Leaders Across Columbus
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-sm text-sm text-pretty">
            Our donor and recipient network spans hospitals, health systems, and community health centers dedicated to
            equitable healthcare access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Donor partners */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
              Supply Donors
            </p>
            <div className="flex flex-col gap-3">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between px-5 py-4 rounded-lg border border-border bg-card hover:border-brand-teal/30 hover:bg-brand-teal-light/20 transition-all duration-150"
                >
                  <span className="font-medium text-sm text-foreground">{p.name}</span>
                  <span className="text-xs text-muted-foreground">{p.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recipient partners */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
              Recipient Organizations
            </p>
            <div className="flex flex-col gap-3">
              {beneficiaries.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 px-5 py-4 rounded-lg border border-border bg-card hover:border-brand-teal/30 hover:bg-brand-teal-light/20 transition-all duration-150"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>

            {/* CTA nudge */}
            <div className="mt-6 p-5 rounded-xl bg-brand-navy text-white">
              <p className="text-sm font-semibold mb-1">Is your organization on this list?</p>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                Join our network of healthcare providers making a difference. Partnership is free and zero-burden to
                your staff.
              </p>
              <a
                href="#partnership"
                className="inline-block px-4 py-2 rounded-md bg-brand-teal text-white text-xs font-semibold hover:bg-brand-teal-dark transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
