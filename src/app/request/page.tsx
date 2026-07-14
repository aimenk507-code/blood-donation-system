"use client";

import { useState } from "react";

interface RequestFormData {
  fullName: string;
  bloodGroup: string;
  city: string;
  contactNumber: string;
}

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export default function RequestPage() {
  const [formData, setFormData] = useState<RequestFormData>({
    fullName: "",
    bloodGroup: "",
    city: "",
    contactNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Blood Request Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-red-50">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-10 sm:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-red-800">Request Blood</h1>
              <p className="mt-2 text-gray-600">Fill the form below to create a blood request.</p>
            </div>
            <Link href="/" className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
              Back Home
            </Link>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Group
            </label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
            >
              <option value="">Select blood group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter your city"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              placeholder="e.g. 03001234567"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 active:scale-95 transition-all duration-200"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}