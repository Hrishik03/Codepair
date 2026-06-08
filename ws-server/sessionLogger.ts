type EventType = "join" | "leave" | "run" | "comment" | "chat" | "language_change"

interface SessionEvent {
  t: number
  type: EventType
  user: string
  payload: Record<string, unknown>
}

interface Session {
  roomId: string
  startTime: number
  language?: string
  events: SessionEvent[]
}

const sessions = new Map<string, Session>()

export function startSession(roomId: string) {
  if (!sessions.has(roomId)) {
    sessions.set(roomId, {
      roomId,
      startTime: Date.now(),
      events: [],
    })
  }
}

export function setSessionLanguage(roomId: string, language: string) {
  const session = sessions.get(roomId)
  if (session) session.language = language
}

export function logEvent(
  roomId: string,
  type: EventType,
  user: string,
  payload: Record<string, unknown> = {}
) {
  const session = sessions.get(roomId)
  if (!session) return

  const t = Math.round((Date.now() - session.startTime) / 1000)
  session.events.push({ t, type, user, payload })
}

export function endSession(roomId: string): Session | null {
  const session = sessions.get(roomId)
  if (!session) return null
  sessions.delete(roomId)
  return session
}

export function getSession(roomId: string): Session | null {
  return sessions.get(roomId) ?? null
}