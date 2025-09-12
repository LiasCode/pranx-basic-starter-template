import { defineHandler } from "pranx/server";

export const GET = defineHandler(() => {
  return { hello: "Pranx" };
});
