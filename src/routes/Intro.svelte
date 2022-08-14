<script lang="ts">
    import { browser, dev } from '$app/env';
    export const hydrate = false;
    export const router = browser;
    export const prerender = true;
    import type { Info } from 'src/hooks';

    import EmptySection from './components/EmptySection.svelte';
    import Content from './components/Content.svelte';
    import Tip from './components/Tip.svelte';
    export let info: Info;
  
    let show = false;
    //import { slide } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    onMount(() => {
     show = true;
    });
  
    const dd = function(d1: Date, d2: Date) {
     const rev = d1.getTime() > d2.getTime();
     const mn = rev?d2:d1, mx = rev?d1:d2;
     const y = (mx.getFullYear() - mn.getFullYear())*12;
     const df = y - mn.getMonth() + mx.getMonth();
     return df > 0 ? df : 0;
    };
  
    let months = dd(new Date(), new Date("01 Jul 2020"));
    let years = (dd(new Date(), new Date("27 Jul 2009")) / 12.0).toFixed(1);
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
      <div class="column is-one-third has-text-centered is-hidden-touch">
        <figure class="image is-1by1" transition:fade="{{delay: 150, duration: 300}}">
          <img src="../images/pp.jpg" alt="Praphull Purohit">
        </figure>
      </div>
      <div class="column is-full-mobile is-two-thirds-desktop" transition:fade="{{delay: 150, duration: 300}}">
        <Content header="Praphull Purohit" headerSize={4}>Polyglot Developer - Bengaluru, India.</Content>
        <div class="content">
          <div class="content" transition:fade="{{delay: 150, duration: 300}}">I am a polyglot developer with {years} years of professional software development experience
            in building <strong>reactive microservices</strong>, <strong>enterprise products</strong> and legacy
            applications across a range of programming languages.
          </div>
  
          <div class="content" transition:fade="{{delay: 300, duration: 300}}">
            For past {months} months, I've been working with <strong>Truecaller</strong>, owning the backend microservices
            (Scala, Java, Cassandra) for its developer platform and SDKs (Android, iOS & mobile web).
            Prior to Truecaller, I worked for 4 years on developing reactive microservices for
            <Tip tip="Valued at ~$970 million during series D in Feb 2019, totalling VC infusion to $304 million">almost billion dollar</Tip>
            fashion eCommerce startup <strong>Zilingo</strong> using <strong>
              <Tip tip="A functional & object oriented programming language running on JVM">Scala</Tip>,
              <Tip tip="A reactive, concurrent, high performance programming toolkit for scale">Akka</Tip>,
              <Tip tip="A MVC framework built on top of Akka">Play Framework</Tip> and
              <Tip tip="A high-throughput stream processing platform">Kafka</Tip></strong>.
          </div>
  
          <div class="content" transition:fade="{{delay: 450, duration: 300}}">
            I have experience developing software for <b>Communications</b>, <b>e-Commerce</b>, <b>Logistics</b>,<b>Supply
            Chain</b>, <b>Aircraft maintenance</b> and <b>Energy</b> industries, and I'm open to exploring new business domains.
          </div>
        </div>
  
        <div class="content tag-container" transition:fade="{{delay: 600, duration: 300}}">
          {#each info.tags as tag}
          {#if tag.url !== undefined}
          <a href="{tag.url}" target="_blank" title="{tag.title}"><span class="tag is-info is-light">{tag.name}</span></a>
          {:else}
          <a href="https://twitter.com/hashtag/{tag.hash}" target="_blank" title="{tag.title}"><span class="tag is-info is-light">{tag.name}</span></a>
          {/if}
          {/each}
        </div>
      </div>
    </div>
  </EmptySection>
  {/if}