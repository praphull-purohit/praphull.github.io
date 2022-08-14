<script lang="ts">
  import { browser, dev } from '$app/env';
  export const hydrate = false;
  export const router = browser;
  export const prerender = true;
  import type { Info } from "src/hooks";

  export let info: Info;
</script>

<nav
  class="navbar has-background-info is-hidden-touch"
  aria-label="main navigation"
>
  <div class="navbar-menu">
    <div class="navbar-end buttons">
      {#each info.contactDetails as contact}
        {#if contact.url}
          <div class="navbar-item">
            <a
              class="button"
              href={contact.url}
              target="_blank"
              title={contact.name}
            >
              <span class="icon"><i class="icon-themed {contact.icon}" /></span>
              <span>{contact.name}</span>
            </a>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</nav>
