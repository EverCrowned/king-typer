import Achievement from "../../achievements/types/Achievement";
import Game from "../types/Game";
import { highestGameId } from "./highestGameId";
import knex from "../../../../db/knex";
import findAchievementsByRequirement from "../../achievements/actions/findAchievementsByRequirement";
import userHasAchievement from "../../achievements/actions/userHasAchievement";

export const createGame = async (
    userid: number,
    wpm: number,
    rawwpm: number,
    accuracy: number,
    difficulty: number,
    textid: number
): Promise<Game> => {
    const newGame = {
        gameid: (await highestGameId()) + 1,
        userid,
        wpm,
        rawwpm,
        accuracy,
        difficulty,
        textid,
        date: Date.now()
    };
    const possibleAchievements: Achievement[] = await findAchievementsByRequirement(
        {
            wpm,
            rawwpm,
            acc: accuracy
        }
    );

    const achiev = await Promise.all(
        possibleAchievements.map(
            async item => await userHasAchievement(userid, item.id)
        )
    );
    const achievements = possibleAchievements.filter(
        (l, index) => !achiev[index]
    );

    const user = await knex("users")
        .where({ id: userid })
        .first();

    await knex("users")
        .where({ id: userid })
        .update({
            totaltests: user.totaltests ? user.totaltests + 1 : 1,
            exp: Math.floor(user.exp + (wpm * difficulty) / 10)
        });

    achievements.map(async l => {
        await knex("users")
            .update({
                achievements: knex.raw("array_append(achievements, ?)", [l.id])
            })
            .where({ id: userid });
    });
    return (await knex<Game>("games").insert(newGame, "*"))[0];
};
