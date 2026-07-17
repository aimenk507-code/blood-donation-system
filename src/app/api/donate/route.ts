import { NextResponse } from "next/server";
import { getPrisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      full_name,
      email,
      blood_group,
      location,
      preferred_date,
      notes,
    } = body;

    if (!full_name?.trim() || !email?.trim() || !blood_group?.trim() || !location?.trim() || !preferred_date) {
      return NextResponse.json(
        { error: "full_name, email, blood_group, location, and preferred_date are required" },
        { status: 400 }
      );
    }

    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL is not set. Prisma cannot connect to the database.');
      return NextResponse.json({ error: 'Server misconfiguration: DATABASE_URL is not set' }, { status: 500 });
    }

    let prisma;
    try {
      prisma = getPrisma();
    } catch (initErr) {
      // Log and return a clear message if Prisma fails to initialize
      // eslint-disable-next-line no-console
      console.error('Prisma initialization error:', initErr);
      const initMsg = initErr instanceof Error ? initErr.message : String(initErr);
      return NextResponse.json({ error: initMsg || 'Prisma initialization failed' }, { status: 500 });
    }

    const donation = await prisma.donations.create({
      data: {
        full_name: full_name.trim(),
        email: email.trim(),
        blood_group: blood_group.trim(),
        location: location.trim(),
        preferred_date: new Date(preferred_date),
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
    // Log the error for debugging
    // eslint-disable-next-line no-console
    console.error('Error in /api/donate POST:', error);
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: msg || 'Failed to create donation request' }, { status: 500 });
  }
}
