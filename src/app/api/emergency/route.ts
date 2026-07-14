import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

async function ensureEmergencyTable() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS emergencies (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      blood_group VARCHAR(10) NOT NULL,
      location VARCHAR(255),
      contact VARCHAR(50) NOT NULL,
      urgency VARCHAR(20) DEFAULT 'urgent',
      status VARCHAR(20) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export async function GET() {
  try {
    await ensureEmergencyTable();

    const [rows] = await db.query(
      "SELECT id, name, blood_group, location, contact, urgency, status, created_at FROM emergencies ORDER BY created_at DESC LIMIT 10"
    );

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch emergency requests" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, bloodGroup, location, contact } = body as {
      name?: string;
      bloodGroup?: string;
      location?: string;
      contact?: string;
    };

    if (!name || !bloodGroup || !contact) {
      return NextResponse.json(
        { error: "Name, blood group, and contact are required" },
        { status: 400 }
      );
    }

    await ensureEmergencyTable();

    await db.query(
      "INSERT INTO emergencies (name, blood_group, location, contact, urgency, status) VALUES (?, ?, ?, ?, ?, ?)",
      [name, bloodGroup, location || "", contact, "urgent", "pending"]
    );

    return NextResponse.json({ message: "Emergency SOS created successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit emergency SOS" },
      { status: 500 }
    );
  }
}
