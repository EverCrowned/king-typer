import { queue, Difficulty, games } from "../gamesData";
import HandlerResponse from "../types/HandlerResponse";
import WebSocket from "ws";
import processQueue from "./processQueue";

export default async (
    data: { id: number; difficulty: Difficulty },
    ws: WebSocket
): Promise<HandlerResponse[]> => {
    const falseJoinResponse: HandlerResponse[] = [
        {
            category: "joinResponse",
            data: [{ client: ws, data: { success: false } }]
        }
    ];
    const key = Math.floor(Math.random() * 899999) + 100000;
    if (queue[data.difficulty].some(l => l.id === data.id)) {
        return falseJoinResponse;
    }
    if (
        Object.values(games).some(l =>
            l.players.map(j => j.id).includes(data.id)
        )
    ) {
        return falseJoinResponse;
    }
    queue[data.difficulty].push({ id: data.id, ws, key });
    const processResp = await processQueue(data.difficulty);
    const joinResp: HandlerResponse = {
        category: "joinResponse",
        data: [{ client: ws, data: { success: true, key } }]
    };
    if (processResp) {
        return [joinResp, processResp];
    } else {
        return [joinResp];
    }
};
