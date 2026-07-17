import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    const requests = await prisma.bloodRequest.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(requests)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch blood requests' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, string | undefined>
    const patientName = body.patientName || body.name
    const bloodGroup = body.bloodGroup || body.blood
    const hospital = body.hospital || body.city
    const urgency = body.urgency || body.phone
    const contactNumber = body.contactNumber

    if (!patientName || !bloodGroup || !hospital || !urgency) {
      return NextResponse.json({ error: 'Patient name, blood group, hospital, and urgency are required' }, { status: 400 })
    }

    const request = await prisma.bloodRequest.create({
      data: {
        patientName: String(patientName),
        bloodGroup: String(bloodGroup),
        hospital: hospital ? String(hospital) : null,
        urgency: urgency ? String(urgency) : null,
        contactNumber: contactNumber ? String(contactNumber) : null,
      },
    })

    return NextResponse.json({ message: 'Request submitted', request })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 })
  }
}