import { Application, Router } from "jsr:@oak/oak";

const rootRouter = new Router();
rootRouter.get("/", (ctx) => {
    ctx.response.body = "Hello world!";
});

const app = new Application();
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.addEventListener("listen", () => console.log("Server is ready!"));
app.listen({ port: 3001 });
