import ActionCard from './components/ActionCard'
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Dashboard</p>
              <h1 className="mt-3 text-4xl font-bold text-red-900 sm:text-5xl">Choose an action</h1>
              <p className="mt-4 max-w-2xl text-gray-600">
                Manage blood requests, donations, and volunteer activity from one polished dashboard.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl bg-red-600 px-6 py-5 text-white shadow-lg">
                <p className="text-sm uppercase tracking-[0.24em]">Heartbeat</p>
                <p className="mt-3 text-3xl font-semibold">Fast access</p>
              </div>
              <div className="rounded-3xl bg-red-50 px-6 py-5 text-red-800 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em]">Focus</p>
                <p className="mt-3 text-3xl font-semibold">Life-saving actions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard title="Donors" value="1,248" icon={<span>🩸</span>} />
          <StatsCard title="Requests" value="342" icon={<span>📄</span>} />
          <StatsCard title="Blood Units" value="586" icon={<span>🧪</span>} />
          <StatsCard title="Donations" value="1,024" icon={<span>🎉</span>} />
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <ActionCard
            title="Request Blood"
            description="Create a new blood request and get support from donors in your area."
            buttonText="Request Now"
            link="/request"
            icon={<span>📩</span>}
          />
          <ActionCard
            title="Donate Blood"
            description="Book a donation and help save lives with your blood donation."
            buttonText="Donate Now"
            link="/donate"
            icon={<span>❤️</span>}
          />
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-xl sm:p-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-900">Recent activity</h2>
              <p className="mt-2 text-sm text-gray-600">Latest updates from the blood donation network.</p>
            </div>
            <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
              Live feed
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {activityItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-red-100 bg-red-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-red-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
                  </div>
                  <span className="text-sm text-gray-500">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
