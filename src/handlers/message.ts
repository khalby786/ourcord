import { green, bold } from "chalk";

export default function handleMessage(message: string, flag: any, websocket: any) {
    const msg = websocket.evaluate(message, flag);
    websocket._sequenceNum = msg.s
    if (msg.t === "READY") {
        websocket.emit("debug", `${green.bold("[NOTICE/websocket]")} ${green("Connected to the Discord API")}`)
        websocket._sessionId = msg.d.session_id
        return websocket.emit("ready", msg.d.user);
    } else if (msg.t === "MESSAGE_CREATE") {
        return websocket.emit("message", msg.d);
    } else if (msg.op == 10) {
        if (websocket.hb) clearInterval(websocket.hb)
        websocket.hb = setInterval(() => {
            websocket.socket.send({op: 1, d: websocket._sequenceNum});
            websocket.emit('debug', `[Heartbeat] - ${msg.d.heartbeat_interval}ms`)
        }, msg.d.heartbeat_interval)
        return websocket.emit("debug", `${bold("[NOTICE/websocket]")} - Starting heartbeat at ${msg.d.heartbeat_interval}ms`);
    } else if (msg.op == 7) {
        websocket.socket.send({
            op: 6,
            d: {
                session_id: websocket._sessionId,
                token: websocket.token,
                seq: websocket._sequenceNum
            }
        })
    }
}