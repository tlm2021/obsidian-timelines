import nodeResolve from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';
import autoprefixer from 'autoprefixer';
import cssurl from 'postcss-url';
import env from 'postcss-preset-env';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss-modules'
import typescript from 'rollup-plugin-typescript2'

//import alias from '@rollup/plugin-alias'
//const aliases = import ('./aliases')
import path from 'path'

export default {
    input: './src/main.ts',
    
    output: {
        dir: '.',
        sourcemap: 'inline',
        format: 'cjs',
        exports: 'default'
    },
    external: ['obsidian'],
    plugins: [
        nodeResolve({ jsnext: true,
            main: true,
            browser: true }),
        peerDepsExternal(
        ),
        cjs(),
        typescript(),
        postcss({
            ignore: [ /vis-/ ],
            extract: path.resolve('styles.css'),
            modules: true,
            namedExports: true,
            minimize: true,
            nodeResolve: true,
            writeDefinitions: true,
            plugins: [
                cssurl({
                    url: 'inline'
                }),
                env(),
                autoprefixer(),
            ],
        }),
    ]
};