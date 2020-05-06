import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Praphull'
	}
});

window.app = app;

export default app;
