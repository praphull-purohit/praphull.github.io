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
          {name: "LinkedIn", icon: "fab fa-linkedin", id: "praphull8888", url: "https://in.linkedin.com/in/praphull8888"},
          {name: "GitHub", icon: "fab fa-github-square", id: "praphull", url: "https://github.com/praphull"},
          {name: "Skype", icon: "fab fa-skype", id: "praphull.purohit"},
          {name: "Email", icon: "fa fa-envelope", id: "praphull8888 [at] gmail"}
        ],
        experience: [
          {item: "Scala/Akka", duration: "4 years"},
          {item: "Java", duration: "7 years"},
          {item: "Oracle/PLSQL", duration: "6 years"},
          {item: "PostgreSQL", duration: "4 years"},
          {item: "HTML/Javascript", duration: "11 years"},
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
