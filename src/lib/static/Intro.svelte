<script lang="ts">
    import Content from '../components/Content.svelte';

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
  <style>
    img {
      border-radius: 1.5rem;
    }
  </style>
  
  {#if show}
  <div class="container">
    <div class="has-text-centered">
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column is-10">
        <figure class="image is-1by1" transition:fade|global="{{delay: 150, duration: 300}}">
          <img src="../images/pp.jpg" alt="Praphull Purohit" title="Praphull Purohit">
        </figure>
        </div>
        <div class="column is-10"></div>
      </div>
      <div class="" transition:fade|global="{{delay: 150, duration: 300}}">
        <Content header="Praphull Purohit &#x1F1F8;&#x1F1EA; &#x1F1EE;&#x1F1F3;" headerSize={4}>
          Staff Software Engineer at Truecaller<br />
          Polyglot Developer - Stockholm, Sverige.
        </Content>
      </div>
    </div>
  </div>
  {/if}
