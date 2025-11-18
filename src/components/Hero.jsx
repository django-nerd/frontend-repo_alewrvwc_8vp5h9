import { useMemo } from 'react'

function Hero({ onPrimaryClick, onSecondaryClick }) {
  const bgStyle = useMemo(
    () => ({
      backgroundImage:
        'radial-gradient(60rem 30rem at 10% 10%, rgba(226,35,26,0.10), transparent 60%), radial-gradient(50rem 20rem at 90% 20%, rgba(226,35,26,0.08), transparent 60%)',
    }),
    []
  )

  const logos = [
    { name: 'Manchester', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/University_of_Manchester_logo.svg' },
    { name: 'Bristol', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/University_of_Bristol_logo.svg' },
    { name: 'UNSW', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/UNSW_Sydney_coat_of_arms.svg' },
    { name: 'Alberta', url: 'https://upload.wikimedia.org/wikipedia/en/2/2e/University_of_Alberta_Seal.svg' },
    { name: 'Sheffield', url: 'https://upload.wikimedia.org/wikipedia/en/2/2e/University_of_Sheffield_shield.svg' },
    { name: 'Leeds', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/University_of_Leeds_Logo.svg' },
  ]

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
              <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-lg bg-[#E2231A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E2231A]/20 transition hover:bg-[#c71c15]">
                Enquire about Accreditation
              </button>
              <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                Download Partner Prospectus
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-300">NCUK was established by leading universities to deliver world‑class pathways with rigorous quality assurance.</p>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-video w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#E2231A]/20 to-rose-500/10 p-6 shadow-2xl">
              <div className="grid h-full grid-cols-3 grid-rows-2 place-items-center gap-4">
                {logos.map((l) => (
                  <div key={l.name} className="flex h-20 w-24 items-center justify-center rounded-lg bg-white/5 backdrop-blur">
                    <img src={l.url} alt={`${l.name} logo`} className="max-h-12 max-w-[5.5rem] object-contain opacity-90 invert-[.98] contrast-75" />
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
