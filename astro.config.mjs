// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://SekhmetDivine.github.io",
  base: isProd ? "/wireman-licence-tt" : "/",
  integrations: [tailwind()],
  output: "static",
});