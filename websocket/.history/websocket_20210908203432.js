const WebSocket = require("ws"); //导入webSocket模块

const WebSocketServer = WebSocket.Server; //引入server类

const ws = new WebSocketServer({
    port: 3000
})