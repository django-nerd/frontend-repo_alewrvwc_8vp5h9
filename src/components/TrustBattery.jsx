function TrustBattery() {
  const stats = [
    { label: 'University Partners', value: '60+' },
    { label: 'Successful Students', value: '50,000+' },
    { label: 'Nationalities', value: '120+' },
    { label: 'Study Centres', value: '110+' },
  ]

  const logos = [
    { name: 'Manchester', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/University_of_Manchester_logo.svg' },
    { name: 'Bristol', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/University_of_Bristol_logo.svg' },
    { name: 'UNSW', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/UNSW_Sydney_coat_of_arms.svg' },
    { name: 'Alberta', url: 'https://upload.wikimedia.org/wikipedia/en/2/2e/University_of_Alberta_Seal.svg' },
    { name: 'Sheffield', url: 'https://upload.wikimedia.org/wikipedia/en/2/2e/University_of_Sheffield_shield.svg' },
    { name: 'Leeds', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/University_of_Leeds_Logo.svg' },
    { name: 'Queen Mary', url: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Queen_Mary_University_of_London_logo.svg' },
    { name: 'Auckland', url: 'https://upload.wikimedia.org/wikipedia/en/7/7b/University_of_Auckland_coat_of_arms.svg' },
  ]

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
              <div className="flex animate-[scroll_30s_linear_infinite] gap-6 whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                {logos.concat(logos).map((l, idx) => (
                  <div key={l.name+idx} className="inline-flex h-16 w-40 items-center justify-center rounded-lg bg-white px-3 text-sm text-slate-700 shadow-sm">
                    <img src={l.url} alt={`${l.name} logo`} className="max-h-10 max-w-[9rem] object-contain" />
                  </div>
                ))}
              </div>
            </div>
            <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%);} }`}</style>
            <blockquote className="mt-6 rounded-xl border-l-4 border-[#E2231A] bg-rose-50 p-6 text-slate-800">
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
