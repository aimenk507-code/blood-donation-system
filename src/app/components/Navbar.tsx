import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-red-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-lg font-bold text-white shadow-sm">
            B
          </div>
          <div>
            <Link href="/" className="text-lg font-semibold text-red-800">
              Blood Donation System
            </Link>
            <p className="text-xs text-gray-500">App Router dashboard</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-600 transition hover:text-red-600">
            Home
          </Link>
          <Link href="/request" className="text-sm font-medium text-gray-600 transition hover:text-red-600">
            Request
          </Link>
          <Link href="/donate" className="text-sm font-medium text-gray-600 transition hover:text-red-600">
            Donate
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="rounded-full border border-red-100 bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
            aria-label="Notifications"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M12 2a6 6 0 0 0-6 6v3.5c0 .83-.67 1.5-1.5 1.5S3 12.33 3 11.5V11a1 1 0 0 0-2 0v.5A3.5 3.5 0 0 0 4.5 15H5v1l1 2h12l1-2v-1h.5A3.5 3.5 0 0 0 23 11.5V11a1 1 0 0 0-2 0v.5c0 .83-.67 1.5-1.5 1.5S19 11.33 19 10.5V8a6 6 0 0 0-6-6Z" />
            </svg>
          </button>
          <div className="relative group">
            <button className="flex items-center gap-2 rounded-2xl border border-red-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:shadow-sm">
              <span className="h-8 w-8 rounded-full bg-red-600 text-center text-sm font-semibold leading-8 text-white">A</span>
              <span>Account</span>
            </button>
            <div className="invisible absolute right-0 top-full mt-3 z-10 w-44 rounded-2xl border border-red-100 bg-white p-3 shadow-lg transition duration-200 group-hover:visible">
              <Link href="/login" className="block rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-red-50">
                Login
              </Link>
              <Link href="/" className="block rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-red-50">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
