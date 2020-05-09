<script>
	export let header;
	export let url;
	export let icon;
	export let contentClass = "has-text-grey";
	export let headerSize = "5";
</script>

<div class="content">
  {#if header}
    <div class="is-size-{headerSize} has-text-dark">
      {#if icon}<i class="icon icon-themed {icon}"></i>{/if}
      {#if url}
        {#if url.startsWith('#')}
          <a class="is-link" href="{url}">{header}</a>
        {:else}
          <a class="is-link" href="{url}" target="_blank">{header}</a>
        {/if}
      {:else}
        {header}
      {/if}
    </div>
  {/if}
  <div class="{contentClass}">
    <slot></slot>
  </div>
</div>