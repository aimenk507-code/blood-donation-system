import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  href: string
  buttonText: string
}

export default function Card({ title, description, href, buttonText }: CardProps) {
  return (
    <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
      <h2 className="text-xl font-semibold text-red-700">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
      >
        {buttonText}
      </Link>
    </div>
  )
}
