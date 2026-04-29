import { FileText, Download, TrendingUp } from "lucide-react"

const reports = [
  {
    quarter: "Q1 2025",
    date: "March 31, 2025",
    highlights: ["1,200 supply units collected", "3 Boxing Day events", "2 new hospital partners"],
    badge: "Latest",
  },
  {
    quarter: "Q4 2024",
    date: "December 31, 2024",
    highlights: ["980 supply units collected", "2 Boxing Day events", "Partnership with OSU Wexner"],
    badge: null,
  },
  {
    quarter: "Q3 2024",
    date: "September 30, 2024",
    highlights: ["740 supply units collected", "2 Boxing Day events", "Program expanded to 4 clinics"],
    badge: null,
  },
  {
    quarter: "Q2 2024",
    date: "June 30, 2024",
    highlights: ["620 supply units collected", "1 pilot Boxing Day", "Program launched in Columbus"],
    badge: "First Report",
  },
]

export default function QuarterlyReports() {
  return (
    <section id="reports" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-red mb-4">Transparency</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight text-balance max-w-xl">
            Quarterly Impact Reports
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-sm text-sm text-pretty">
            We publish detailed reports every quarter so our partners can track exactly where supplies go and the
            communities they reach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reports.map((report) => (
            <div
              key={report.quarter}
              className="relative flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-brand-slate hover:shadow-sm transition-all duration-200"
            >
              {report.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-red text-white">
                    {report.badge}
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="w-9 h-9 rounded-lg bg-brand-ice flex items-center justify-center">
                  <FileText size={16} className="text-brand-navy" strokeWidth={1.5} />
                </div>

                <div>
                  <p className="font-semibold text-foreground text-sm">{report.quarter} Report</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{report.date}</p>
                </div>

                <ul className="flex flex-col gap-1.5 mt-auto">
                  {report.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <TrendingUp size={11} className="text-brand-red mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border px-6 py-3">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-medium text-brand-navy hover:text-brand-red transition-colors"
                  aria-label={`Download ${report.quarter} report`}
                >
                  <Download size={12} strokeWidth={2} />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground text-center">
          All reports are reviewed by our faculty advisor. Data reflects verified collection and redistribution
          totals.
        </p>
      </div>
    </section>
  )
}
