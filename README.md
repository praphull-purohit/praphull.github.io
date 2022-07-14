# Source for praphull.github.io

This site is built using [Svelte](https://svelte.dev) and [Bulma](https://bulma.io) . It is hosted at https://praphull.com

## Modifying

You can use clone this repo and modify the code to build your own GH pages.

Install the dependencies
*Note that you will need to have [Node.js](https://nodejs.org) installed.*

```bash
git clone git@github.com:praphull/praphull.github.io.git
cd praphull.github.io 
yarn install
```

Build the JS and CSS to assets directory

```bash
npm run dev
```

To develop/test locally, create symlinks to _index.html_, _assets_ directory and _public_ directory in your public directory

```bash
cd public
ln -s ../index.html index.html
ln -s ../public public
ln -s ../assets assets
npm run dev
```

# Docs from `create-svelte`

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

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

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
