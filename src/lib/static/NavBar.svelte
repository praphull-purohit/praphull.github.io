<script lang="ts">
  import type { Info } from "../types";

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
              rel="noreferrer"
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
