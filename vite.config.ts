import { exec } from 'node:child_process';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export function pushBuild() {
	return {
		name: 'pushBuild',
		closeBundle: async () => {
			exec('dts-bundle-generator --config dts.config.ts', (response, error) => {
				if (error) console.error(error);
				// console.log(response);
				exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
			});
		},
	};
}

export default defineConfig({
	base: './',
	build: {
		// sourcemap: true,
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'Utils',
			formats: ['es', 'cjs'],
			fileName: format => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['uniqid'],
			output: {
				globals: {
					uniqid: 'uniqid',
				},
			},
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [pushBuild()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
			utils: path.resolve(__dirname, '/src/utils'),
		},
	},
});
