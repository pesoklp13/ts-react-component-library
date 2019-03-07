import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default { // tslint:disable-line no-default-export
    input: 'src/index.ts',
    output: [
        { file: pkg.main, name: 'reactlib', format: 'umd', sourcemap: true },
        { file: pkg.module, format: 'es', sourcemap: true }
    ],
    external: [],
    watch: {
        include: 'src/**'
    },
    plugins: [
        // Allow json resolution
        json(),

        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        resolve(),

        // Compile TypeScript files
        typescript({
            useTsconfigDeclarationDir: true,
            rollupCommonJSResolveHack: true,
            clean: true
        }),
        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        commonjs(),

        // Resolve source maps to the original source
        sourceMaps()
    ]
};
