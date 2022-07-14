<script type="ts">
  import { browser, dev } from '$app/env';
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
  import Content from './components/Content.svelte';
  import WideSection from './components/WideSection.svelte';
</script>

<WideSection  startDelay={3300} icon="icon-graduation-cap-fa" title="Education">
  <Content header="Jaypee University of Information Technology, Waknaghat, IN">
    Bachelor of Technology, Computer Science Engineering | July 2005 - May 2009
  </Content>
</WideSection>