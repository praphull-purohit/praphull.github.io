<script>
  import NavBar from './NavBar.svelte';
  import Intro from './Intro.svelte';
  import Summary from './Summary.svelte';
  import Employment from './Employment.svelte';
  import Projects from './Projects.svelte';
  import Skills from './Skills.svelte';
  import Education from './Education.svelte';
  import Footer from './Footer.svelte';
  export let info;
</script>

<NavBar {info}></NavBar>
<div class="columns">
  <div class="column is-11-desktop is-full-tablet is-full-mobile">
    <Intro {info}></Intro>
  </div>
  <div class="column is-1-desktop is-full-tablet is-full-mobile">
    {#each info.certifications.lightbend as certification}
    <a href="https://www.youracclaim.com/badges/{certification.certificateId}/embedded" target="_blank" class="is-inline-flex">
      <figure class="image is-96x96">
        <img src="/public/images/certifications/lightbend/{certification.icon}" alt="{certification.name}" title="{certification.name}">
      </figure>
    </a>
    {/each}
  </div>
</div>
<Summary {info}></Summary>
<Employment></Employment>
<Projects></Projects>
<Skills {info}></Skills>
<Education></Education>
<Footer {info}></Footer>