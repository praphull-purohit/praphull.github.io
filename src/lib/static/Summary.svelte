<script lang="ts">
  
  import type { Info } from '../types';
  export let info: Info;

  import EmptySection from '../components/EmptySection.svelte';
  import Content from '../components/Content.svelte';
  
  const headerSize = 4;
  const summaryConfig = {
    contentClass: "has-text-grey is-text-6",
    headerSize: 6
  };

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
<EmptySection title="Skills">
  <div class="columns" transition:fade|global="{{delay: 150, duration: 300}}">
    <div class="column is-one-third" transition:fade|global="{{delay: 150, duration: 300}}">
      <Content {headerSize} header="Summary" icon="icon-list-ul-fa">
        <Content {...summaryConfig} url="#employment-details-10" header="Truecaller">
          Scala, Play Framework, Go, gRPC, Protobuf, Cassandra, Java, Kafka, MariaDB, Shopify
        </Content>
        <Content {...summaryConfig} url="#employment-details-6" header="Zilingo">
          Scala, Play Framework, PostgreSQL, Kafka, Webhooks, MongoDB, FoundationJS, Bulma,
          JavaScript, HTML, REST, SOAP, XML
        </Content>
        <Content {...summaryConfig} url="#employment-details-5" header="Oracle">
          Java, ADF, Oracle/PLSQL, SOAP Web services, UTPLSQL, OAF, XML
        </Content>
        <Content {...summaryConfig} url="#employment-details-3" header="Infosys">
          Documentum, Java, C#, .Net, Oracle, XML
        </Content>
      </Content>
    </div>

    <div class="column is-one-third" transition:fade|global="{{delay: 300, duration: 300}}">
      <Content {headerSize} header="Experience" icon="icon-database-fa">
        <table class="table experience is-fullwidth">
        {#each info.experience as experience}
        <tr><td>{experience.item}</td><td class="has-text-right">{experience.duration}</td></tr>
        {/each}
        </table>
      </Content>
    </div>

    <div class="column is-one-third" transition:fade|global="{{delay: 450, duration: 300}}">
      <Content {headerSize} header="What I love" icon="icon-heart-fa" contentClass="has-text-black tags">
        {#each info.preferred as preferred}
        <span class="tag is-info">{preferred}</span>
        {/each}
      </Content>
    </div>
  </div>
</EmptySection>
{/if}