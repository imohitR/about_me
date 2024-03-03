import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.env.NODE_ENV === 'development';

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
			base: dev ? '' : '/imohitr.github.io'
		}
	},
};
export default config;