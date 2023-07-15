import {defineConfig} from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({
        // Example: Provide a custom path to a Tailwind config file
        configFile: './tailwind.config.js',
    }), preact()],
});