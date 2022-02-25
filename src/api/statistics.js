export function connect(data) {
  const host = process.env.VUE_APP_BASE_API + ':8000'
  const webSocketUrl = 'ws://' + host + data.url
  const subprotocols = [data.protocol]
  return new WebSocket(webSocketUrl, subprotocols)
}
