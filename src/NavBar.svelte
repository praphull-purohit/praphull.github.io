<script>
  export let info;
</script>
<nav class="navbar has-background-info is-hidden-touch" role="navigation" aria-label="main navigation">
  <div class="navbar-menu">
    <div class="navbar-end buttons">
      {#each info.contactDetails as contact}
      {#if contact.url}
      <div class="navbar-item">
        <a class="button" href="{contact.url}" target="_blank" title="{contact.name}">
          <span class="icon"><i class="icon-themed {contact.icon} fa-2x"></i></span>
          <span>{contact.name}</span>
        </a>
      </div>
      {/if}
      {/each}
    </div>
  </div>
</nav>