import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	site: "https://iamaseem.pages.dev/",
	base: "/",
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true
		}
	},
	integrations: [mdx({}), tailwind({
		config: {
			applyBaseStyles: false
		}
	}), sitemap(),
	partytown({
		config: {
			forward: ["dataLayer.push"]
		},
	}),
	],
	prefetch: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"]
		}
	}
});