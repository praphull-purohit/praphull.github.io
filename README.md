# Source for praphull.github.io

This site is buit using [Svelte](https://svelte.dev) and [Bulma](https://bulma.io) . It is hosted at https://praphull.com

## Modifying

You can use clone this repo and modify the code to build your own GH pages.

Install the dependencies
*Note that you will need to have [Node.js](https://nodejs.org) installed.*

```bash
git clone git@github.com:praphull/praphull.github.io.git
cd praphull.github.io 
npm install
```

Build the JS and CSS to assets directory

```bash
npm run build
```

To develop/test locally, create symlinks to _index.html_, _assets_ directory and _public_ directory in your public directory

```bash
cd public
ln -s ../index.html index.html
ln -s ../public public
ln -s ../assets assets
```
