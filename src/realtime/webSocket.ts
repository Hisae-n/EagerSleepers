import {
  type WaspSocketData,
  type WebSocketDefinition,
} from 'wasp/server/webSocket'

type PingPayload = {
  sentAt: number
}

type PongPayload = {
  sentAt: number
  receivedAt: number
  userId: number | null
}

export const webSocketFn: WebSocketFn = (io) => {
  io.on('connection', (socket) => {
    const userId = socket.data.user?.id ?? null

    console.log('[websocket] connected', {
      socketId: socket.id,
      userId,
    })

    socket.on('game:ping', (payload) => {
      socket.emit('game:pong', {
        sentAt: payload.sentAt,
        receivedAt: Date.now(),
        userId,
      })
    })

    socket.on('disconnect', (reason) => {
      console.log('[websocket] disconnected', {
        socketId: socket.id,
        userId,
        reason,
      })
    })
  })
}

type WebSocketFn = WebSocketDefinition<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>

interface ClientToServerEvents {
  'game:ping': (payload: PingPayload) => void
}

interface ServerToClientEvents {
  'game:pong': (payload: PongPayload) => void
}

interface InterServerEvents {}

interface SocketData extends WaspSocketData {}
