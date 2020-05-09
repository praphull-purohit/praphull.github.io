<script>
  import WideSection from './components/WideSection.svelte';
  import EmploymentDetails from './components/EmploymentDetails.svelte';
</script>

<WideSection icon="fa fa-briefcase" title="Employment History">
  <EmploymentDetails chronology="6" position="Junior Vice President, Logistics Tech" company="Zilingo" start="June 2016" end="Present" url="https://zilingo.com"></EmploymentDetails>
  <EmploymentDetails chronology="5" position="Senior Applications Engineer" company="Oracle" start="November 2014" end="June 2016" url="https://www.oracle.com/in/applications/supply-chain-management/manufacturing/"></EmploymentDetails>
  <EmploymentDetails chronology="4" position="Applications Engineer" company="Oracle" start="March 2012" end="November 2014" url="https://www.oracle.com/a/ocom/docs/industries/oracle-cmro-045277.pdf"></EmploymentDetails>
  <EmploymentDetails chronology="3" position="Senior Systems Engineer" company="Infosys Limited" start="October 2011" end="March 2012" url="https://www.infosys.com/"></EmploymentDetails>
  <EmploymentDetails chronology="2" position="Systems Engineer" company="Infosys Technologies Limited" start="July 2009" end="October 2011"></EmploymentDetails>
  <EmploymentDetails chronology="1" position="Software Engineer, Intern" company="Infosys Technologies Limited" start="January 2009" end="May 2009"></EmploymentDetails>
</WideSection>