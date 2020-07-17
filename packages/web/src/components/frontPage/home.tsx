import * as React from "react";

import { Pannel1 } from "./components/pannel1/pannel1";
import { Pannel2 } from "./components/pannel2/pannel2";
import { Pannel3 } from "./components/pannel3/pannel3";

// Initialization of the localStorage items.
if (localStorage.getItem("bestwpm") === null) {
    localStorage.setItem("bestwpm", JSON.stringify(0));
}
if (localStorage.getItem("previousScores") === null) {
    localStorage.setItem("previousScores", JSON.stringify([]));
}
if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", JSON.stringify("light"));
}
if (localStorage.getItem("userid") === null) {
    localStorage.setItem("userid", JSON.stringify("undefined"));
}
// Home page

export const Home = () => {
    return (
        <>
            <Pannel1></Pannel1>
            <Pannel2></Pannel2>
            <Pannel3></Pannel3>
        </>
    );
};
