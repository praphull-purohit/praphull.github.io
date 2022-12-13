<script lang="ts">
    import { browser, dev } from "$app/env";
    export const hydrate = dev;
    export const router = browser;
    export const prerender = true;
    import type { Info } from "$lib/types";

    import NavBar from "$lib/static/NavBar.svelte";
    import Intro from "$lib/static/Intro.svelte";
    import Summary from "$lib/static/Summary.svelte";
    import Employment from "$lib/static/Employment.svelte";
    import Projects from "$lib/static/Projects.svelte";
    import Skills from "$lib/static/Skills.svelte";
    import Education from "$lib/static/Education.svelte";
    import Footer from "$lib/static/Footer.svelte";

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
                rel="noreferrer"
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

<Summary {info} />
<Employment />
<Projects />
<Skills {info} />
<Education />
<Footer {info} />
