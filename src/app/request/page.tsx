import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function RequestPage() {
  return (
    <div className="min-h-screen bg-red-50">
      <Navbar title="Blood Donation System" />
      <main className="mx-auto max-w-3xl px-6 py-10 sm:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-red-800">Request Blood</h1>
              <p className="mt-2 text-gray-600">Fill the form below to create a blood request.</p>
            </div>
            <Link href="/" className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
              Back Home
            </Link>
          </div>

          <form className="space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Blood Group</span>
              <select
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">City</span>
              <input
                type="text"
                placeholder="City or area"
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Contact Number</span>
              <input
                type="tel"
                placeholder="Phone number"
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Submit Request
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
