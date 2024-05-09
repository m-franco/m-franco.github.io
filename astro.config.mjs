import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown'

export default defineConfig({
    site: 'https://m-franco.github.io',
    integrations: [
        tailwind(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ]
});