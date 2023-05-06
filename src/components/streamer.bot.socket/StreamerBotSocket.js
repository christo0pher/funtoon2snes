

export default class StreamerBotWebsocket {
    constructor() {
        this.socket = new WebSocket('ws://127.0.0.1:8123');
        this.socket.onopen = () => {
            console.log('websocket connected');
        }
        this.socket.onerror = () => {
            console.log(`WebSocket error: ${error}`)
        }
    }

    send(data) {
        this.socket.send(JSON.stringify(data));
    }

    doAction(guid) {
        this.send({
            request: 'DoAction',
            action: {
                id: guid,
                name: guid
            },
            id: guid
        });
    }
}
