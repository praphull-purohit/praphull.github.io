<script>
  import { browser, dev } from '$app/env';
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
  import WideSection from './components/WideSection.svelte';
  import Content from './components/Content.svelte';
  const headerSize = 6;
</script>

<WideSection startDelay={900} icon="icon-laptop-fa" title="Projects/Tooling/Experiments">
  <div class="content">
    <Content {headerSize} header="Sudoku Solver (2020)">
      DFS implementation to solve 9x9
      <b><a href="https://github.com/praphull/sudoku-solver" target="_blank">Sudoku Boards</a></b>(<b>Scala</b>)
    </Content>
    <Content {headerSize} header="Financial Functions Library (2020)">
      <b><a href="https://github.com/praphull/scala-finance" target="_blank">Scala library</a></b> of commonly used
      financial functions (e.g. <b>XIRR, NPV</b>)
    </Content>
    <Content {headerSize} header="Android app & backend (2015-16)">
      Banana Kick - Android application (Java) and backend (Node.js) for booking sport venues <b>(Android,
      Node.js/Express.js, Mocha/Should.js, MySQL, AWS, Twitter Digits, JWT)</b>
    </Content>
    <Content {headerSize} header="Android ROM Building (2011-12)">
      Tried my hands on building AOSP to understand the build processes, and created a working AOSP port for
      Samsung Galaxy Ace (<a href="https://source.android.com" target="_blank"> Android Open Source Project</a>, C)
    </Content>
    <Content {headerSize} header="Virtual Classroom (IBM TGMC 2008)">
      Online lecture delivery and collaboration platform <b>(J2EE, Websphere Application Server, DB2)</b>
    </Content>
    <Content {headerSize} header="Social Networking Portal (IBM TGMC 2007)">
      Make your wish - Social Networking Portal for college/universities <b>(J2EE, Websphere Application Server, DB2)</b>
    </Content>
    <Content {headerSize} header="Tank Game (2006)">SPEAR TankTank Game using Borland Graphics Libraries <b>(C++, BGI)</b>
    </Content>
    <Content {headerSize} header="Fee collection management (2003-2005">
      FECOMAS - Built Fee collection management system for the school (<b>Visual Foxpro 6</b>)
    </Content>
  </div>
</WideSection>