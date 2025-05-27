module.exports = {
	plugins: {
		'tailwindcss/nesting': 'postcss-nesting',
		tailwindcss: {},
		autoprefixer: {},
		'postcss-import': {},
		// '@fullhuman/postcss-purgecss': {
		// 	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
		// 	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		// },
	},
};
