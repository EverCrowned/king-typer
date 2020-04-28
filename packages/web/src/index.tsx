import React from "react";
import * as ReactDOM from "react-dom";

import { HashRouter, Switch, Route } from "react-router-dom";

import { Home } from "./components/frontPage/home";
import { Navbar } from "./components/common/navbar/navBar";
import { Footer } from "./components/common/footer/footer";
import { StatisticsPage } from "./components/statisticsPage/statisticsPage";

import { Global } from "@emotion/core";
import { globalStyle, Container, Content } from "./style";
import { TypingBox } from "./components/common/typingBox/typingBox";

// Create the SPA component.
const App = () => {
    return (
        <>
            <Container>
                <Global styles={globalStyle} />
                <Content>
                    <HashRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                                <Footer></Footer>
                            </Route>
                            <Route exact path="/type">
                                <TypingBox
                                    mode="easy"
                                    colorCodes={{
                                        wrong: "#f54242",
                                        correct: "#4290f5",
                                        notTyped: "#000"
                                    }}
                                ></TypingBox>
                            </Route>
                            <Route exact path="/stats">
                                <StatisticsPage />
                            </Route>
                        </Switch>
                    </HashRouter>
                </Content>
            </Container>
        </>
    );
};

// Render the app.
ReactDOM.render(<App />, document.getElementById("root"));
