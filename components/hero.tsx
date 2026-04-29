import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-navy">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.99 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.99 0 0) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Teal accent orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.12 196), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs font-medium tracking-wide uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" aria-hidden="true" />
          Central Ohio &mdash; Student-Led Nonprofit
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight tracking-tight text-balance mb-6">
          Turning Surplus Supplies
          <br />
          <span className="text-brand-teal">Into Lasting Impact</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Project MedBridge connects healthcare providers with surplus medical supplies to under-resourced communities
          across Central Ohio — reducing waste, lowering costs, and expanding access to care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#partnership"
            className="px-7 py-3.5 rounded-md bg-brand-teal text-white font-semibold text-sm hover:bg-brand-teal-dark transition-colors"
          >
            Partner With Us
          </a>
          <a
            href="#how-it-works"
            className="px-7 py-3.5 rounded-md border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            How It Works
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#problem"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to next section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  )
}
