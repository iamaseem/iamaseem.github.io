import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import purgecss from 'astro-purgecss';
import clarity from "@kbyte-tech/astro-clarity";

// https://astro.build/config
export default defineConfig({
	site: "https://iamaseem.pages.dev/",
	base: "/",
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true
		},
		syntaxHighlight: "prism",
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		mdx({}),
		tailwind({}),
		sitemap(),
		purgecss({
			safelist: ["font-['Nabla']"],
			extractors: [
				{
					extractor: (content) =>
						content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
					extensions: ["astro", "html"],
				},
			],
		}),
		partytown({
			config: {
				forward: ["dataLayer.push"]
			},
		}),
		clarity({
			enabled: true,
			projectId: "sevjrf40fc",
		})
	],
	prefetch: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"]
		},
	}
});