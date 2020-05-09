import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
//import sveltePreprocess from 'svelte-preprocess'
import { scss } from 'svelte-preprocess'
//import scss from 'rollup-plugin-scss';
//import { sass } from 'svelte-preprocess-sass';

const production = !process.env.ROLLUP_WATCH || process.env.BUILD == 'production';

export default {
	input: 'src/app.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'assets/js/app.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,

			/*preprocess: sveltePreprocess({
              transformers: {
                sass: {
                  includePaths: [
                    'src/scss/theme.scss'
                  ]
                }
              }
            }),*/

            preprocess: [
              scss({
//                includePaths: [
//                  'src/sass/theme.sass'
//                ]
              })
            ],

            /*preprocess: {
              style: sass(),
            },*/

			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('assets/css/app.css');
			}
		}),

		/*scss({
          // Choose *one* of these possible "output:..." options
          // Default behaviour is to write all styles to the bundle destination where .js is replaced by .css
          output: true,

          // Filename to write all styles to
          output: 'assets/css/bundle.css',

          // Disable any style output or callbacks, import as string
          output: false,

          // Determine if node process should be terminated on error (default: false)
          failOnError: true,

          // Prefix global scss. Useful for variables and mixins.
          //prefix: `@import "./fonts.scss";`,

          // Use a node-sass compatible compiler (default: node-sass)
          //sass: require('sass'),

          // Add file/folder to be monitored in watch mode so that changes to these files will trigger rebuilds.
          // Do not choose a directory where rollup output or dest is pointed to as this will cause an infinite loop
          watch: 'src/scss/theme.scss',
        }),*/

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
