const steps = [
  {
    title: "Tell us what you have",
    body: "Share the types of surplus supplies and a rough sense of volume.",
  },
  {
    title: "We pick them up",
    body: "We schedule one collection at your loading dock and handle the freight.",
  },
  {
    title: "They go to clinics",
    body: "Donations move through established medical aid networks, including Brother's Brother Foundation.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t-4 border-brand-red pt-5 mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] tracking-tight max-w-3xl">
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step) => {
            return (
              <div key={step.title} className="flex flex-col gap-5 border-t-2 border-foreground pt-4">
                <div>
                  <h3 className="font-bold text-foreground mb-3 text-xl tracking-tight">{step.title}</h3>
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
