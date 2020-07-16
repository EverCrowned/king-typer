import Router from "../Router";
import { requireAdmin } from "../auth/middleware/requireAdmin";
import addText from "./actions/addText";
import getAllTexts from "./actions/getAllTexts";
import getRandomText from "./actions/getRandomText";
import { addTextBody } from "./schema/addTextBody";
import { validateSchema } from "../schema/middleware/validateSchema";
import deleteText from "./actions/deleteText";
import editText from "./actions/editText";
import { HttpError } from "../../common/error/classes/httpError";

const router = new Router({ prefix: "/texts" });

router.post(
    "/addText",
    requireAdmin(),
    validateSchema(addTextBody, "body"),
    async (ctx, next) => {
        const { title, text, difficulty, ordered, tutorial } = ctx.request.body;
        const requirements = ctx.request.body.requirements;
        if (tutorial && !requirements) {
            throw new HttpError(
                400,
                "You need to have requirements for a tutorial!"
            );
        }
        const { user } = ctx.session!;
        await addText(
            title,
            text,
            difficulty,
            user,
            ordered,
            tutorial,
            requirements
        );
        ctx.status = 201;
        ctx.body = {
            message: "Successfully added text"
        };
        await next();
    }
);

// TODO: Add schema validation for this
router.patch("/editUser", requireAdmin(), async (ctx, next) => {
    const { property, id, newValue } = ctx.request.body;
    await editText(property, id, newValue);
    await next();
});

router.delete("/deleteText", requireAdmin(), async (ctx, next) => {
    const { id } = ctx.request.body;
    await deleteText(id);
    ctx.status = 200;
    ctx.body = { message: "Successfully deleted text" };
    await next();
});

router.get("/getAllTexts", async (ctx, next) => {
    const texts = await getAllTexts();
    ctx.status = 200;
    ctx.body = texts;
    await next();
});

router.get("/getRandomText/:ordered", async (ctx, next) => {
    const { ordered } = ctx.params;

    const text = await getRandomText(ordered === "true");
    ctx.status = 200;
    ctx.body = text;
    await next();
});

export default router.routes();
