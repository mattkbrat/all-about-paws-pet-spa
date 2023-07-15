import {defineConfig} from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    integrations: [image(), tailwind({
        // Example: Provide a custom path to a Tailwind config file
        configFile: './tailwind.config.js',
    }), preact()]
});