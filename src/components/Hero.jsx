import { useMemo } from 'react'

function Hero({ onPrimaryClick, onSecondaryClick }) {
  const bgStyle = useMemo(
    () => ({
      backgroundImage:
        'radial-gradient(60rem 30rem at 10% 10%, rgba(59,130,246,0.15), transparent 60%), radial-gradient(50rem 20rem at 90% 20%, rgba(14,165,233,0.15), transparent 60%)',
    }),
    []
  )

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-40" style={bgStyle} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs tracking-wider text-white/80">Established by leading universities • 35+ years</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Transform Your Institution into a Global University Pathway Centre
            </h1>
            <p className="mt-4 text-lg text-slate-200 md:text-xl">
              Launch new revenue streams with guaranteed access to 60+ universities—underpinned by a 35‑year, university‑owned academic pedigree.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600">
                Enquire about Accreditation
              </button>
              <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                Download Partner Prospectus
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-300">NCUK was established by leading universities to deliver world‑class pathways with rigorous quality assurance.</p>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-video w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 p-6 shadow-2xl">
              <div className="grid h-full grid-cols-3 grid-rows-2 place-items-center gap-4">
                {['Manchester','Bristol','UNSW','Alberta','Sheffield','Leeds'].map((name) => (
                  <div key={name} className="flex h-20 w-24 items-center justify-center rounded-lg bg-white/5 text-xs text-white/80 backdrop-blur">
                    {name}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-300">Visual mock‑up: partner universities shown for illustration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
