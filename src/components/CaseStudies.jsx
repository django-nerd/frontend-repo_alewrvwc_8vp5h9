import { ExternalLink, Building2, BarChart3 } from 'lucide-react'

function CaseStudies() {
  const cases = [
    {
      title: 'Public University • Southeast Asia',
      headline: 'From zero to first intake in 6 months',
      results: [
        '120+ qualified enquiries in 10 weeks',
        '90% teaching staff trained and certified pre‑launch',
        'Multiple offers from QS Top 100 partners in first cohort',
      ],
    },
    {
      title: 'Private College • Middle East',
      headline: 'Premium pathway drives margin growth',
      results: [
        '35% uplift in net tuition margin year‑one',
        'Offer rate 80%+ for targeted degree pathways',
        'High renewal intent among feeder agents',
      ],
    },
    {
      title: 'Group Provider • Europe',
      headline: 'Repositioned brand with academic credibility',
      results: [
        'Fast accreditation via existing faculty capacity',
        'Embedded QA and moderation reduces academic risk',
        'Co‑branded marketing accelerates lead velocity',
      ],
    },
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Case Studies</h2>
          <a href="#partner-form" className="inline-flex items-center gap-2 rounded-lg bg-[#E2231A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#c71c15]">
            Discuss your objectives <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#E2231A]/10 text-[#E2231A]">
                <Building2 size={20} />
              </div>
              <div className="text-xs uppercase tracking-wide text-slate-500">{c.title}</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{c.headline}</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {c.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <BarChart3 size={16} className="mt-0.5 text-[#E2231A]" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
