"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type EmergencyRequest = {
  id: number;
  name: string;
  blood_group: string;
  location: string;
  contact: string;
  urgency: string;
  status: string;
  created_at: string;
};

export default function EmergencySOSPage() {
  const [submitted, setSubmitted] = useState(false);
  const [requests, setRequests] = useState<EmergencyRequest[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    location: "",
    contact: "",
  });
  const [error, setError] = useState("");

  const fetchRequests = async () => {
    try {
      const res = await fetch("/api/emergency");
      if (res.ok) {
        const data = await res.json();
        setRequests(Array.isArray(data) ? data : []);
      }
    } catch {
      setRequests([]);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.bloodGroup || !formData.contact) {
      setError("Please fill all required fields");
      return;
    }

    try {
      const res = await fetch("/api/emergency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", bloodGroup: "", location: "", contact: "" });
        await fetchRequests();
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong, please try again");
      }
    } catch {
      setError("Network error, please try again");
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-10 px-4">
        <p className="text-red-600 font-semibold tracking-widest">EMERGENCY</p>
        <h1 className="text-4xl font-bold text-red-800 mt-2">Emergency SOS Activated</h1>
        <p className="text-gray-600 mt-3">
          Your emergency request has been registered. A response team will contact you immediately.
        </p>

        <div className="bg-red-50 rounded-2xl mt-8 p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h3 className="text-red-800 font-semibold text-lg">What happens next</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>• Emergency contacts are notified.</li>
              <li>• Nearby donors and volunteers are alerted.</li>
              <li>• Medical support is prioritized for your request.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-800 font-semibold text-lg">Contact support</h3>
            <p className="text-gray-700 mt-3">
              If you need immediate help, please call the emergency hotline below.
            </p>
            <div className="bg-white rounded-xl p-4 mt-4">
              <p className="text-gray-500 text-sm">Emergency hotline</p>
              <p className="text-red-800 font-bold text-xl">+1 800 123 4567</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 bg-red-700 text-white font-semibold px-6 py-3 rounded-full"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="max-w-md mx-auto">
        <p className="text-red-600 font-semibold tracking-widest text-center">EMERGENCY</p>
        <h1 className="text-3xl font-bold text-red-800 mt-2 text-center">Request Emergency Help</h1>
        <p className="text-gray-600 mt-2 text-center">Fill in the details below — urgent help is needed.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full border rounded-lg px-4 py-2" />
          <input name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="Blood Group (e.g. A+)" className="w-full border rounded-lg px-4 py-2" />
          <input name="location" value={formData.location} onChange={handleChange} placeholder="Your Location / Hospital" className="w-full border rounded-lg px-4 py-2" />
          <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" className="w-full border rounded-lg px-4 py-2" />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button type="submit" className="w-full bg-red-700 text-white font-semibold py-3 rounded-full">
            Activate Emergency SOS
          </button>
        </form>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-red-800 mb-4">Urgent Emergency Requests</h2>
        {requests.length === 0 ? (
          <p className="text-gray-600">No urgent requests yet.</p>
        ) : (
          <div className="space-y-3">
            {requests.map((request) => (
              <div key={request.id} className="border border-red-200 rounded-xl p-4 bg-red-50">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-red-800">{request.name}</h3>
                  <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">{request.urgency}</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">Blood Group: {request.blood_group}</p>
                <p className="text-sm text-gray-700">Location: {request.location || "Not provided"}</p>
                <p className="text-sm text-gray-700">Contact: {request.contact}</p>
                <p className="text-xs text-gray-500 mt-2">Status: {request.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}