import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(
			{
				pages: 'build',
				assets: 'build',
				precompress: false,
				strict: true,
				fallback: '404.html',
			}
		),
		paths: {
			base: process.argv.includes('dev') ? '/imohitr.github.io/' : process.env.BASE_PATH
		}
	},
};
export default config;