import { Globe2, Cog, PoundSterling } from 'lucide-react'

function WhyNCUK() {
  const features = [
    {
      title: 'Global Recognition',
      desc:
        'Access a network that includes the UK’s Russell Group, Australia’s Group of Eight, and QS Top 100 universities—giving your students defined progression routes and your brand immediate credibility.',
      Icon: Globe2,
    },
    {
      title: 'Operational Ease',
      desc:
        'We handle the heavy lifting: curriculum design, assessment, moderation, and quality assurance. You focus on teaching and growth; we ensure standards and outcomes.',
      Icon: Cog,
    },
    {
      title: 'Commercial Return',
      desc:
        'A transparent operating model designed for sustainable ROI, while retaining control of tuition fees and local pricing. Build premium revenue streams with predictable performance.',
      Icon: PoundSterling,
    },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Commercial Growth. Academic Prestige. Zero Guesswork.</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          If you’re seeking to expand international enrolments without the risk, delay or cost of building your own curriculum, NCUK provides a proven, quality‑assured route. Our programmes are established by universities and recognised globally—so you can launch quickly and confidently.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#E2231A]/10 text-[#E2231A]">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyNCUK
