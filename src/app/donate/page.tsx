'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function DonatePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bloodGroup: '',
    location: '',
    preferredDate: '',
    notes: '',
    phone: '', // ✅ ADDED
  })

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/donors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          bloodGroup: formData.bloodGroup,
          location: formData.location,
          preferredDate: formData.preferredDate,
          notes: formData.notes,
          phone: formData.phone, // ✅ FIXED
          city: formData.location,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.error || 'Failed to save donation request')
        return
      }

      setSubmitted(true)

      setFormData({
        name: '',
        email: '',
        bloodGroup: '',
        location: '',
        preferredDate: '',
        notes: '',
        phone: '', // ✅ RESET
      })
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-red-50">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-red-800">Donate Blood</h1>
              <p className="mt-2 text-gray-600">
                Book a donation slot and help save lives in your community.
              </p>
            </div>

            <Link
              href="/"
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Back Home
            </Link>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-red-700">
              Schedule a donation
            </h2>

            <div className="mt-6 space-y-4">

              {/* NAME */}
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />

              {/* EMAIL */}
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />

              {/* BLOOD GROUP */}
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>

              {/* LOCATION */}
              <input
                name="location"
                type="text"
                placeholder="City / Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />

              {/* PHONE (IMPORTANT FIX) */}
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />

              {/* DATE */}
              <input
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />

              {/* NOTES */}
              <textarea
                name="notes"
                placeholder="Notes (optional)"
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-red-600 text-white p-3 rounded"
            >
              {loading ? 'Saving...' : 'Submit Donation'}
            </button>

            {error && <p className="text-red-500 mt-3">{error}</p>}

            {submitted && (
              <p className="text-green-600 mt-3">
                ✅ Donation request submitted successfully!
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  )
}