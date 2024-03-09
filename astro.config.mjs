import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.fortmorgangrooming.com",
  integrations: [
    tailwind({
      // Example: Provide a custom path to a Tailwind config file
      configFile: "./tailwind.config.js",
    }),
    preact({ compat: true }),
    sitemap(),
  ],
});
