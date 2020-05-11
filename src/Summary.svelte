<script>
  import EmptySection from './components/EmptySection.svelte';
  import Content from './components/Content.svelte';
  //import Card from './components/Card.svelte';
  //import EmbeddedMap from './components/EmbeddedMap.svelte';

  const headerSize = 4;
  const summaryConfig = {
    contentClass: "has-text-grey is-text-6",
    headerSize: "6"
  };
  export let info;
</script>

<EmptySection title="Skills">
  <div class="columns">
    <div class="column is-one-third">
      <Content {headerSize} header="Summary" icon="fa fa-list-alt">
        <Content {...summaryConfig} url="#employment-details-6" header="Zilingo">
          Scala, Play Framework, PostgreSQL, Kafka, Webhooks, MongoDB, FoundationJS, Bulma, JavaScript, HTML, REST,
          SOAP, XML
        </Content>
        <Content {...summaryConfig} url="#employment-details-5" header="Oracle">
          Java, ADF, Oracle/PLSQL, SOAP Web services, UTPLSQL, OAF, XML
        </Content>
        <Content {...summaryConfig} url="#employment-details-3" header="Infosys">
          Documentum, Java, C#, .Net, Oracle, XML
        </Content>
      </Content>
    </div>

    <div class="column is-one-third">
      <Content {headerSize} header="Experience" icon="fa fa-database">
        <table class="table experience is-fullwidth">
        {#each info.experience as experience}
        <tr><td>{experience.item}</td><td class="has-text-right">{experience.duration}</td></tr>
        {/each}
        </table>
      </Content>
    </div>

    <div class="column is-one-third">
      <Content {headerSize} header="What I love" icon="fas fa-hand-holding-heart" contentClass="has-text-black tags">
        {#each info.preferred as preferred}
        <span class="tag is-info">{preferred}</span>
        {/each}
      </Content>
    </div>
  </div>
</EmptySection>