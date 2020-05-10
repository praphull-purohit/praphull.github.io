<script>
  import WideSection from './components/WideSection.svelte';
  import EmploymentDetails from './components/EmploymentDetails.svelte';
  const edConfig = {
    contentClass: "content eh-content"
  }
</script>

<WideSection icon="fa fa-briefcase" title="Employment History">
  <EmploymentDetails {...edConfig} chronology="6" position="Junior Vice President, Logistics Tech" company="Zilingo"
                     start="June 2016"
                     end="Present" url="https://zilingo.com">
    <ul>
      <li>Rewrote the logistics API integrations system from scratch using Akka Actor system heavily. Scaled the system
        from 1 API integration to 35. Designed the system to work with third party APIs of varying complexity and tech
        stacks (webhooks, SOAP, REST, legacy XML APIs), and to handle tracking, shipping label, order and pickup
        management for 100K+ live orders at peak, operating on mere 512 MB JVM memory.
      </li>
      <li>Collaborated with 3PL tech & business counterparts across 9 countries/time zones (India, Singapore, Thailand,
        Indonesia, Philippines, USA, Australia, China and Myanmar), and created specialized workflows to be able to
        serve differences in operational processes of different 3PLs. Worked closely with Zilingo Operations teams
        across regions to tweak systems for solving operational challenges in different business scenarios: B2C
        logistics (efficiency), B2B logistics (cost) and cross-border logistics (first mile visibility & customs).
      </li>
      <li>Designed/implemented an internal Scala library to publish data from different microservices in real-time using
        Akka Streams and Kafka, with support for push/pull and selective data resyncing. The library can sync different
        versions of same source data to different destinations (e.g. data-warehouses, other services)
      </li>
      <li>Designed/implemented a highly available zones backend system to serve country specific administrative zone
        hierarchy and associated metadata (e.g. postal codes). The system supports different versions of data to be
        served to different services at a given time, to ensure different microservices can adopt the data updates
        gradually, and the service deployments are decoupled with the availability of data
      </li>
      <li>
        SBT multi project configuration setup for data warehouse sync client library standardization
      </li>
      <li>Worked with devops and implemented specialized monitoring and alerts using Grafana for developer view of the
        third party API performance and health
      </li>
      <li>Implemented internal services for seller rating management as the task for Scala/Play Framework onboarding and
        delivered the entire service from ground up in the first 2 weeks. Did some work on a data validation system for
        region specific/agnostic phone number verification using Google’s
        <a href="https://github.com/google/libphonenumber">libphonenumber</a> library
      </li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology="5" position="Senior Applications Engineer" company="Oracle"
                     start="November 2014"
                     end="June 2016"
                     url="https://www.oracle.com/in/applications/supply-chain-management/manufacturing/">
    <ul>
      <li>Worked in Oracle Fusion SCM - Manufacturing software development team for 1 year
      </li>
      <li>
        Worked on the Work Order Execution and mass import components (Java, ADF, PLSQL, SOAP Web services, UTPLSQL)
      </li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology="4" position="Applications Engineer" company="Oracle" start="March 2012"
                     end="November 2014"
                     url="https://www.oracle.com/a/ocom/docs/industries/oracle-cmro-045277.pdf">
    <ul>
      <li>Worked in Oracle EBS development team, for their CMRO product (Complex Maintenance, Repair and Overhaul)
        that’s used for planning and execution of MRO activities on aeroplanes, engines and other complex equipment
        (Java, OAF, PLSQL, XML)
      </li>
      <li>
        Implemented extraction of CMRO Visits hierarchy as Microsoft Project supported XML, for better planning of
        Visits in MS Project
      </li>
      <li>
        Implemented Material and Squawks pages in new Non-routine Enhancement dashboard
      </li>
      <li>
        Search Unit Configuration, and Search UC drill down pages in Maintenance Control Centre workbench
      </li>
      <li>
        Integrated existing part changes page into MCC workbench
      </li>
      <li>
        Converted Alternate Item Groups pages (Search/Manage) from CSI framework to OAF
      </li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology="3" position="Senior Systems Engineer" company="Infosys Limited"
                     start="October 2011"
                     end="March 2012" url="https://www.infosys.com/">
    <ul>
      <li>Developed a tool to extract document/metadata from Livelink servers and store metadata as XMLs, content
        natively in an organized structure (.Net/C#).
      </li>
      <li>
        Feasibility analysis for migration of a decade old Livelink system to SharePoint
      </li>
      <li>
        Worked on setting up an offshore data center for migration from existing Documentum and Livelink servers to
        Sharepoint
      </li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology="2" position="Systems Engineer" company="Infosys Technologies Limited"
                     start="July 2009"
                     end="October 2011">
    <ul>
      <li>Taxonomy standardization of more than 2 million documents in Documentum CMS
      </li>
      <li>
        Production system upgrades for highly critical Documentum/Sharepoint docbases (Java, XML, Oracle)
      </li>
      <li>
        Production support for almost 25 Documentum 5.3 and 6.5 docbases across the world
      </li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology="1" position="Software Engineer, Intern"
                     company="Infosys Technologies Limited"
                     start="January 2009" end="May 2009">
    <ul>
      <li>Remote Compiler - Web-based IDE and compilation/execution environment for various programming languages (C,
        C++, Java). Generalized the UI widgets created for the project as reusable component library (J2EE, JavaScript,
        CSS, Compilers, Oracle)
      </li>
    </ul>
  </EmploymentDetails>
</WideSection>