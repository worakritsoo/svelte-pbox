const preprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-static');
const node = require('@sveltejs/adapter-node');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter:node({out:'www'}),
		// adapter: adapter({
		// 	pages:'www'
		// }),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
