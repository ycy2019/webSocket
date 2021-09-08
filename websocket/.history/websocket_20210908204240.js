const WebSocket = require("ws"); //导入webSocket模块

const WebSocketServer = WebSocket.Server; //引入server类

const wss = new WebSocketServer({
    port: 3000
}) // 实例化:
console.log("Socket服务已启动");

wss.on('connection', function (ws, req) {
    console.log("一个客户端已连接")
    console.log(ws);
    console.log(req);
    ws.on("message", function (message) { //接收信息
        console.log(`接收到信息${message}`)
        ws.send("收到信息", function (err) {
            if (err) {
                console.error()
            }
        })
    })
})