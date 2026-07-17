'use client'

import SignupForm from './SignupForm'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-red-50 px-6 py-12 md:px-8">
      <div className="mx-auto w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-700">Create your account</h1>
          <p className="mt-2 text-sm text-gray-600">Join the community and start helping save lives.</p>
        </div>
        <SignupForm />
      </div>
    </div>
  )
}
