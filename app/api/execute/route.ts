import { NextRequest, NextResponse } from "next/server"

const COMPILER_MAP: Record<string, string> = {
  python:     "python-3.14",
  javascript: "typescript-deno",
  typescript: "typescript-deno",
  java:       "openjdk-25",
  cpp:        "g++-15",
  go:         "go-1.26",
}

export async function POST(req: NextRequest) {
  const { code, language, input } = await req.json()

  const compiler = COMPILER_MAP[language]
  if (!compiler) {
    return NextResponse.json({ error: "Unsupported language" }, { status: 400 })
  }

  try {
    const res = await fetch("https://api.onlinecompiler.io/api/run-code-sync/", {
      method: "POST",
      headers: {
        "Authorization": process.env.ONLINE_COMPILER_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        compiler,
        code,
        input: input ?? "",
      }),
    })

    const data = await res.json()
    console.log("Compiler response:", data)

    const output = data.output || data.error || "No output"
    const exitCode = data.exit_code ?? 1
    const runtime = parseFloat(data.time ?? "0") * 1000

    return NextResponse.json({ output, exitCode, runtime })
  } catch (err) {
    console.error("Compiler error:", err)
    return NextResponse.json({ error: "Execution failed" }, { status: 500 })
  }
}