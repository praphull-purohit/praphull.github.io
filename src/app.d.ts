/// <reference types="@sveltejs/kit" />

//import type { Info } from "$lib/types";
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		interface Locals {
	//		info: Info
		}
		// interface Platform {}
		// interface Session {}
		// interface Stuff {}
	}
}