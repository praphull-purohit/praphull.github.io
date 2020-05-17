<script>
  import EmptySection from './EmptySection.svelte';

  export let icon;
  export let title;

  export let startDelay;
  export let duration = 300;

  let show = false;
  import { slide } from 'svelte/transition';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  onMount(() => {
   show = true;
  });
</script>
{#if show}
<EmptySection>
  <div class="columns" transition:fade="{{delay: startDelay, duration: duration}}">
    <div class="column is-one-third is-size-4">
      <i class="icon-themed {icon}"></i> {title}
    </div>
    <div class="column is-two-thirds">
      <slot></slot>
    </div>
  </div>
</EmptySection>
{/if}