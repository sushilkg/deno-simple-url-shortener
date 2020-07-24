import { Router, log } from "./deps.ts";
import * as links from "./models/links.ts";

const router = new Router();

router.get("/links", (context) => {
  log.info("Getting all links");
  context.response.body = links.getLinks();
});

router.post("/links/add", async (context) => {
  //valid js object, automatically parsed json from body
  const body = await context.request.body();
  const newLink = await body.value;

  log.info(`Adding new link ${JSON.stringify(newLink)}`);

  links.addLink(newLink.url);

  context.response.body = { success: true };
  context.response.status = 201;
});

//Implement search link and redirect

export default router;
