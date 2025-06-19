
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { panNumber } = body;

  if (!panNumber) {
    return NextResponse.json({ error: "PAN number is required" }, { status: 400 });
  }

  try {
    const result = await prisma.$queryRawUnsafe(
      `SELECT name FROM be2CheckEligibilityLeads WHERE panNumber = '${panNumber}'`
    );

    if (result.length === 0) {
      return NextResponse.json({ name: null }, { status: 404 });
    }

    return NextResponse.json({ name: result[0].name });
  } catch (error) {
    console.error("Prisma raw query error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
