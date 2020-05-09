<script>
  import NavBar from './NavBar.svelte';
  import Intro from './Intro.svelte';
  import Summary from './Summary.svelte';
  import Employment from './Employment.svelte';
  import Projects from './Projects.svelte';
  /*import Skills from './Skills.svelte';*/
  import Education from './Education.svelte';
  import Footer from './Footer.svelte';
  export let info;
</script>

<NavBar {info}></NavBar>
<Intro {info}></Intro>
<Summary {info}></Summary>
<Employment></Employment>
<Projects></Projects>
<!--<Skills/>-->
<Education></Education>
<Footer {info}></Footer>
