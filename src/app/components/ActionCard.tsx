import Link from 'next/link'

interface ActionCardProps {
  title: string
  description: string
  buttonText: string
  link: string
  icon: React.ReactNode
}

export default function ActionCard({ title, description, buttonText, link, icon }: ActionCardProps) {
  return (
    <div className="group rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-red-900">{title}</div>
        <div className="text-red-600">{icon}</div>
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-600">{description}</p>
      <Link
        href={link}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 group-hover:from-red-700 group-hover:to-pink-700"
      >
        {buttonText}
      </Link>
    </div>
  )
}
