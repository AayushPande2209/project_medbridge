import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { newsStories } from "@/lib/news"

export default function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-20 bg-white border-b border-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="pb-5 border-t-4 border-brand-red border-b border-foreground">
          <h2 className="pt-4 text-3xl md:text-4xl font-black text-foreground leading-none tracking-tight">News</h2>
        </header>

        <div>
          {newsStories.map((story) => (
            <article
              key={story.slug}
              className="grid md:grid-cols-12 gap-6 md:gap-9 lg:gap-12 py-8 md:py-10 border-b border-border last:border-b-0"
            >
              <div className="relative md:col-span-5 aspect-[4/3] bg-muted overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  className={
                    story.slug === "first-large-scale-medical-supply-pickup"
                      ? "object-cover object-top"
                      : "object-cover"
                  }
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>

              <div className="md:col-span-7 flex flex-col justify-center">
                <p className="text-sm text-muted-foreground mb-4">
                  <time>{story.date}</time>
                  <span className="mx-2 text-border" aria-hidden="true">
                    ·
                  </span>
                  {story.category}
                </p>

                <h3 className="text-2xl md:text-[2rem] font-black text-foreground leading-[1.08] tracking-tight mb-3 max-w-xl">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mb-7">{story.summary}</p>

                <a
                  href={story.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground underline decoration-border underline-offset-4 hover:text-brand-red hover:decoration-brand-red transition-colors"
                >
                  {story.linkLabel}
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
