"use client"

import React, { useEffect, useRef, useState } from 'react'

interface StatsCardProps {
  title: string
  value: number | string
  icon: React.ReactNode
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  const target = typeof value === 'number' ? value : Number(String(value).replace(/,/g, '')) || 0
  const [display, setDisplay] = useState<number>(target > 1 ? 1 : target)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (target <= 1) {
      setDisplay(target)
      return
    }

    const duration = 1500
    const startValue = 1
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      const current = Math.floor(startValue + (target - startValue) * eased)
      setDisplay(current)
      if (progress < 1) rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target])

  const formatNumber = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return (
    <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray-500">{title}</div>
        <div className="text-red-600">{icon}</div>
      </div>
      <div className="mt-6 text-3xl font-semibold text-red-900">{formatNumber(display)}</div>
    </div>
  )
}
