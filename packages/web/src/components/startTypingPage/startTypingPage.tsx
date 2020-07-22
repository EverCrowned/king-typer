import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

import { Wrapper, Latest } from "./style";

import { Nav } from "./components/navBar/navBar";

import { TypingBox } from "../common/typingBox/typingBox";
import { getTheme } from "../../utils/getTheme";

const theme = getTheme();

import { CreateNewWS } from "./helpers/websocket";
import { sendWebsocket } from "../../utils/websocket";
import { setWsHeartbeat } from "ws-heartbeat/client";

export const StartTypingPage = () => {
    const locatione = useLocation();

    const ws = CreateNewWS();

    useEffect(() => {
        if (
            locatione.pathname === "/type/multiplayer/easy" ||
            (locatione.pathname === "/type/multiplayer/normal" &&
                ws.readyState === ws.OPEN)
        ) {
            setWsHeartbeat(ws, '{"category": "ping"}');
            ws.onopen = () => {
                console.log("Connected");
            };
            ws.onclose = () => {
                sendWebsocket(ws, "leaveQueue", {
                    id: 3
                });
                console.log("Disconnected");
            };
        } else {
            ws.close();
        }
        return () => {
            ws.close();
        };
    }, [locatione]);

    return (
        <Wrapper>
            <Nav />
            <Route exact path="/type">
                <Latest>HERE I WILL PUT THE LATEST HIGHSCORES</Latest>
            </Route>
            <Route exact path="/type/practice/easy">
                <TypingBox
                    mode="easy"
                    colorCodes={theme.boxColorCodes}
                    multiplayer={false}
                ></TypingBox>
            </Route>
            <Route exact path="/type/practice/normal">
                <TypingBox
                    mode="hard"
                    colorCodes={theme.boxColorCodes}
                    multiplayer={false}
                ></TypingBox>
            </Route>
            <Route exact path="/type/multiplayer/easy">
                <TypingBox
                    mode="easy"
                    colorCodes={theme.boxColorCodes}
                    multiplayer={true}
                    ws={ws}
                ></TypingBox>
            </Route>
            <Route exact path="/type/multiplayer/normal">
                <TypingBox
                    mode="hard"
                    colorCodes={theme.boxColorCodes}
                    multiplayer={true}
                    ws={ws}
                ></TypingBox>
            </Route>
        </Wrapper>
    );
};
