'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log({ email, password })
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-red-50 px-6 py-12 md:px-8">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-red-700">Login</h1>
        <p className="mt-2 text-sm text-gray-600">Enter your credentials to access the dashboard.</p>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200"
              placeholder="Enter your password"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
