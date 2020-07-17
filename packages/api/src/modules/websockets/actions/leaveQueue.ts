import { queue } from "../gamesData";
import HandlerResponse from "../types/HandlerResponse";
import WebSocket from "ws";

export default (id: number, ws: WebSocket): HandlerResponse => {
    queue.splice(queue.findIndex(l => l.id === id));
    return {
        category: "joinResponse",
        data: [{ client: ws, data: "Successfully left queue" }]
    };
};
