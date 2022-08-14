<script type="ts">
  import { browser, dev } from '$app/env';
  export const hydrate = false;
  export const router = browser;
  export const prerender = true;
  import WideSection from './components/WideSection.svelte';
  import EmploymentDetails from './components/EmploymentDetails.svelte';
  import Tip from './components/Tip.svelte';
  const edConfig = {
    contentClass: "content eh-content"
  }
</script>

<WideSection icon="icon-briefcase-fa" title="Employment History" startDelay={900} duration={300}>
  <EmploymentDetails {...edConfig} chronology={9} position="Staff Engineer & Team Lead" company="Truecaller"
                     start="July 2022"
                     end="Present"
                     url="https://www.truecaller.com">
    <ul>
      <li>Leading an engineering team (Android, Backend, QA, Web) for <a href="https://developer.truecaller.com" target="_blank">Truecaller SDK</a> development.</li>
      <li>Working on features not yet publicly accessible and leading a critical data migration from a legacy DB to a new DB</li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology={8} position="Senior Backend Engineer & Team Lead" company="Truecaller"
                     start="January 2021"
                     end="June 2022"
                     url="https://www.truecaller.com">
    <ul>
      <li>Led an engineering team (Android, Backend, QA, Web) for <a href="https://developer.truecaller.com" target="_blank">Truecaller SDK</a> development.</li>
      <li>Built a <b><a href="https://apps.shopify.com/truecaller" target="_blank">Shopify App</a></b>, to enable number verification by Truecaller in Shopify ecosystem.
        <ul>
          <li>Built the backend service for this implementation from scratch, implementing Shopify's OAuth 2.0 flow and a custom authentication
            layer for app configuration flows.
          </li>
          <li>Worked on Shopify Polaris React components, Shopify App Bridge 2.0, Firebase hosting & Google Cloud Functions for the 
            React frontend of Shopify app configuration.</li>
        </ul>
      </li>
      <li>Implemented the backend services for <b>OAuth 2.0</b> authorization server with PKCE from scratch, using Scala, Play Framework & GRPC.</li>
      <li>Led the architecture for OAuth client SDK implementation in Android & iOS, to ensure it is done in a way that lets future backend evolution of 
        these OAuth services work without a neeed for SDK update in 3rd party applications, thereby reducing time to market for future revisions (e.g. Openid support)
      </li>
      <li>Designed the architecture for <b>Openid</b>, the 2nd phase of OAuth implementation, making our OAuth backend &amp; client SDKs compliant with Openid</li>
      <li>Led the migration of a microservice from Dropwizard & Java to Play Framework & Scala</li>
      <li>Created a <b>FIDO</b> server in Scala and an Android app using FIDO for authentication, as part of lab-days at Truecaller</li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology={7} position="Senior Software Engineer" company="Truecaller"
                     start="July 2020"
                     end="December 2020"
                     url="https://www.truecaller.com">
    <ul>
      <li>Took over the backend development for <a href="https://developer.truecaller.com" target="_blank">Truecaller SDK</a> and developer ecosystem</li>
      <li>
        Handled development/evolution of multiple microservices (<b>Scala, Java, Play Framework, Dropwizard, gRPC, Cassandra</b>)
        deployed over Kubernetes on <Tip tip="Google Cloud Platform">GCP</Tip> and on-premise data center. These services
        provide backend APIs for Android, iOS and mobile web SDKs, used by hundreds of developers and 300 million+
        monthly active users.
      </li>
      <li>
        Led the early access program for Truecaller's <b>Business Messaging</b> APIs
        <ul>
          <li>Set up tooling for integrating Business Messaging GRPC services in partner backends on Java (Maven, Gradle), Node.js, Go & Ruby</li>
          <li>Created documentation for integrating these APIs in all these languages and helped early access partners in integration</li>
          <li>Created reference implementations for Business Messaging APIs in Java & Node.js</li>
          <li><b>Ported a proprietary image compression algorithm</b> used by Truecaller Messaging from <b>Kotlin to Java & Node.js</b>. Architected 
            the algorithm in a way that the backend implementations could plug in their platform specific image libraries to read a variety of image 
            formats and use it with the algorithm. Fixed a <b>performance bug</b> 
            as part of the porting (backported to Kotlin later by owning teams), that reduced algorithm's memory footprint by >1000x and fixed 
            rotation/skewing issues in the output image
          </li>
          <li>Created a Java & Node.js implementation of Business Messaging GRPC client as a runnable jar, with several command line options,
            to enable QA teams to test these APIs as they evolve during/post EAP. This was also used for load testing the APIs</li>
          <li>Joined the GTM team and made the initial product pitch to all early access partners, working with external product & backend teams to get
            APIs implemented in the right manner, with proper instrumentation and scalability considerations.
          </li>
        </ul>
      </li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology={6} position="Junior Vice President, Logistics Tech" company="Zilingo"
                     start="June 2016"
                     end="June 2020" url="https://zilingo.com">
    <ul>
      <li>Rewrote the logistics API integrations system from scratch using <b>Akka Actor system</b> for handling
        <b>thousands of concurrent operations</b>. Scaled the system from 1 API integration to
        <Tip tip="Each integration had more than 1 API to be implemented">35</Tip>. Designed the system to work with
        third party APIs of varying complexity and tech stacks (<Tip tip="Partner API callbacks, tracking status updates">webhooks</Tip>,
        SOAP, REST, legacy XML APIs), and to handle tracking, shipping label, order, pickup and returns management for
        <b>100K+ live orders</b> at peak, operating on mere <b><Tip tip="Maximum XMX ever set was 768 MB">512 MB</Tip></b> JVM memory.
      </li>
      <li>Collaborated with 3PL tech & business counterparts across 9 countries/time zones (<b>India, Singapore,
        Thailand, Indonesia, Philippines, USA, Australia, China and Myanmar</b>) from <b>feasibility analysis</b>
        and <b>requirement gathering</b> till <b>acceptance testing</b>. Created specialized workflows to be able to
        serve differences in operational processes of different 3PLs. Worked closely with Zilingo Operations teams
        across regions to tweak systems for solving operational challenges in different business scenarios: <b>B2C
        logistics (<em>efficiency</em>)</b>, <b>B2B logistics (<em>cost</em>)</b> and <b>cross-border logistics
        (<em>first mile visibility & customs</em>)</b>.
      </li>
      <li>Designed/implemented an internal <b>Scala library</b> to <b>extract & transform</b> one or more domain specific
        <b><Tip tip="A data term is a logical grouping of data from multiple tables specific to a microservice">data terms</Tip></b>
        from different microservices in real-time using <b>Akka Streams</b> and <b>Kafka</b>. Led the development of a
        data sync control microservice, that controlled the configuration for
        <Tip tip="Push data as soon as data is created or modified">push</Tip>,
        <Tip tip="Pull any unsynced data periodically, say every 15 minutes">pull</Tip>, and data
        <Tip tip="Whether a full sync/re-sync is need or only sync data modified after a specific date">syncing range</Tip>.
        The library can sync different versions of same source data to different destinations (e.g. <b>data-warehouses</b>,
        other services), and it formed the basis of entire <b>data warehousing operations, reporting and data science practices</b> in Zilingo.
      </li>
      <li>Designed/implemented a <b>highly available zones backend system</b> to serve country specific <b>administrative zone
        hierarchy</b> and associated metadata (e.g. postal codes) as a <b>periodically refreshed cached</b>.
        The system supports <b>data versioning</b> upon change in a region's administrative structure and allows
        different versions/snapshots of data to be served to different consumers at a given time, to ensure different
        microservices can adopt the data updates gradually, and the service deployments are decoupled with the
        availability of data.
      </li>
      <li>Led the design and implementation of <b>reverse logistics</b> management by creating a separate microservice to
        handle Returns.</li>
      <li><b>SBT multi project</b> configuration setup for data warehouse sync client library standardization.</li>
      <li>Did some ground work on a <b>data validation library</b> for region specific/agnostic phone number
        verification using Google's <a href="https://github.com/google/libphonenumber">libphonenumber</a> library</li>
      <li>Worked with <b>devops</b> and implemented specialized monitoring and alerts using <b>Grafana</b> for developer
        view of the third party API performance and health</li>
      <li>Implemented a microservice for <b>seller rating</b> management as the task for Scala/Play Framework
        onboarding and delivered the entire service from ground up in the first 2 weeks.
      </li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology={5} position="Senior Applications Engineer" company="Oracle"
                     start="November 2014"
                     end="June 2016"
                     url="https://www.oracle.com/in/applications/supply-chain-management/manufacturing/">
    <ul>
      <li>Worked in Oracle Fusion SCM - <b>Manufacturing</b> software development team for 1 year</li>
      <li>
        Worked on the Work Order Execution and mass import components (<b>Java, ADF, PLSQL, SOAP Web services, UTPLSQL</b>)
      </li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology={4} position="Applications Engineer" company="Oracle" start="March 2012"
                     end="November 2014"
                     url="https://www.oracle.com/a/ocom/docs/industries/oracle-cmro-045277.pdf">
    <ul>
      <li>Worked in Oracle EBS development team, for their <b>CMRO</b> product (Complex <b>Maintenance, Repair and Overhaul</b>)
        that's used for <b>configuration management, planning & execution</b> of MRO activities on <b>aeroplanes</b>,
        <b>engines</b> and other complex equipment (<b>Java, OAF, PLSQL, XML</b>).
      </li>
      <li>
        Implemented extraction of CMRO Visits hierarchy as Microsoft Project supported XML, for better planning of
        Visits in MS Project
      </li>
      <li>
        Implemented Material and <b>Squawks</b> pages in new <b>Non-routine Enhancement</b> dashboard
      </li>
      <li>
        <b>Search Unit Configuration, and Search UC</b> drill down pages in <b>Maintenance Control Centre</b> workbench
      </li>
      <li>
        Integrated existing part changes page into MCC workbench
      </li>
      <li>
        Converted Alternate Item Groups pages (Search/Manage) from CSI framework to OAF
      </li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology={3} position="Senior Systems Engineer" company="Infosys Limited"
                     start="October 2011"
                     end="March 2012" url="https://www.infosys.com/">
    <ul>
      <li>Developed a tool to <b>extract document/metadata</b> from <Tip tip="A content management software">Livelink</Tip>
        servers and store metadata as XMLs, content natively in an organized structure (<b>.Net/C#</b>).</li>
      <li>Feasibility analysis for migration of a decade old Livelink system to SharePoint</li>
      <li>Worked on setting up an offshore data center for migration from existing Documentum and Livelink servers to
        Sharepoint</li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology={2} position="Systems Engineer" company="Infosys Technologies Limited"
                     start="July 2009"
                     end="October 2011">
    <ul>
      <li>Taxonomy standardization of more than 2 million documents in <b>Documentum CMS</b></li>
      <li>Production system upgrades for highly critical Documentum/Sharepoint docbases (Java, XML, Oracle)</li>
      <li>Production support for almost <b>25 Documentum 5.3 and 6.5 docbases</b> across the world</li>
    </ul>
  </EmploymentDetails>
  <EmploymentDetails {...edConfig} chronology={1} position="Software Engineer, Intern"
                     company="Infosys Technologies Limited"
                     start="January 2009" end="May 2009">
    <ul>
      <li>Remote Compiler - <b>Web-based IDE and compilation/execution environment</b> for various programming languages
        (C, C++, Java). Generalized the UI widgets created for the project as reusable component library (<b>J2EE,
        JavaScript, CSS, Compilers, Oracle</b>)</li>
    </ul>
  </EmploymentDetails>
</WideSection>
