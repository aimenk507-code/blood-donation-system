import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    const donors = await prisma.donor.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(donors)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch donors' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, bloodGroup, phone, city, email, location, preferredDate, notes } = body || {}

    if (!name || !bloodGroup || !phone) {
      return NextResponse.json({ error: 'Name, blood group, and phone are required' }, { status: 400 })
    }

    const donor = await prisma.donor.create({
      data: {
        name: String(name),
        bloodGroup: String(bloodGroup),
        phone: phone ? String(phone) : null,
        city: city ? String(city) : null,
        email: email ? String(email) : null,
        location: location ? String(location) : null,
        preferredDate: preferredDate ? new Date(String(preferredDate)) : null,
        notes: notes ? String(notes) : null,
      },
    })

    return NextResponse.json({ message: 'Donor registered successfully', donor })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to register donor' }, { status: 500 })
  }
}