<script type="ts">
  import { browser, dev } from '$app/env';
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
  import type { Info } from 'src/hooks';
  import WideSection from './components/WideSection.svelte';
  import Content from './components/Content.svelte';
  const headerSize = 5;
  export let info: Info;
</script>

<WideSection icon="icon-cogs-fa" title="Trainings/Courses" startDelay={3300}>
  <div class="content">
    <Content {headerSize} header="Zilingo - School for Gifted Youngsters (Apr-Dec 2019)">
      Attended a leadership development program spanning 9 months, with 9 full-day sessions and several personally
      guided coaching/mentorship sessions with
      <a href="https://in.linkedin.com/in/sriram-kalyanaraman-98904637" target="_blank">Sriram Kalyanaraman</a> and
      <a href="https://www.aberkyn.com/en/about/our-people/139/tomas-gustafsson" target="_blank">Tomas Gustafsson</a>.
    </Content>
    <Content {headerSize} header="Coursera courses" contentClass="sk-content">
      <ul>
        {#each info.courses.coursera as course}
        <li>
          <a href="https://www.coursera.org/account/accomplishments/certificate/{course.certificateId}" target="_blank">
            <strong>{course.name}</strong>
          </a> - {course.university}
        </li>
        {/each}
      </ul>
    </Content>

  </div>

</WideSection>