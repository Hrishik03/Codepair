import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const replay = await prisma.replay.findUnique({
    where: { id },
  })

  if (!replay) {
    return NextResponse.json({ error: "Replay not found" }, { status: 404 })
  }

  return NextResponse.json(replay)
}