import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-red-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-red-600">
          Blood Donation System
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/dashboard" className="text-sm font-medium text-gray-700 transition hover:text-red-600">
            Dashboard
          </Link>
          <Link href="/request" className="text-sm font-medium text-gray-700 transition hover:text-red-600">
            Request Blood
          </Link>
          <Link href="/donate" className="text-sm font-medium text-gray-700 transition hover:text-red-600">
            Donate Blood
          </Link>
          <Link href="/sos" className="text-sm font-medium text-gray-700 transition hover:text-red-600">
            SOS
          </Link>
          <Link href="/login" className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-700">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}