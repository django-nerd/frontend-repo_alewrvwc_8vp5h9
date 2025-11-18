function TurnkeySolution() {
  const items = [
    {
      title: 'Academic',
      desc: 'Full, university‑owned curriculum with access to our Virtual Learning Environment (VLE), assessments, and marking schemes.'
    },
    {
      title: 'Marketing',
      desc: 'Launch playbooks, co‑branded assets, and lead‑generation materials aligned to international recruitment cycles.'
    },
    {
      title: 'Training',
      desc: 'Expert‑led onboarding and ongoing professional development for academic and administrative teams.'
    },
    {
      title: 'University Placement',
      desc: 'A dedicated placement team supporting applications and offers—converting academic achievement into progression success.'
    },
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">A Turnkey Pathway Business—Not Just a Syllabus</h2>
        <p className="mt-3 max-w-3xl text-slate-600">Everything you need to launch, deliver, and scale a high‑quality university pathway centre.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-2 h-10 w-10 rounded-lg bg-blue-600/10" />
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TurnkeySolution
