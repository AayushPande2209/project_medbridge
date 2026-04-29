const footerLinks = {
  Organization: [
    { label: "About MedBridge", href: "#problem" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Impact", href: "#impact" },
    { label: "Community Partners", href: "#partners" },
  ],
  Resources: [
    { label: "Quarterly Reports", href: "#reports" },
    { label: "Become a Partner", href: "#partnership" },
    { label: "Newsletter", href: "#newsletter" },
  ],
  Connect: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email Us", href: "mailto:contact@projectmedbridge.org" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-md bg-brand-red flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v12M2 8h12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-semibold text-white tracking-tight">MedBridge</span>
            </a>
            <p className="text-sm leading-relaxed text-white/50 text-pretty">
              A student-led nonprofit redistributing surplus medical supplies across Central Ohio.
            </p>
            <p className="mt-4 text-xs text-white/30">
              Affiliated with HOSA &mdash; Future Health Professionals
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">{group}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Project MedBridge. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Columbus, Ohio &bull; Central Ohio HOSA Chapter
          </p>
        </div>
      </div>
    </footer>
  )
}
