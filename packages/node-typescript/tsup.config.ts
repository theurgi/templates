import { defineConfig } from 'tsup'

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['src/main.ts'],
	format: ['esm'],
	outDir: 'dist',
	splitting: false,
})
