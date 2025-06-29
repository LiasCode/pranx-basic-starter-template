import { serve } from "@hono/node-server";
import { pranx } from "pranx";

const app = await pranx.init({
  mode: "prod",
});

app.onError((err, c) => {
  console.error(err);
  return c.text("Custom Error Message", 500);
});

serve(
  {
    fetch: app.fetch,
    port: Number(process.env.PORT) || 3030,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
