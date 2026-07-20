import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '../../../../lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, password, city, bloodGroup } = body || {}

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 })
    }

    if (typeof password !== 'string' || password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name: String(name),
        email: String(email),
        passwordHash: hashedPassword,
        city: city ? String(city) : null,
        bloodGroup: bloodGroup ? String(bloodGroup) : null,
      },
    })

    return NextResponse.json({ ok: true, message: 'Account created successfully', user: { id: user.id, email: user.email } }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create account' }, { status: 500 })
  }
}
