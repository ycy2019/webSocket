const WebSocket = require("ws"); //导入webSocket模块

const WebSocketServer = WebSocket.Server; //引入server类

const wss = new WebSocketServer({
    port: 3001
}) // 实例化:
console.log("Socket服务已启动");

wss.on('connection', function (ws, req) {
    console.log("一个客户端已连接")
    // console.log(ws);
    // console.log(req.socket.remoteAddress);
    // console.log(wss.clients)
    // setInterval(function () {
    //     wss.clients.forEach(function (client) {
    //         client.send("hello")
    //     })
    // }, 5000)
    ws.on("message", function (message) { //接收信息
        console.log(req.headers['x-forwarded-for'].split(',')[0].trim())
        console.log(`接收到信息${message}`)
        wss.clients.forEach(function (client) {
            console.log(client.socket)
            client.send(`${message}`)
        })
        // ws.send("收到信息", function (err) {
        //     if (err) {
        //         console.error(err)
        //     }
        // })
    })

    ws.on('close', function close() {
        console.log('disconnected');
    });
})