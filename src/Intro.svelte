<script>
  import EmptySection from './components/EmptySection.svelte';
  import Content from './components/Content.svelte';
  import Tip from './components/Tip.svelte';
  export let info;

  let show = false;
  import { slide } from 'svelte/transition';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  onMount(() => {
   show = true;
  });
</script>
<style>
  .tag-container {
    margin-bottom: auto;
  }
  .tag.is-info {
    margin-right: 12px;
    margin-bottom: 4px;
  }
  img {
    border-radius: 1.5rem;
  }
</style>

{#if show}
<EmptySection>
  <div class="columns">
    <div class="column is-one-third is-mobile">
      <figure class="image is-1by1" transition:fade="{{delay: 300, duration: 300}}">
        <img src="/public/images/pp.jpg" alt="Praphull Purohit">
      </figure>
    </div>
    <div class="column is-two-thirds" transition:fade="{{delay: 600, duration: 300}}">
      <Content header="Praphull Purohit" headerSize="4">Polyglot Developer - Bangalore, India.</Content>

      <div class="content">
        <div class="content" transition:fade="{{delay: 900, duration: 300}}">I am a polyglot developer with 11 years of professional software development experience
          in building <strong>reactive microservices</strong>, <strong>enterprise products</strong> and legacy
          applications across a range of programming languages.
        </div>

        <div class="content" transition:fade="{{delay: 1200, duration: 300}}">
          For past 4 years, I have been working primarily on developing reactive microservices for
          <Tip tip="Valued at ~$970 million during series D in Feb 2019, totalling VC infusion to $304 million">almost billion dollar</Tip>
          fashion eCommerce startup <strong>Zilingo</strong> using <strong>
            <Tip tip="A functional & object oriented programming language running on JVM">Scala</Tip>,
            <Tip tip="A reactive, concurrent, high performance programming toolkit for scale">Akka</Tip>,
            <Tip tip="A MVC framework built on top of Akka">Play Framework</Tip> and
            <Tip tip="A high-throughput stream processing platform">Kafka</Tip></strong>.
        </div>

        <div class="content" transition:fade="{{delay: 1500, duration: 300}}">
          I have experience developing software for <b>e-Commerce</b>, <b>Logistics</b>,<b>Supply
          Chain</b>, <b>Aircraft maintenance</b> and <b>Energy</b> industries, and I'm open to exploring new business domains.
        </div>
      </div>

      <div class="content tag-container" transition:fade="{{delay: 1800, duration: 300}}">
        {#each info.tags as tag}
        <a href="https://twitter.com/hashtag/{tag.hash}" target="_blank" title="{tag.title}"><span class="tag is-info is-light">{tag.name}</span></a>
        {/each}
      </div>
    </div>
  </div>
</EmptySection>
{/if}