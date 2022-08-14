<script lang="ts">
    import { browser, dev } from '$app/env';
    export const hydrate = dev;
    export const router = browser;
    export const prerender = true;
    import type { Info } from "src/hooks";

    import NavBar from "./NavBar.svelte";
    import Intro from "./Intro.svelte";
    import Summary from './Summary.svelte';
    import Employment from './Employment.svelte';
    import Projects from './Projects.svelte';
    import Skills from './Skills.svelte';
    import Education from './Education.svelte';
    import Footer from './Footer.svelte';
  
    export let info: Info;
</script>

<NavBar {info} />
<div class="columns">
    <div class="column is-11-desktop is-full-tablet is-full-mobile">
        <Intro {info} />
    </div>
    <div class="column is-1-desktop is-full-tablet is-full-mobile">
        {#each info.certifications.lightbend as certification}
            <a
                href="https://www.youracclaim.com/badges/{certification.certificateId}/embedded"
                target="_blank"
                class="is-inline-flex"
            >
                <figure class="image is-96x96">
                    <img
                        src="../images/certifications/lightbend/{certification.icon}"
                        alt={certification.name}
                        title={certification.name}
                        width={certification.iconWidth}
                        height={certification.iconHeight}
                    />
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