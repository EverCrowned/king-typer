import React, { useState } from "react";

import { PreviousScoresChart } from "./components/previousScoresChart";

import {
    ThoseArePreviousScores,
    PageWrapper,
    Content,
    ListItem,
    LooksLike,
    TopBar
} from "./style";
import { PreviousScoresType } from "./helpers/interfaces";
import { getTheme } from "../../utils/getTheme";

const theme = getTheme();

export const StatisticsPage = () => {
    // Get state for previous scores and the best score that is stored in localStorage
    const [previousScores] = useState(
        (): Array<PreviousScoresType> =>
            JSON.parse(localStorage.getItem("previousScores"))
    );
    const [bestwpm] = useState(JSON.parse(localStorage.getItem("bestwpm")));

    const listOfPreviousScores = () => {
        return previousScores
            .slice(0)
            .reverse()
            .map((value, index) => {
                return (
                    <ListItem
                        style={{
                            borderTop: `1px solid ${theme.background.secondary}`,
                            color: theme.text.primary
                        }}
                        key={value.wpm + index.toString()}
                    >
                        Corrected WPM: {value.wpm}
                        {"   "}
                        Corrected CPM: {value.wpm * 5}
                        {"   "}
                        WPM: {value.uncorrectedwpm}
                        {"   "}
                        CPM: {Math.floor(value.uncorrectedwpm * 500) / 100}
                        {"   "}
                        Accuracy: {value.accuracy}
                        {"   "}
                        Date: {value.date}
                    </ListItem>
                );
            });
    };
    const getAverageWpm = () => {
        let sum = 0;
        if (previousScores.length < 11)
            previousScores.map(value => {
                sum += value.wpm;
            });
        else
            for (
                let i = previousScores.length - 10;
                i < previousScores.length;
                i++
            ) {
                sum += previousScores[i].wpm;
            }
        return (
            Math.floor(
                (sum /
                    (previousScores.length > 10 ? 10 : previousScores.length)) *
                    100
            ) / 100
        );
    };
    const getAverageAccuracy = () => {
        let sum = 0;
        if (previousScores.length < 11)
            previousScores.map(value => {
                sum += value.accuracy;
            });
        else
            for (
                let i = previousScores.length - 10;
                i < previousScores.length;
                i++
            ) {
                sum += previousScores[i].accuracy;
            }
        return (
            Math.floor(
                (sum /
                    (previousScores.length > 10 ? 10 : previousScores.length)) *
                    100
            ) / 100
        );
    };

    return (
        <PageWrapper>
            <Content>
                {previousScores.length === 0 ? (
                    <LooksLike>
                        Looks like you don&apost any statistics for now, take
                        some typing tests and come back.
                    </LooksLike>
                ) : (
                    <>
                        <TopBar>
                            Best score: {bestwpm}
                            {" | "}Average WPM: {getAverageWpm()}
                            {" | "}
                            Average Accuracy: {getAverageAccuracy()}
                        </TopBar>
                        <TopBar>
                            Total Tests Taken: {previousScores.length}
                            {" | "}Hours Spent Typing:{" "}
                            {Math.floor((previousScores.length / 60) * 100) /
                                100}
                            {"h"}
                        </TopBar>
                        <ThoseArePreviousScores>
                            Previous scores:
                        </ThoseArePreviousScores>
                        <PreviousScoresChart
                            dataProp={previousScores}
                        ></PreviousScoresChart>
                        {listOfPreviousScores()}
                    </>
                )}
            </Content>
        </PageWrapper>
    );
};
