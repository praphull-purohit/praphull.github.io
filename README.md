# Source for praphull.github.io

This site is built using [Svelte](https://svelte.dev)/[SvelteKit](https://kit.svelte.dev) and [Bulma](https://bulma.io) . It is hosted at [https://praphull.com](https://praphull.com)

## Modifying

You can use clone this repo and modify the code to build your own website.

Install the dependencies
*Note that you will need to have [Node.js](https://nodejs.org) installed.*

```bash
git clone git@github.com:praphull/praphull.github.io.git
cd praphull.github.io 
yarn install
```

Test locally:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Hosting
The app is hosted using [Netlify](https://netlify.com), by using default configurations.