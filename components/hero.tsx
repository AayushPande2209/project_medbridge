import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[min(720px,calc(100svh-4rem))] flex flex-col justify-end overflow-hidden bg-[#0B0C10]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero.jpg"
          alt="Surplus medical supplies"
          fill
          priority
          className="object-cover opacity-[0.3]"
        />
        <div className="absolute inset-0 bg-[#0B0C10]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/20 via-transparent to-[#0B0C10]/95" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 md:pb-20 w-full">
        <div className="w-12 h-1 bg-brand-red mb-7" />
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.25rem] font-black text-white leading-[1.02] tracking-tight mb-7 max-w-5xl">
          One hospital&apos;s trash is another&apos;s
          <br />
          <span className="text-brand-red">treasure.</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-9">
          A student-led group in Central Ohio. We collect unused hospital supplies and send them to clinics that can still use them.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#partnership"
            className="px-6 py-3.5 bg-brand-red text-white font-semibold text-sm hover:bg-brand-red-dark transition-colors text-center"
          >
            Donate unused supplies
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-3.5 border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors text-center"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  )
}
