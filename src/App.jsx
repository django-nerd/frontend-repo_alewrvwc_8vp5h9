import { useRef } from 'react'
import Hero from './components/Hero'
import WhyNCUK from './components/WhyNCUK'
import TurnkeySolution from './components/TurnkeySolution'
import TrustBattery from './components/TrustBattery'
import Roadmap from './components/Roadmap'
import LeadCapture from './components/LeadCapture'

function App() {
  const formRef = useRef(null)

  const scrollToForm = () => {
    const el = document.getElementById('partner-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadProspectus = () => {
    // Placeholder: replace with actual prospectus asset or HubSpot/Salesforce gated link
    alert('The Partner Prospectus will be sent after form submission, or integrate a direct download link here.')
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600" />
            <span className="text-sm font-semibold text-slate-900">NCUK</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#why" className="hover:text-slate-900">Why NCUK</a>
            <a href="#turnkey" className="hover:text-slate-900">Support</a>
            <a href="#process" className="hover:text-slate-900">Process</a>
            <a href="#partner-form" className="hover:text-slate-900">Enquire</a>
          </nav>
          <a href="#partner-form" className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 md:inline-flex">Enquire</a>
        </div>
      </header>

      <Hero onPrimaryClick={scrollToForm} onSecondaryClick={downloadProspectus} />

      <div id="why"><WhyNCUK /></div>
      <div id="turnkey"><TurnkeySolution /></div>
      <TrustBattery />
      <div id="process"><Roadmap /></div>
      <LeadCapture ref={formRef} />

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} NCUK. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="/test" className="hover:text-slate-900">System Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
