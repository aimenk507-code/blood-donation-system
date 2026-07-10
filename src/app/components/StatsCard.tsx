interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray-500">{title}</div>
        <div className="text-red-600">{icon}</div>
      </div>
      <div className="mt-6 text-3xl font-semibold text-red-900">{value}</div>
    </div>
  )
}
