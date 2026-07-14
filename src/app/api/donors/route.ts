import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

// GET /api/donors — fetch donor list
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM donors");
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch donors" }, { status: 500 });
  }
}

// POST /api/donors — register donor
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, bloodGroup, phone, city } = body;

    if (!name || !bloodGroup || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await db.query(
      "INSERT INTO donors (name, blood_group, phone, city) VALUES (?, ?, ?, ?)",
      [name, bloodGroup, phone, city]
    );

    return NextResponse.json({ message: "Donor registered successfully" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to register donor" }, { status: 500 });
  }
}