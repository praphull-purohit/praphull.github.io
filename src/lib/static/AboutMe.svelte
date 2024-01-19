<script lang="ts">
    import type { Info } from '../types';

    import Tip from '../components/Tip.svelte';
    import EmptySection from "../components/EmptySection.svelte";

    export let info: Info;
  
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
  </style>
  
  {#if show}
  <EmptySection title="About Me">
  <div class="content">
    <div class="content" transition:fade|global="{{delay: 150, duration: 300}}">I am a
      <Tip tip="Primarily backend, but often I develop for web, android and anything else I can try my hands on">polyglot developer</Tip>
      with {years} years of professional software development experience
      in building <strong>reactive microservices</strong>, <strong>enterprise products</strong> and legacy
      applications across a range of programming languages.
    </div>

    <div class="content" transition:fade|global="{{delay: 300, duration: 300}}">
      For past {months} months, I've been working with <strong>Truecaller</strong> across different teams
      in Stockholm, Sweden and Bengaluru, India. I am currently working in the Truecaller HQ at Stockholm,
      as a backend software engineer in Plaform/Cloud Infrastructure team, responsible for providing core
      tooling, services and infrastructure for the Truecaller developers in India, Sweden, Israel & Poland.
      Before my transfer to this role in Stockholm, I owned the backend microservices
      (<strong><Tip tip="A functional & object oriented programming language running on JVM">Scala</Tip>,
      <Tip tip="A distributed, wide-column store, NoSQL DBMS designed to handle large amounts of data, providing high availability with no single point of failure.">Cassandra</Tip>,
      <Tip tip="A reactive, concurrent, high performance programming toolkit for scale">Akka</Tip>,
      <Tip tip="A MVC framework built on top of Akka">Play Framework</Tip>,
      <Tip tip="A container orchestration system for automating software deployment, scaling, and management.">Kubernetes</Tip>
      and Java</strong>) for Truecaller's developer platform and SDKs (Android, iOS, mobile web & Shopify).
    </div>

    <div class="content" transition:fade|global="{{delay: 300, duration: 300}}">
      Prior to Truecaller, I worked for 4 years on developing reactive microservices for fashion e-commerce startup
      <strong>Zilingo</strong> using <strong>Scala, Akka, Play Framework and
      <Tip tip="A high-throughput stream processing platform">Kafka</Tip></strong>,
      scaling its logistics tech, from seed-fund round to
      <Tip tip="Valued at ~$970 million during series D in Feb 2019, totalling VC infusion to $304 million">almost billion dollar valuation</Tip>.
    </div>

    <div class="content" transition:fade|global="{{delay: 450, duration: 300}}">
      I have experience developing software for <b>Communications</b>, <b>e-Commerce</b>, <b>Logistics</b>, <b>Supply
      Chain</b>, <b>Aircraft maintenance</b> and <b>Energy</b> industries, and I'm open to exploring new business domains.
    </div>
  </div>

  <div class="content tag-container" transition:fade|global="{{delay: 600, duration: 300}}">
    {#each info.tags as tag}
    {#if tag.url !== undefined}
    <a href="{tag.url}" target="_blank" rel="noreferrer" title="{tag.title}"><span class="tag is-info is-light">{tag.name}</span></a>
    {:else}
    <a href="https://twitter.com/hashtag/{tag.hash}" target="_blank" rel="noreferrer" title="{tag.title}"><span class="tag is-info is-light">{tag.name}</span></a>
    {/if}
    {/each}
  </div>
  </EmptySection>
  {/if}