import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Dashboard</p>
              <h1 className="mt-2 text-3xl font-bold text-red-900">Welcome back</h1>
              <p className="mt-3 max-w-2xl text-gray-600">Track urgent requests, donation opportunities, and activity from one place.</p>
            </div>
            <Link href="/request" className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
              New Blood Request
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-red-100 bg-red-50 p-6">
              <h2 className="text-lg font-semibold text-red-800">Urgent requests</h2>
              <p className="mt-3 text-3xl font-bold text-red-900">12</p>
            </div>
            <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-red-800">Available donors</h2>
              <p className="mt-3 text-3xl font-bold text-red-900">48</p>
            </div>
            <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-red-800">Upcoming donations</h2>
              <p className="mt-3 text-3xl font-bold text-red-900">7</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
