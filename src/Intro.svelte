<script>
  import EmptySection from './components/EmptySection.svelte';
  import Content from './components/Content.svelte';
  export let info;
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
<EmptySection>
  <div class="columns">
    <div class="column is-one-third is-mobile">
      <figure class="image is-1by1">
        <img src="/public/images/pp.jpg" alt="Praphull Purohit">
      </figure>
    </div>
    <div class="column is-two-thirds">
      <Content header="Praphull Purohit" headerSize="4">Polyglot Developer - Bangalore, India.</Content>

      <div class="content has-text-justified">
        <div class="content">I am a polyglot developer with 11 years of professional software development experience
          across reactive
          microservices, enterprise products and legacy applications across a range of programming language.
        </div>

        <div class="content">I have experience developing software for e-Commerce, Logistics, Supply Chain, Aircraft
          maintenance and
          Energy industries, and I'm open to exploring new business domains.
        </div>

        <div class="content">For past 4 years, I have been working primarily on developing reactive microservices for
          <a href="https://zilingo.com" target="_blank">Zilingo</a> using Scala, Akka and Play Framework.
        </div>
      </div>

      <div class="content tag-container">
        {#each info.tags as tag}
        <span class="tag is-info is-light">{tag}</span>
        {/each}
      </div>
    </div>
  </div>
</EmptySection>