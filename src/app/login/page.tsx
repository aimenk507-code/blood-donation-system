'use client'

import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-red-50 px-6 py-12 md:px-8">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <LoginForm />
      </div>
    </div>
  )
}
