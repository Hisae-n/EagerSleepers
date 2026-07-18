import '../Main.css'

import { useCallback, useState } from 'react'
import {
  useSocket,
  useSocketListener,
  type ServerToClientPayload,
} from 'wasp/client/webSocket'

import { PhaserGame } from './PhaserGame'

type PongPayload = ServerToClientPayload<'game:pong'>

export function GamePage() {
  const { socket, isConnected } = useSocket()
  const [lastPong, setLastPong] = useState<PongPayload | null>(null)

  useSocketListener('game:pong', (payload) => {
    setLastPong(payload)
  })

  const sendPing = useCallback(() => {
    socket.emit('game:ping', { sentAt: Date.now() })
  }, [socket])

  return (
    <main className="game-page">
      <h1>Game smoke test</h1>

      <dl className="game-status">
        <div>
          <dt>Socket</dt>
          <dd>{isConnected ? 'connected' : 'disconnected'}</dd>
        </div>
        <div>
          <dt>User ID</dt>
          <dd>{lastPong?.userId ?? 'not confirmed yet'}</dd>
        </div>
        <div>
          <dt>Last pong</dt>
          <dd>{lastPong ? new Date(lastPong.receivedAt).toLocaleTimeString() : 'none'}</dd>
        </div>
      </dl>

      <button type="button" onClick={sendPing}>
        Send ping from React
      </button>

      <section className="phaser-section" aria-label="Phaser test area">
        <p>Phaser controls only the bordered canvas area below.</p>
        <PhaserGame
          isConnected={isConnected}
          lastPongAt={lastPong?.receivedAt ?? null}
          onPing={sendPing}
        />
      </section>
    </main>
  )
}
