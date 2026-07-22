import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      full_name,
      name,
      email,
      blood_group,
      bloodGroup,
      location,
      preferred_date,
      preferredDate,
      notes,
    } = body || {};

    const donorName = (full_name || name || '').trim();
    const donorEmail = (email || '').trim();
    const group = (blood_group || bloodGroup || '').trim();
    const loc = (location || '').trim();
    const dateVal = preferred_date || preferredDate;

    if (!donorName || !group) {
      return NextResponse.json(
        { error: "Name and blood group are required" },
        { status: 400 }
      );
    }

    const donation = await prisma.donor.create({
      data: {
        name: donorName,
        email: donorEmail || null,
        bloodGroup: group,
        location: loc || null,
        preferredDate: dateVal ? new Date(dateVal) : null,
        notes: notes?.trim() || null,
      },
    });

    return NextResponse.json(
      {
        message: "Donation request created successfully",
        donation,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in /api/donate POST:', error);
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: msg || 'Failed to create donation request' }, { status: 500 });
  }
}
