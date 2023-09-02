<script lang="ts">
  import EmptySection from "./EmptySection.svelte";

  export let icon: string;
  export let title: string;

  export let startDelay: number;
  export let duration: number = 300;
  export let titleOnTop: boolean = true;

  let show = true;
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  onMount(() => {
    show = false;
    window.setTimeout(function () {
      show = true;
    }, 50);
  });
  export const prerender = true;
  const getCss = (clazz: string) => (titleOnTop ? "is-12" : clazz);
</script>

{#if show}
  <EmptySection>
    <div
      class="columns is-multiline"
      transition:fade|global={{ delay: startDelay, duration: duration }}
    >
      <div class="column {getCss('is-one-third')} is-size-4">
        <i class="icon-themed {icon}" />
        {title}
      </div>
      <div class="column {getCss('is-two-thirds')}">
        <slot />
      </div>
    </div>
  </EmptySection>
{/if}
