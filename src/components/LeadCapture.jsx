import { useState } from 'react'

function LeadCapture() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const form = new FormData(e.currentTarget)
    const payload = {
      institution_name: form.get('institution_name'),
      role: form.get('role'),
      current_student_volume: form.get('current_student_volume'),
      region: form.get('region'),
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || undefined,
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || undefined,
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || undefined,
      referral_url: document.referrer || window.location.href,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Submission failed')

      setMessage('Thank you. Our Partnerships team will get in touch shortly, and your prospectus will be sent to your email.')
      e.currentTarget.reset()
    } catch (err) {
      setMessage('Sorry, something went wrong. Please try again or email partnerships@ncuk.ac.uk')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="partner-form" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Join a Network of 110+ Accredited Centres</h2>
            <p className="mt-3 text-slate-600">If you’re committed to premium outcomes and scalable growth, we’d like to speak.</p>
            <ul className="mt-6 space-y-2 text-slate-600">
              <li>• Priority routing for high‑volume centres</li>
              <li>• Rapid accreditation timelines</li>
              <li>• Dedicated launch support</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Institution Name</label>
                <input required name="institution_name" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-blue-600 focus:outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
                <input required name="role" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-blue-600 focus:outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Current Student Volume</label>
                <select required name="current_student_volume" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-blue-600 focus:outline-none">
                  <option value="<500">Less than 500</option>
                  <option value="500-1,999">500 – 1,999</option>
                  <option value="2,000-4,999">2,000 – 4,999</option>
                  <option value=">=5,000">5,000 or more</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Region</label>
                <select required name="region" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-blue-600 focus:outline-none">
                  <option>Africa</option>
                  <option>Americas</option>
                  <option>East Asia</option>
                  <option>Europe</option>
                  <option>Middle East</option>
                  <option>South & Southeast Asia</option>
                  <option>Oceania</option>
                </select>
              </div>
            </div>
            <button disabled={loading} type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50">
              {loading ? 'Submitting…' : 'Enquire about Accreditation'}
            </button>
            {message && <p className="mt-3 text-sm text-slate-700">{message}</p>}
            <p className="mt-4 text-xs text-slate-500">By submitting this form you agree to be contacted by NCUK regarding partnership opportunities. We respect your privacy.</p>
            <a href="#" className="mt-2 inline-block text-sm font-medium text-blue-700 hover:underline">Prefer to review first? Download the Partner Prospectus</a>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LeadCapture
