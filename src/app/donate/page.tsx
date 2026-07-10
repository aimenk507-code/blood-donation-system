import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-red-50">
      <Navbar title="Blood Donation System" />
      <main className="mx-auto max-w-3xl px-6 py-10 sm:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-red-800">Donate Blood</h1>
              <p className="mt-2 text-gray-600">Learn how to donate or share your details to join our donor list.</p>
            </div>
            <Link href="/" className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
              Back Home
            </Link>
          </div>

          <div className="space-y-6 text-gray-700">
            <div className="rounded-3xl border border-red-100 bg-red-50 p-6">
              <h2 className="text-xl font-semibold text-red-700">Why donate?</h2>
              <p className="mt-3 text-sm leading-6">
                Donating blood saves lives. Your donation supports hospitals, clinics, and patients in need.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-red-700">Fast process</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">Most donations take around 10 minutes once you arrive.</p>
              </div>
              <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-red-700">Health benefits</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">Regular donors often receive free health screening and support.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-red-700">How to prepare</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-600">
                <li>Eat a healthy meal before donating.</li>
                <li>Stay hydrated.</li>
                <li>Bring a valid ID.</li>
                <li>Rest after donation.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
