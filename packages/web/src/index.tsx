import React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./components/frontPage/home";
import { Navbar } from "./components/common/navbar/navBar";
import { Footer } from "./components/common/footer/footer";

import { Global } from "@emotion/core";
import { globalStyle } from "./style";
import { Box } from "./components/common/typingBox/typingBox";

const App = () => {
    return (
        <>
            <Global styles={globalStyle} />
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/type">
                        <Box></Box>
                    </Route>
                </Switch>
            </Router>
            <Footer></Footer>
        </>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
