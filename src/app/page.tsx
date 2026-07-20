import Link from 'next/link'
import ActionCard from './components/ActionCard'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StatsCard from './components/StatsCard'

const activityItems = [
  {
    title: 'New donor registered',
    detail: 'A+ donor joined in New York',
    time: '2 hours ago',
  },
  {
    title: 'Blood request approved',
    detail: 'O- request approved for City Hospital',
    time: '5 hours ago',
  },
  {
    title: 'Donation scheduled',
    detail: 'B+ donation scheduled for tomorrow',
    time: '1 day ago',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-xl sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="mt-3 text-4xl font-bold text-red-900 sm:text-5xl">Choose an action</h1>
              <p className="mt-4 max-w-2xl text-gray-600">
                Manage blood requests, donations, and volunteer activity from one polished dashboard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/login" className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
                  Login
                </Link>
                <Link href="/signup" className="rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100">
                  Create account
                </Link>
                <Link href="/dashboard" className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/emergency" className="rounded-3xl bg-red-600 px-10 py-6 text-left text-white shadow-lg transition hover:bg-red-700">
                <p className="text-sm uppercase tracking-[0.24em]">Heartbeat</p>
                <p className="mt-3 text-3xl font-semibold">Emergency SOS</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard title="Donors" value={1248} icon={<span>🩸</span>} />
          <StatsCard title="Requests" value={342} icon={<span>📄</span>} />
          <StatsCard title="Blood Units" value={586} icon={<span>🧪</span>} />
          <StatsCard title="Donations" value={1024} icon={<span>🎉</span>} />
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card
            title="Request Blood"
            description="Create a new blood request and get support from donors in your area."
            buttonText="Request Now"
            href="/request"
          />
          <ActionCard
            title="Become a donor"
            description="Book a donation appointment and help save lives in your community."
            buttonText="Join now"
            link="/donate"
            icon={<span>❤️</span>}
          />
        </section>

        <div className="mt-10 text-center">
          <a
            href="/activity"
            className="inline-block rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            View Recent Activity
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
