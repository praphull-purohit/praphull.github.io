<script>
  import WideSection from './components/WideSection.svelte';
  import Content from './components/Content.svelte';
  const headerSize = 6;
</script>

<WideSection icon="fa fa-laptop-code" title="Projects/Tooling">
  <div class="content">
    <Content {headerSize} header="Financial Functions Library">
      <a href="https://github.com/praphull/scala-finance" target="_blank">Scala library</a> of commonly used financial functions (e.g. XIRR, NPV)
    </Content>
    <Content {headerSize} header="SBT multi-module (2017-19)">
      <!-- Move to Zilingo experience -->
      SBT multi project configuration setup for data warehouse sync client library standardization
    </Content>
    <Content {headerSize} header="Android app & backend (2015-16)">
      Banana Kick - Android application (Java) and backend (Node.js) for booking sport venues (Android,
      Node.js/Express.js, Mocha/Should.js, MySQL, AWS, Twitter Digits, JWT)
    </Content>
    <Content {headerSize} header="Virtual Classroom (IBM TGMC 2008)">
      Online lecture delivery and collaboration platform (J2EE, Websphere Application Server, DB2)
    </Content>
    <Content {headerSize} header="Social Networking Portal (IBM TGMC 2007)">
      Make your wish - Social Networking Portal for college/universities (J2EE, Websphere Application Server, DB2)
    </Content>
    <Content {headerSize} header="Tank Game (2006)">SPEAR TankTank Game using Borland Graphics Libraries (C++, BGI)
    </Content>
    <Content {headerSize} header="Fee collection management (2003-2005">
      FECOMAS - Built Fee collection management system for the school (Visual Foxpro 6)
    </Content>
  </div>
</WideSection>