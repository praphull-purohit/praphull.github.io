<script>
	export let header;
	export let url;
	export let icon;
	export let contentClass = "has-text-grey";
	export let headerSize = "5";
	export let headerClass = "content";
</script>

<div class="{headerClass}">
  {#if header}
    <div class="is-size-{headerSize} has-text-dark has-text-weight-medium">
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