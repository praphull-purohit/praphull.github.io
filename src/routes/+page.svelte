<script lang="ts">
    /** @type {import('./$types').PageData */
    export let data;
    export let { info } = data;

    import { browser, dev } from "$app/environment";
    export const hydrate = dev;
    export const router = browser;

    import NavBar from "$lib/static/NavBar.svelte";
    import Intro from "$lib/static/Intro.svelte";
    import Summary from "$lib/static/Summary.svelte";
    import Employment from "$lib/static/Employment.svelte";
    import Projects from "$lib/static/Projects.svelte";
    import Skills from "$lib/static/Skills.svelte";
    import Education from "$lib/static/Education.svelte";
    import Footer from "$lib/static/Footer.svelte";
    import AboutMe from "$lib/static/AboutMe.svelte";
</script>

<NavBar {info} />
<div class="section">
    <div class="columns">
        <div class="column is-11-desktop is-full-tablet is-full-mobile">
            <div class="columns">
                <div class="column is-3-desktop is-3-tablet is-full-mobile">
                    <Intro />
                </div>
                <div class="column is-9-desktop is-9-tablet is-full-mobile">
                    <AboutMe {info} />
                </div>
            </div>
            <div class="columns">
                <div class="column is-12-desktop is-full-tablet is-full-mobile">
                    <Summary {info} />
                    <Employment />
                    <Projects />
                    <Skills {info} />
                    <Education />
                </div>
            </div>
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
    <div class="columns">
        <div class="column is-full">
            <Footer {info} />
        </div>
    </div>
</div>
