<script type="ts">
  import Content from './Content.svelte';
  export let start: string;
  export let end: string | undefined = undefined;
  export let company: string;
  export let position: string;
  export let url: string | undefined = undefined;
  export let chronology: number;
  export let contentClass = "content";
</script>

<div class="container">
  <Content header="{position}" headerClass="content eh-header" anchor="employment-details-{chronology}">
    {#if url}
    <a href="{url}" target="_blank">{company}</a>
    {:else}
    {company}
    {/if}
    | {start} &dash; {end}
  </Content>
  <div class="{contentClass}">
    <slot></slot>
  </div>
</div>