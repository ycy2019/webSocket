const WebSocket = require("ws"); //导入webSocket模块

const WebSocketServer = WebSocket.Server; //引入server类

const wss = new WebSocketServer({
    port: 3000
}) // 实例化:
console.log("Socket服务已启动");

wss.on('connection', function (ws) {
    console.log("一个客户端已链接")
})