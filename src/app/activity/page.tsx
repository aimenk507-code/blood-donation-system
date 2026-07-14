import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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

export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-xl sm:p-10">
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
