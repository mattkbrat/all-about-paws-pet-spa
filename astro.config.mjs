import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://www.fortmorgangrooming.com",
  integrations: [
    preact({
      compat: true,
    }),
    sitemap(),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
