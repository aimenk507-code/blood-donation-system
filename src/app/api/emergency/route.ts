import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    const requests = await prisma.emergencyRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 10 })
    return NextResponse.json(requests)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch emergency requests' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, bloodGroup, location, contact } = body as {
      name?: string
      bloodGroup?: string
      location?: string
      contact?: string
    }

    if (!name || !bloodGroup || !contact) {
      return NextResponse.json({ error: 'Name, blood group, and contact are required' }, { status: 400 })
    }

    const request = await prisma.emergencyRequest.create({
      data: {
        name: String(name),
        bloodGroup: String(bloodGroup),
        location: location ? String(location) : null,
        contact: String(contact),
      },
    })

    return NextResponse.json({ message: 'Emergency SOS created successfully', request })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit emergency SOS' }, { status: 500 })
  }
}
