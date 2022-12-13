<script lang="ts">
  import Content from "./Content.svelte";
  export let start: string;
  export let end: string | undefined = undefined;
  export let company: string;
  export let position: string;
  export let url: string | undefined = undefined;
  export let chronology: number;
  export let contentClass = "content";
  export let team: string | undefined = undefined;
  export let productURL: string | undefined = undefined;
</script>

<div class="container">
  <Content
    header={position}
    headerClass="content eh-header"
    anchor="employment-details-{chronology}"
  >
    {#if url}
      <a href={url} target="_blank" rel="noreferrer">{company}</a>
    {:else}
      {company}
    {/if}
    {#if team}
      - {#if productURL}
        <a href={productURL} target="_blank" rel="noreferrer">{team}</a>
      {:else}
        {team}
      {/if}
    {/if}
    | {start} &dash; {end}
  </Content>
  <div class={contentClass}>
    <slot />
  </div>
</div>
