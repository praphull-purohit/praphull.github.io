import App from './App.svelte';
require('./scss/theme.scss');
const app = new App({
	target: document.body,
	props: {
		name: 'Praphull'
	}
});

window.app = app;

export default app;
