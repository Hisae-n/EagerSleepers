import { useEffect, useRef } from 'react'
import Phaser from 'phaser'

import { SmokeTestScene, type GameBridge } from './scenes/SmokeTestScene'

type PhaserGameProps = {
  isConnected: boolean
  lastPongAt: number | null
  onPing: () => void
}

export function PhaserGame({ isConnected, lastPongAt, onPing }: PhaserGameProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const gameRef = useRef<Phaser.Game | null>(null)
  const bridgeRef = useRef<GameBridge | null>(null)

  if (bridgeRef.current === null) {
    bridgeRef.current = new Phaser.Events.EventEmitter()
  }

  useEffect(() => {
    if (containerRef.current === null || gameRef.current !== null) {
      return
    }

    const bridge = bridgeRef.current
    if (bridge === null) {
      return
    }

    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      parent: containerRef.current,
      width: 760,
      height: 420,
      backgroundColor: '#ffffff',
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: [new SmokeTestScene(bridge)],
    })

    return () => {
      gameRef.current?.destroy(true)
      gameRef.current = null
    }
  }, [])

  useEffect(() => {
    const bridge = bridgeRef.current
    if (bridge === null) {
      return
    }

    bridge.on('ping', onPing)

    return () => {
      bridge.off('ping', onPing)
    }
  }, [onPing])

  useEffect(() => {
    bridgeRef.current?.emit('socket-status', isConnected)
  }, [isConnected])

  useEffect(() => {
    bridgeRef.current?.emit('pong', lastPongAt)
  }, [lastPongAt])

  return <div ref={containerRef} className="phaser-stage" />
}
