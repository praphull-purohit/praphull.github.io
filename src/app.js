import App from './App.svelte';
require('./scss/theme.scss');
const app = new App({
	target: document.body,
	props: {
      info: {
        tags: ["Scala","Play Framework","Akka","Java","PostgreSQL","Kafka","Oracle","PLSQL","Javascript","Node.js","C#",
          "JWT","Android","SQL","MongoDB","Amazon Web Services","Microservices","Git","REST","SOAP","XML","Webhooks",
          "Devops"],
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
