import Router from "../Router";

import { createUser } from "./actions/createUser";
import { HttpError } from "../../common/error/classes/httpError";
import { validateSchema } from "../schema/middleware/validateSchema";
import { registerBody } from "./schema/registerBody";
import { RegisterBody } from "./types/RegisterBody";
import userGames from "./actions/userGames";
import getPBs from "../games/actions/getPB";
import userCountry from "./actions/userCountry";
import updateCountry from "./actions/updateCountry";
import { requireAuthenticated } from "../auth/middleware/requireAuthenticated";
import { UpdateCountry } from "./schema/updateCountry";

const router = new Router({ prefix: "/users" });

router.post(
    "/createUser",
    validateSchema(registerBody, "body"),
    async (ctx, next) => {
        const { name, password, email, country } = ctx.request
            .body as RegisterBody;

        const user = await createUser({ email, name, password, country });

        if (!user) {
            throw new HttpError(400, "That username seems to be already taken");
        }

        ctx.session!.user = user.id;
        ctx.status = 201;
        ctx.body = {
            status: 201,
            message: "Successfully created",
            id: user.id
        };
        await next();
    }
);

router.get("/userGames/:id", async (ctx, next) => {
    const { id } = ctx.params;

    const games = await userGames("id", id);

    ctx.status = 200;
    ctx.body = { games };

    await next();
});

router.get("/userGameStats/:id", async (ctx, next) => {
    const { id } = ctx.params;

    const games = await userGames("id", id);

    if (!games || games.length === 0) {
        ctx.status = 400;
        return (ctx.body = "No user with that ID exists!");
    }

    const averageWPM =
        games.map(l => l.wpm).reduce((acc, cur) => acc + cur) / games.length;
    const averageRawWPM =
        games.map(l => l.rawwpm).reduce((acc, cur) => acc + cur) / games.length;
    const averageAccuracy =
        games.map(l => l.accuracy).reduce((acc, cur) => acc + cur) /
        games.length;

    ctx.status = 200;
    ctx.body = { averageAccuracy, averageRawWPM, averageWPM };

    await next();
});

router.get("/userPBs/:id", async (ctx, next) => {
    const { id } = ctx.params;

    const game = await getPBs(id);

    if (!game) {
        ctx.status = 400;
        return (ctx.body = "That user does not have any PBs!");
    }

    ctx.status = 200;
    ctx.body = game;

    await next();
});

router.get("/userCountry/:id", async (ctx, next) => {
    const { id } = ctx.params;

    const country = await userCountry("id", id);

    ctx.status = 200;
    ctx.body = { country };

    await next();
});

router.post(
    "/updateCountry",
    requireAuthenticated(),
    validateSchema(UpdateCountry, "body"),
    async (ctx, next) => {
        const { country } = ctx.request.body;
        const { user } = ctx.session!;

        await updateCountry("id", user, country);

        ctx.status = 201;
        ctx.body = "Successfully updated countrycode!";

        await next();
    }
);

export default router.routes();
