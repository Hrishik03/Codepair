"use client"

import { useState } from "react"
import { Copy, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareModalProps {
  roomId: string
  onClose: () => void
}

export default function ShareModal({ roomId, onClose }: ShareModalProps) {
  const [copiedRoom, setCopiedRoom] = useState(false)
  const [copiedEditor, setCopiedEditor] = useState(false)
  const [copiedViewer, setCopiedViewer] = useState(false)

  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
  const roomUrl = `${baseUrl}/room/${roomId}`
  const editorUrl = `${roomUrl}?role=editor`
  const viewerUrl = `${roomUrl}?role=viewer`

  const copyToClipboard = async (text: string, setCopied: (v: boolean) => void) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">Share room</h2>
            <p className="mt-1 text-xs text-zinc-400">
              Anyone with the link can join. No signup required.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex size-7 items-center justify-center rounded-md border border-zinc-700 text-zinc-400 hover:text-zinc-200"
          >
            <X className="size-3.5" />
          </button>
        </div>

        {/* Room link */}
        <div className="mb-4">
          <p className="mb-1.5 text-xs font-medium text-zinc-400">Room link</p>
          <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
            <span className="flex-1 truncate font-mono text-xs text-blue-400">
              {roomUrl}
            </span>
            <button
              onClick={() => copyToClipboard(roomUrl, setCopiedRoom)}
              className="flex-shrink-0 text-zinc-400 hover:text-zinc-200"
            >
              {copiedRoom
                ? <Check className="size-3.5 text-emerald-400" />
                : <Copy className="size-3.5" />
              }
            </button>
          </div>
        </div>

        {/* Role-based links */}
        <div className="mb-6 space-y-3">
          <p className="text-xs font-medium text-zinc-400">Invite with role</p>

          {/* Editor link */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-200">Editor link</p>
                <p className="text-[10px] text-zinc-500">Can type, run code, drop comments</p>
              </div>
              <button
                onClick={() => copyToClipboard(editorUrl, setCopiedEditor)}
                className="flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-[10px] text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
              >
                {copiedEditor
                  ? <><Check className="size-3" /><span>Copied</span></>
                  : <><Copy className="size-3" /><span>Copy</span></>
                }
              </button>
            </div>
            <p className="truncate font-mono text-[10px] text-zinc-500">{editorUrl}</p>
          </div>

          {/* Viewer link */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-200">Viewer link</p>
                <p className="text-[10px] text-zinc-500">Read only — watch and comment</p>
              </div>
              <button
                onClick={() => copyToClipboard(viewerUrl, setCopiedViewer)}
                className="flex items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 text-[10px] text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
              >
                {copiedViewer
                  ? <><Check className="size-3" /><span>Copied</span></>
                  : <><Copy className="size-3" /><span>Copy</span></>
                }
              </button>
            </div>
            <p className="truncate font-mono text-[10px] text-zinc-500">{viewerUrl}</p>
          </div>
        </div>

        {/* Room ID */}
        <div className="mb-6 rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-center">
          <p className="text-[10px] uppercase tracking-wide text-zinc-500">Room code</p>
          <p className="mt-1 font-mono text-2xl font-bold tracking-widest text-zinc-100">
            {roomId}
          </p>
        </div>

        <Button
          onClick={onClose}
          variant="outline"
          className="w-full border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
        >
          Done
        </Button>
      </div>
    </div>
  )
}