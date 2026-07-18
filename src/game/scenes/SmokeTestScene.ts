import Phaser from 'phaser'

export type GameBridge = Phaser.Events.EventEmitter

export class SmokeTestScene extends Phaser.Scene {
  private connectionText?: Phaser.GameObjects.Text
  private pongText?: Phaser.GameObjects.Text
  private lastPongAt: number | null = null
  private isConnected = false
  private needsStatusRender = true

  constructor(private readonly bridge: GameBridge) {
    super('SmokeTestScene')
  }

  create() {
    const { width, height } = this.scale

    this.add.rectangle(width / 2, height / 2, width - 2, height - 2).setStrokeStyle(2, 0x444444)

    this.add.text(24, 24, 'Phaser canvas area', {
      color: '#111111',
      fontFamily: 'monospace',
      fontSize: '24px',
    })

    this.connectionText = this.add.text(24, 76, '', {
      color: '#111111',
      fontFamily: 'monospace',
      fontSize: '18px',
    })

    this.pongText = this.add.text(24, 108, '', {
      color: '#111111',
      fontFamily: 'monospace',
      fontSize: '18px',
    })

    const pingButton = this.add
      .text(24, height - 64, 'Send ping from Phaser', {
        backgroundColor: '#eeeeee',
        color: '#111111',
        fontFamily: 'monospace',
        fontSize: '16px',
        padding: { x: 10, y: 8 },
      })
      .setInteractive({ useHandCursor: true })

    pingButton.on('pointerdown', () => {
      this.bridge.emit('ping')
    })

    this.bridge.on('socket-status', this.handleSocketStatus, this)
    this.bridge.on('pong', this.handlePong, this)
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.bridge.off('socket-status', this.handleSocketStatus, this)
      this.bridge.off('pong', this.handlePong, this)
    })

    this.needsStatusRender = true
  }

  update() {
    if (!this.needsStatusRender) {
      return
    }

    this.needsStatusRender = false
    this.renderStatus()
  }

  private handleSocketStatus(isConnected: boolean) {
    this.isConnected = isConnected
    this.needsStatusRender = true
  }

  private handlePong(lastPongAt: number | null) {
    this.lastPongAt = lastPongAt
    this.needsStatusRender = true
  }

  private renderStatus() {
    this.connectionText?.setText(
      `Wasp WebSocket: ${this.isConnected ? 'connected' : 'disconnected'}`
    )
    this.pongText?.setText(
      `Last pong: ${
        this.lastPongAt === null
          ? 'none'
          : new Date(this.lastPongAt).toLocaleTimeString()
      }`
    )
  }
}
