import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

export async function POST(req: Request) {
  try {
    const { patientName, bloodGroup, hospital, urgency } = await req.json();

    await db.query(
      "INSERT INTO requests (patient_name, blood_group, hospital, urgency, status) VALUES (?, ?, ?, ?, 'pending')",
      [patientName, bloodGroup, hospital, urgency]
    );

    return NextResponse.json({ message: "Request submitted" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
  }
}