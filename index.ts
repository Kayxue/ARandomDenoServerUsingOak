import { Application, Router } from "jsr:@oak/oak";

const rootRouter = new Router();
rootRouter.get("/", (ctx) => {
    const exampleData = { name: "KayXue" };
    ctx.response.body = exampleData;
});

const app = new Application();
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.addEventListener("listen", () => console.log("Server is ready!"));
app.listen({ port: 3001 });
