<script>
  import Content from './Content.svelte';
  export let start;
  export let end;
  export let company;
  export let position;
  export let url;
  export let chronology;
  export let contentClass = "content";
</script>

<div class="container">
  <Content header="{position}" headerClass="content eh-header">
    {#if url}
    <a name="employment-details-{chronology}" href="{url}" target="_blank">{company}</a>
    {:else}
    {company}
    {/if}
    | {start} &dash; {end}
  </Content>
  <div class="{contentClass}">
    <slot></slot>
  </div>
</div>