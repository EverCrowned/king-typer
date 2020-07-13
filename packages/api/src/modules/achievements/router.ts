import Router from "../Router";
import addAchievement from "./actions/addAchievement";
import { HttpError } from "../../common/error/classes/httpError";
import editAchievement from "./actions/editAchievement";
import { requireAdmin } from "../auth/middleware/requireAdmin";
import deleteAchievement from "./actions/deleteAchievement";
import getAchievements from "./actions/getAchievements";

const router = new Router({ prefix: "/achievements" });

router.post("/addAchievement", requireAdmin(), async (ctx, next) => {
    const { name, description, difficulty, requirements } = ctx.request.body;

    await addAchievement({ name, description, difficulty, requirements });

    ctx.status = 201;
    ctx.body = { message: "Successfully added achievement" };

    await next();
});

router.patch("/editAchievement", requireAdmin(), async (ctx, next) => {
    const { id, details } = ctx.request.body;
    const resp = await editAchievement(id, details);
    if (!resp) {
        throw new HttpError(400, "No achievement with that ID exists");
    }
    ctx.status = 200;
    ctx.body = { message: "Successfully edited achievement" };
    await next();
});

router.delete("/deleteAchievement", requireAdmin(), async (ctx, next) => {
    const { id } = ctx.request.body;
    await deleteAchievement(id);
    ctx.status = 200;
    ctx.body = { message: "Successfully deleted achievement" };
    await next();
});

router.get("/", async (ctx, next) => {
    const data = await getAchievements();
    ctx.status = 200;
    ctx.body = data;
    await next();
});

export default router.routes();
