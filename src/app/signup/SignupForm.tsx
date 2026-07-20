'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    bloodGroup: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          city: formData.city,
          bloodGroup: formData.bloodGroup,
        }),
      })

      const body = await res.json()

      if (!res.ok) {
        setError(body?.error || 'Signup failed')
        setLoading(false)
        return
      }

      router.push('/login')
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-gray-700">
          Full name
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
            placeholder="Your name"
            required
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((current) => ({ ...current, email: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-gray-700">
          Password
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData((current) => ({ ...current, password: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
            placeholder="At least 6 characters"
            required
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Confirm password
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData((current) => ({ ...current, confirmPassword: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
            placeholder="Re-enter password"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-gray-700">
          City
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData((current) => ({ ...current, city: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
            placeholder="Your city"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Blood group
          <input
            type="text"
            value={formData.bloodGroup}
            onChange={(e) => setFormData((current) => ({ ...current, bloodGroup: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
            placeholder="A+"
          />
        </label>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
      >
        {loading ? 'Creating account...' : 'Create account'}
      </button>
    </form>
  )
}
