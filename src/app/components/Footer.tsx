import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-red-100 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 Blood Donation System</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="transition hover:text-red-600">
            About
          </Link>
          <Link href="/" className="transition hover:text-red-600">
            Contact
          </Link>
          <Link href="/" className="transition hover:text-red-600">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
