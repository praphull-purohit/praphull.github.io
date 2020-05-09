<script>
  import SectionHeader from './components/SectionHeader.svelte';
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
<section class="section condensed-section">
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <figure class="image">
          <img src="/public/images/pp.jpg" alt="Praphull Purohit">
        </figure>
      </div>
      <div class="column is-two-thirds">
        <SectionHeader header="Praphull Purohit" headerSize="4">Polyglot Developer - Bangalore, India.</SectionHeader>

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
          <span class="tag is-info is-light">Scala</span>
          <span class="tag is-info is-light">Play Framework</span>
          <span class="tag is-info is-light">Akka</span>
          <span class="tag is-info is-light">Java</span>
          <span class="tag is-info is-light">PostgreSQL</span>
          <span class="tag is-info is-light">Oracle</span>
          <span class="tag is-info is-light">PLSQL</span>
          <span class="tag is-info is-light">C#</span>
          <span class="tag is-info is-light">Javascript</span>
          <span class="tag is-info is-light">Android</span>
          <span class="tag is-info is-light">MongoDB</span>
          <span class="tag is-info is-light">Amazon Web Services</span>
          <span class="tag is-info is-light">Git</span>
        </div>
      </div>
    </div>
  </div>
</section>