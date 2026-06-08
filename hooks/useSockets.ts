"use client"

import { useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"

let socket: Socket | null = null

export function useSocket() {
  const [socketInstance, setSocketInstance] = useState<Socket | null>(null)

  useEffect(() => {
    if (!socket) {
      socket = io("http://localhost:3001")
    }
    setSocketInstance(socket)
  }, [])

  return socketInstance
}