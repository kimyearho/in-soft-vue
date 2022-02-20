export function connect(data) {
  const host = 'localhost:8000'
  const webSocketUrl = 'ws://' + host + data.url
  const subprotocols = [data.protocol]
  return new WebSocket(webSocketUrl, subprotocols)
}
