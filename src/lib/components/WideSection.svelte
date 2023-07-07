<script lang="ts">
  import EmptySection from './EmptySection.svelte';

  export let icon: string;
  export let title: string;

  export let startDelay: number;
  export let duration: number = 300;

  let show = true;
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  onMount(() => {
   show = false;
   window.setTimeout(function() {
     show = true;
   }, 50)
  });
  export const prerender = true;
</script>
{#if show}
<EmptySection>
  <div class="columns" transition:fade|global="{{delay: startDelay, duration: duration}}">
    <div class="column is-one-third is-size-4">
      <i class="icon-themed {icon}"></i> {title}
    </div>
    <div class="column is-two-thirds">
      <slot></slot>
    </div>
  </div>
</EmptySection>
{/if}