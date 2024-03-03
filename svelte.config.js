import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(
			{
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: false,
			}
		),
		paths: {
			base: process.argv.includes('dev') ? '/imohitr.github.io' : process.env.BASE_PATH
		}
	},
};
export default config;