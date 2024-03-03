import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(
			{
				pages: 'build',
				assets: 'build',
				fallback: undefined,
				precompress: false,
				strict: false,
			}
		),
	},
};
export default config;