'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function DonatePage() {
  const [submitted, setSubmitted] = useState(false)
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-red-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-red-800">Donate Blood</h1>
              <p className="mt-2 text-gray-600">Book a donation slot and help save lives in your community.</p>
            </div>
            <Link href="/" className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
              Back Home
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-gray-700">
              <div className="rounded-3xl border border-red-100 bg-red-50 p-6">
                <h2 className="text-xl font-semibold text-red-700">Why donate?</h2>
                <p className="mt-3 text-sm leading-6">
                  A single donation can support multiple patients and make a real difference in an emergency.
                </p>
              </div>

              <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-red-700">Before you come</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-600">
                  <li>Eat a healthy meal before donating.</li>
                  <li>Bring a valid ID and stay hydrated.</li>
                  <li>Rest briefly after your donation.</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-red-700">Schedule a donation</h2>
              <p className="mt-2 text-sm text-gray-600">Share a few details and we will contact you with the next available slot.</p>

              <div className="mt-6 space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Full name
                  <input name="name" type="text" value={formData.name} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200" />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Email
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200" />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Blood group
                  <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200">
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

                <label className="block text-sm font-medium text-gray-700">
                  Location
                  <input name="location" type="text" value={formData.location} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200" />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Preferred date
                  <input name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200" />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Notes
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200" placeholder="Tell us if you have any questions or special requests." />
                </label>
              </div>

              <button type="submit" className="mt-6 w-full rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
                Submit donation request
              </button>

              {submitted && (
                <p className="mt-4 rounded-2xl bg-green-50 p-3 text-sm text-green-700">
                  Thank you! We received your donation request and will contact you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
