<script>
  import SectionHeader from './SectionHeader.svelte';
  export let start;
  export let end;
  export let company;
  export let position;
  export let url;
</script>

<div class="container">
  <SectionHeader header="{position}">
    {company}
    <a href="{url}" target="_blank">
        <span class="icon has-text-info is-small">
          <i class="fa fa-link"></i>
        </span>
    </a>
    | {start} &dash; {end}
  </SectionHeader>
  <div class="content">
    <slot></slot>
  </div>
</div>