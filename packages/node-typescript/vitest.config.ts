import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		dir: 'src',
	},
	server: {
		hmr: false,
	},
	build: {
		outDir: 'dist',
	},
})
