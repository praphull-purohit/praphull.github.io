import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],

  paths: {
    base: dev ? '' : '/praphull',
  },

  kit: {
    adapter: adapter()
  },
};

export default config;