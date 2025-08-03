import sassPlugin from "esbuild-plugin-sass";
import { tailwindPlugin } from "esbuild-plugin-tailwindcss";
import { defineConfig } from "pranx";
import { mdx_plugin } from "pranx/plugins";

export default defineConfig({
  esbuild: {
    plugins: [mdx_plugin(), sassPlugin(), tailwindPlugin()],
  },
});
