<script lang="ts">
  import type { Info } from '../types';
  export let info: Info;

  let show = true;
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  onMount(() => {
   show = false;
   window.setTimeout(function() {
     show = true;
   }, 50)
  });
  export const prerender = true;
</script>
<style>
.footer-links {
  margin-right: 0.6rem;
}
</style>
{#if show}
<footer class="footer">
  <div class="container has-text-centered" transition:fade|global="{{delay: 900, duration: 300}}">
    <p>
      {#each info.contactDetails as contact}
      <span class="footer-links has-text-info">
        {#if contact.url}
        <a class="has-text-info" href="{contact.url}" target="_blank" rel="noreferrer" title="{contact.name}">
          <i class="icon icon-themed fa-lg {contact.icon}" title="{contact.name}"></i> {contact.id}
        </a>
        {:else}
        <i class="icon icon-themed fa-lg {contact.icon}" title="{contact.name}"></i> {contact.id}
        {/if}
      </span>
      {/each}
    </p>
    <br>
    <p>
      Hosted on <strong><a href="https://netlify.com" target="_blank" rel="noreferrer">Netlify</a></strong>.
      Built using <a href="https://bulma.io" target="_blank" rel="noreferrer">Bulma</a> & <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a>/
      <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>. Icons from
      <a href="https://icomoon.io/" target="_blank" rel="noreferrer">IcoMoon</a>. Page layout inspired from toptal.<br>
      The <a href="https://to.praphull.com/github" target="_blank" rel="noreferrer">source code</a> is licensed under
      <a href="https://opensource.org/licenses/Apache-2.0" target="_blank" rel="noreferrer">Apache License, Version 2.0</a> and everyone is free to
      modify & use it for their pages.<br>
      Content copyright &copy; Praphull Purohit.
    </p>
    <br>
    <p>
      <a href="https://projecteuler.net" target="_blank" rel="noreferrer" title="Project Euler Status">
        <img src="https://projecteuler.net/profile/praphull.png" alt="Project Euler Status">
      </a>
    </p>
  </div>
</footer>
{/if}