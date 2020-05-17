import App from './App.svelte';
require('./scss/theme.scss');
const app = new App({
	target: document.body,
	props: {
      info: {
        tags: [
          {name: "Scala", title: "Scala", hash: "scala"},
          {name: "Play Framework", title: "Play Framework", hash: "playframework"},
          {name: "Akka", title: "Akka", hash: "akka"},
          {name: "Slick", title: "Slick", hash: "slick"},
          {name: "Java", title: "Java", hash: "java"},
          {name: "PostgreSQL", title: "PostgreSQL", hash: "postgresql"},
          {name: "Kafka", title: "Kafka", hash: "Kafka"},
          {name: "JSON", title: "Javascript Object Notation", hash: "json"},
          {name: "Oracle", title: "Oracle", hash: "oracle"},
          {name: "PLSQL", title: "PLSQL", hash: "plsql"},
          {name: "Javascript", title: "Javascript", hash: "javascript"},
          {name: "Node.js", title: "Node.js", hash: "nodejs"},
          {name: "C#", title: "C#", hash: "csharp"},
          {name: "JWT", title: "JSON Web Token", hash: "jwt"},
          {name: "Android", title: "Android", hash: "android"},
          {name: "SQL", title: "Structured Query Language", hash: "sql"},
          {name: "MongoDB", title: "MongoDB", hash: "MongoDB"},
          {name: "AWS", title: "Amazon Web Services", hash: "aws"},
          {name: "Microservices", title: "Microservices", hash: "microservice"},
          {name: "Git", title: "Git", hash: "git"},
          {name: "REST", title: "REST", hash: "rest"},
          {name: "SOAP", title: "SOAP", hash: "soap"},
          {name: "XML", title: "XML", hash: "xml"},
          {name: "Webhooks", title: "Webhooks", hash: "webhooks"},
          {name: "Devops", title: "Devops", hash: "devops"},
          {name: "Mocha", title: "Mocha", hash: "mochajs"},
          {name: "Should.js", title: "Should.js", hash: "shouldjs"}
        ],
        contactDetails: [
          {name: "LinkedIn", icon: "icon-linkedin-square-fa", id: "praphull8888", url: "https://in.linkedin.com/in/praphull8888"},
          {name: "GitHub", icon: "icon-github-square-fa", id: "praphull", url: "https://github.com/praphull"},
          {name: "Skype", icon: "icon-skype-fa", id: "praphull.purohit"},
          {name: "Email", icon: "icon-envelope-fa", id: "praphull8888 [at] gmail"}
        ],
        experience: [
          {item: "Scala/Akka", duration: "4 years"},
          {item: "Java", duration: "7 years"},
          {item: "Oracle/PLSQL", duration: "6 years"},
          {item: "PostgreSQL", duration: "4 years"},
          {item: "Node.js", duration: "1 year"},
          {item: "C#", duration: "1 year"},
          {item: "Documentum", duration: "2 years"},
        ],
        preferred: ["Scala", "Akka", "Databases/SQL", "Java", "Node.js", "JavaScript/Web"]
     }
	}
});

window.app = app;

export default app;
