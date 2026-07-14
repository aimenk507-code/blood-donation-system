import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-red-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-2xl">
          <div className="mb-8 flex flex-col gap-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-red-600">Emergency</p>
            <h1 className="text-4xl font-bold text-red-900">Emergency SOS Activated</h1>
            <p className="mx-auto max-w-2xl text-gray-600">
              Your emergency request has been registered. A response team will contact you immediately.
            </p>
          </div>

          <div className="grid gap-6 rounded-3xl border border-red-100 bg-red-50 p-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-red-800">What happens next</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Emergency contacts are notified.</li>
                <li>• Nearby donors and volunteers are alerted.</li>
                <li>• Medical support is prioritized for your request.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-red-800">Contact support</h2>
              <p className="mt-4 text-gray-700">If you need immediate help, please call the emergency hotline below.</p>
              <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-500">Emergency hotline</p>
                <p className="mt-3 text-2xl font-bold text-red-900">+1 800 123 4567</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/" className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
