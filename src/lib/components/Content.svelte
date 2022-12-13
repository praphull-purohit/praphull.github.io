<script lang="ts">
	export let header: string;
	export let url: string | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let contentClass: string = "has-text-grey";
	export let headerSize: number | undefined = 5;
	export let headerClass: string | undefined= "content";
  export let anchor: string | undefined = undefined;
</script>

<div class="{headerClass}">
  {#if header}
    <div class="is-size-{headerSize} has-text-dark has-text-weight-medium">
      {#if icon}<i class="icon icon-themed {icon}"></i>{/if}
      {#if url}
        {#if url.startsWith('#')}
          {#if anchor}
            <a class="is-link" href="{url}" name="{anchor}">{header}</a>
          {:else}
            <a class="is-link" href="{url}">{header}</a>
          {/if}
        {:else}
          {#if anchor}
            <a class="is-link" href="{url}" target="_blank" rel="noreferrer" name="{anchor}">{header}</a>
          {:else}
            <a class="is-link" href="{url}" target="_blank" rel="noreferrer">{header}</a>
          {/if}
        {/if}
      {:else}
        {#if anchor}
          <a class="is-link" name="{anchor}">{header}</a>
        {:else}
          {header}
        {/if}
      {/if}
    </div>
  {/if}
  <div class="{contentClass}">
    <slot></slot>
  </div>
</div>