<script lang="ts">
  import "../app.scss";

  //import NavBar from "../lib/static/NavBar.svelte";
  //import Footer from '../lib/static/Footer.svelte';

  //import type { Info } from "$lib/types";
  //export let info: Info;
  export const prerender = true;
</script>

<slot />
