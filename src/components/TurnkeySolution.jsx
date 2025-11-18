import { GraduationCap, Megaphone, Users, BadgeCheck } from 'lucide-react'

function TurnkeySolution() {
  const items = [
    {
      title: 'Academic',
      desc: 'Full, university‑owned curriculum with access to our Virtual Learning Environment (VLE), assessments, and marking schemes.',
      Icon: GraduationCap,
    },
    {
      title: 'Marketing',
      desc: 'Launch playbooks, co‑branded assets, and lead‑generation materials aligned to international recruitment cycles.',
      Icon: Megaphone,
    },
    {
      title: 'Training',
      desc: 'Expert‑led onboarding and ongoing professional development for academic and administrative teams.',
      Icon: Users,
    },
    {
      title: 'University Placement',
      desc: 'A dedicated placement team supporting applications and offers—converting academic achievement into progression success.',
      Icon: BadgeCheck,
    },
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">A Turnkey Pathway Business—Not Just a Syllabus</h2>
        <p className="mt-3 max-w-3xl text-slate-600">Everything you need to launch, deliver, and scale a high‑quality university pathway centre.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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

export default TurnkeySolution
