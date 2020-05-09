<script>
  import Content from './Content.svelte';
  export let start;
  export let end;
  export let company;
  export let position;
  export let url;
  export let chronology;
</script>

<div class="container">
  <Content header="{position}">
    {#if url}
    <a name="employment-details-{chronology}" href="{url}" target="_blank">{company}</a>
    {:else}
    {company}
    {/if}
    <!--<a href="{url}" target="_blank">
        <span class="icon has-text-info is-small">
          <i class="fa fa-link"></i>
        </span>
    </a>-->
    | {start} &dash; {end}
  </Content>
  <div class="content">
    <slot></slot>
  </div>
</div>