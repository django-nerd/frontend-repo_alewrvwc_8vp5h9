import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

function Testimonials() {
  const items = [
    {
      quote:
        'NCUK gave us the confidence and capability to launch quickly. Our first intake exceeded projections and student satisfaction scores were outstanding.',
      name: 'Prof. Sarah Bennett',
      role: 'Pro Vice-Chancellor, Global Partnerships',
      org: 'Leading Asia-Pacific University',
    },
    {
      quote:
        'The placement support and quality assurance framework are best-in-class. It has transformed our international proposition and reputation.',
      name: 'Dr Ahmed Karim',
      role: 'Dean, International Programmes',
      org: 'Middle East Partner Institution',
    },
    {
      quote:
        'From marketing enablement to academic moderation, the partnership is turnkey. We moved from MoU to delivery in one semester.',
      name: 'Eleanor Hughes',
      role: 'Director of International',
      org: 'European Study Centre',
    },
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000)
    return () => clearInterval(id)
  }, [items.length])

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Partner Testimonials</h2>
          <div className="hidden gap-2 sm:flex">
            <button aria-label="Previous" onClick={prev} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
              <ChevronLeft size={18} />
            </button>
            <button aria-label="Next" onClick={next} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((t, i) => (
              <figure key={i} className="w-full shrink-0 px-1">
                <blockquote className="relative rounded-xl bg-white p-6 shadow-sm">
                  <div className="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#E2231A]/10 text-[#E2231A]">
                    <Quote size={16} />
                  </div>
                  <p className="mt-3 text-lg leading-relaxed text-slate-800">“{t.quote}”</p>
                  <figcaption className="mt-4 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">{t.name}</span> • {t.role}, {t.org}
                  </figcaption>
                </blockquote>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${index === i ? 'bg-[#E2231A]' : 'bg-slate-300 hover:bg-slate-400'}`}
              />
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 hidden items-center sm:flex">
            <button aria-label="Previous" onClick={prev} className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/80 backdrop-blur text-slate-700 hover:bg-white">
              <ChevronLeft size={18} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 hidden items-center sm:flex">
            <button aria-label="Next" onClick={next} className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/80 backdrop-blur text-slate-700 hover:bg-white">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
