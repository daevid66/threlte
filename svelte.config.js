import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		target: '#svelte',

		package: {
			emitTypes: true,
			exports: (file) => file === 'index.ts'
		},

		vite: {
			resolve: {
				alias: {
					threlte: resolve('src/lib')
				}
			},
			optimizeDeps: {
				exclude: ['three']
			},
			ssr: {
				noExternal: ['three']
			}
		}
	}
}

export default config