'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

export default function RequestPage() {
  const [form, setForm] = useState({
    fullName: '',
    bloodGroup: '',
    city: '',
    contactNumber: '',


    
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Blood Request Submitted:', form);

    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patientName: form.fullName,
          bloodGroup: form.bloodGroup,
          hospital: form.city,
          urgency: form.contactNumber,
        }),
      });

      const data = await res.json();
      console.log('API Response:', data);

      if (res.ok) {
        alert('✅ Request Saved in Database');
        setForm({ fullName: '', bloodGroup: '', city: '', contactNumber: '' });
      } else {
        alert('❌ Failed to save');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('❌ Server Error');
    }
  };

  return (
    <main className="min-h-screen bg-red-50 p-6">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-red-700">Blood Request</h1>
        <p className="mt-2 text-sm text-gray-600">Share the details below and we will help connect you with donors.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3"
          />

          <select
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3"
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

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3"
          />

          <input
            name="contactNumber"
            value={form.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}