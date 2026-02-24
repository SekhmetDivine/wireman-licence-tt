// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://sekhmetdivine.github.io",
  base: isProd ? "/wireman-licence-tt/" : "/",
  output: "static",
  integrations: [tailwind()],
});