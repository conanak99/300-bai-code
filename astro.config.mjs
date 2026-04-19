// @ts-check

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://300baicode.com",
  trailingSlash: "ignore",
  integrations: [tailwind(), sitemap()],
});
