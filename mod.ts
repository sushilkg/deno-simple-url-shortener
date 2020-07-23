import { Application, send } from "https://deno.land/x/oak/mod.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import api from "./api.ts";

const app = new Application();

app.use(api.routes());

app.use(async (context) => {
  await send(context, "/index.html", {
    root: `${Deno.cwd()}/public`,
  });
});

app.addEventListener("error", (event) => {
  log.error(event.error);
});

if (import.meta.main) {
  await app.listen({
    port: 8888,
  });
}
