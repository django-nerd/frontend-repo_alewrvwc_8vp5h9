function TrustBattery() {
  const stats = [
    { label: 'University Partners', value: '60+' },
    { label: 'Successful Students', value: '50,000+' },
    { label: 'Nationalities', value: '120+' },
    { label: 'Study Centres', value: '110+' },
  ]

  const logos = ['Manchester', 'Bristol', 'UNSW', 'Alberta', 'Sheffield', 'Leeds', 'Queen Mary', 'Auckland']

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-4 text-center">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                  <div className="text-xs text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex animate-[scroll_30s_linear_infinite] gap-4 whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                {logos.concat(logos).map((l, idx) => (
                  <div key={l+idx} className="inline-flex h-16 w-40 items-center justify-center rounded-lg bg-white text-sm text-slate-700 shadow-sm">
                    {l}
                  </div>
                ))}
              </div>
            </div>
            <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%);} }`}</style>
            <blockquote className="mt-6 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-6 text-slate-800">
              “NCUK enabled us to move from ambition to impact in one intake. Their quality assurance, admissions pathways and marketing support accelerated both enrolments and margins—while elevating our academic reputation.”
              <footer className="mt-2 text-sm text-slate-600">— Dr Edward Roekaert Embrechts, Study Centre Principal</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBattery
