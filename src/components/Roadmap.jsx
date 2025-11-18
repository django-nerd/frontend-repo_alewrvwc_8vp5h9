function Roadmap() {
  const steps = [
    { n: 1, t: 'Initial Consultation', d: 'Align on your objectives, timelines, and programme scope.' },
    { n: 2, t: 'Proposal', d: 'Receive a tailored commercial and academic plan with clear investment and ROI projections.' },
    { n: 3, t: 'Contracting', d: 'Formalise terms, confirm timelines, and secure key resources.' },
    { n: 4, t: 'Onboarding', d: 'Staff training, operational setup, marketing enablement, and academic scheduling.' },
    { n: 5, t: 'Accreditation', d: 'Quality assurance visit and approval—ensuring delivery standards from day one.' },
    { n: 6, t: 'Launch', d: 'Go live with recruitment campaigns, teaching delivery, and progression pathways.' },
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">From Enquiry to Enrolment in Six Managed Steps</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <ol className="relative space-y-6 border-l-2 border-slate-200 pl-6">
              {steps.map((s) => (
                <li key={s.n} className="group">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#E2231A] text-xs font-bold text-white">{s.n}</span>
                  <h3 className="text-lg font-semibold text-slate-900">{s.t}</h3>
                  <p className="text-slate-600">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="md:col-span-1">
            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Ready to begin?</h3>
              <p className="mt-2 text-slate-600">We’ll guide you through accreditation and launch with a dedicated team.</p>
              <a href="#partner-form" className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#E2231A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#c71c15]">Enquire about Accreditation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
