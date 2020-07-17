import Koa from "koa";
import Router from "./modules/Router";
import WebSocket from "ws";

import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

import errorHandler from "./common/error/middleware/errorHandler";

import apiRouter from "./modules/apiRouter";
import { allowCors } from "./modules/cors/middleware/allowCors";
import { useSession } from "./modules/session/helpers/useSession";
import { setWsHeartbeat } from "ws-heartbeat/server";
import websocket from "./modules/websockets/websocket";

const app = new Koa();
const router = new Router();

const port = +(process.env.PORT ?? 8090);

app.use(bodyParser());
app.use(json());
app.use(useSession(app)).use(allowCors());

if (process.env.NODE_ENV === "development") {
    app.use(logger());
}

app.use(errorHandler());

router.use(apiRouter);

app.use(router.routes()).use(router.allowedMethods());

export const server = app.listen(port, () => {
    console.info(`Running in ${process.env.NODE_ENV} mode;`);
    console.info(`Koa app started and listening on port ${port}! 🚀`);
});

const wss = new WebSocket.Server({ server });
wss.on("connection", (ws: WebSocket) => {
    ws.on("message", _ => websocket(wss, ws, _));
});
setWsHeartbeat(wss, (ws: WebSocket, data: unknown) => {
    if (data === '{"category":"ping"}') {
        ws.send('{"category":"pong"}');
    }
});
