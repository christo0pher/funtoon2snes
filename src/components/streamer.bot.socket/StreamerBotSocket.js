

export default class StreamerBotWebsocket {
    constructor(streamerBotSocketUrl) {
        this.socket = new WebSocket(streamerBotSocketUrl);
        this.socket.onopen = () => {
            console.log('websocket connected');
        }
        this.socket.onerror = (error) => {
            console.log(`WebSocket error: ${JSON.stringify(error)}`)
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
