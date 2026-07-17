'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function DonatePage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bloodGroup: '',
    location: '',
    preferredDate: '',
    notes: '',
  })

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage(null)
    setMessageType(null)

    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          blood_group: formData.bloodGroup,
          location: formData.location,
          preferred_date: formData.preferredDate,
          notes: formData.notes,
        }),
      })

      const body = await res.json().catch(() => ({}))

      if (!res.ok) {
        setMessageType('error')
        setMessage(body?.error || 'Unable to submit donation request')
        return
      }

      setMessageType('success')
      setMessage(body?.message || 'Thank you! We received your donation request and will contact you shortly.')
      setFormData({
        name: '',
        email: '',
        bloodGroup: '',
        location: '',
        preferredDate: '',
        notes: '',
      })
    } catch (err) {
      setMessageType('error')
      setMessage('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-red-50">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-10 sm:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-red-800">Donate Blood</h1>
              <p className="mt-2 text-gray-600">Fill the form below to schedule your donation appointment.</p>
            </div>
            <Link href="/" className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
              Back Home
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Full name</span>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Blood group</span>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
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
              <span className="text-sm font-medium text-gray-700">Location</span>
              <input
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Preferred date</span>
              <input
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Notes</span>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
                placeholder="Tell us if you have any questions or special requests."
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit donation request'}
            </button>
          </form>

          {message && (
            <p className={`mt-6 rounded-2xl p-3 text-sm ${messageType === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message}
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
