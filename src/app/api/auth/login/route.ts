import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../../../../lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password } = body || {}

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const user = await prisma.users.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const hashed = (user as any).passwordHash ?? (user as any).password ?? (user as any).password_hash
    if (!hashed) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const match = await bcrypt.compare(password, String(hashed))

    if (!match) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const payload = { id: user.id, name: user.name, email: user.email }

    const secret = process.env.JWT_SECRET || 'dev-secret'
    const token = jwt.sign({ sub: String(user.id), email: user.email }, secret, { expiresIn: '7d' })

    const maxAge = 7 * 24 * 60 * 60 // 7 days
    const secure = process.env.NODE_ENV === 'production'
    let cookie = `token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax`
    if (secure) cookie += '; Secure'

    return NextResponse.json({ ok: true, user: payload }, { status: 200, headers: { 'Set-Cookie': cookie } })
  } catch (err) {
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}
