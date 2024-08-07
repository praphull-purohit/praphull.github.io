import adapter from "@sveltejs/adapter-netlify";
import { sveltePreprocess } from "svelte-preprocess";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
      preserve: ['ld+json'],
    }),
  ],

  paths: {
    base: dev ? '' : '/praphull.com',
  },

  kit: {
    adapter: adapter()
  },
};

export default config;
