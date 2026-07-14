import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-red-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-red-600">
          Blood Donation System
        </h1>
        <Link
          href="/login"
          className="bg-red-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 shadow-sm"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}