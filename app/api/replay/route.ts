import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  const { replayId, roomId, durationS, log, language } = await req.json()
  console.log("Replay API hit:", replayId)

  try {
    const replay = await prisma.replay.create({
      data: {
        id: replayId,
        durationS,
        language: language ?? "typescript",
        log,
      },
    })

    await prisma.room.update({
      where: { id: roomId },
      data: { replayId: replay.id },
    })

    return NextResponse.json({ replayId })
  } catch (err) {
    console.error("Failed to save replay:", err)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}