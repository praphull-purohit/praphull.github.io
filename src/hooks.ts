import type { Handle } from '@sveltejs/kit';

export type Tag = {
    name: string,
    title: string,
    hash?: string,
    url?: string
};
export type ContactDetails = {
    name: string,
    icon: string,
    id: string,
    url?: string
};
export type Experience = {
    item: string,
    duration: string
};

export type LightbendCertification = {
    certificateId: string,
    name: string,
    icon: string
};

export type Certifications = {
    lightbend: LightbendCertification[]
};

export type CourseraCourse = {
    certificateId: string,
    name: string,
    university: string
};

export type Courses = {
    coursera: CourseraCourse[]
}

export type Info = {
    tags: Tag[],
    contactDetails: ContactDetails[],
    experience: Experience[],
    preferred: string[],
    certifications: Certifications,
    courses: Courses
};

export const handle: Handle = async ({ event, resolve }) => {

        const info: Info = {
            tags: [
                { name: "Scala", title: "Scala", hash: "scala" },
                { name: "Play Framework", title: "Play Framework", hash: "playframework" },
                { name: "Akka", title: "Akka", hash: "akka" },
                { name: "Slick", title: "Slick", hash: "slick" },
                { name: "Java", title: "Java", hash: "java" },
                { name: "PostgreSQL", title: "PostgreSQL", hash: "postgresql" },
                { name: "Kafka", title: "Kafka", hash: "Kafka" },
                { name: "JSON", title: "Javascript Object Notation", hash: "json" },
                { name: "Oracle", title: "Oracle", hash: "oracle" },
                { name: "PLSQL", title: "PLSQL", hash: "plsql" },
                { name: "Cassandra", title: "Apache Cassandra", hash: "cassandra" },
                { name: "Kubernetes", title: "Kubernetes", hash: "kubernetes" },
                { name: "gRPC", title: "gRPC", hash: "grpc" },
                { name: "Protobuf", title: "Protocol Buffers", hash: "protobuf" },
                { name: "REST", title: "REST", hash: "rest" },
                { name: "GraphQL", title: "GraphQL", hash: "graphql" },
                { name: "MariaDB", title: "MariaDB", hash: "mariadb" },
                { name: "Javascript", title: "Javascript", hash: "javascript" },
                { name: "Node.js", title: "Node.js", hash: "nodejs" },
                { name: "Dropwizard", title: "Dropwizard", hash: "dropwizard" },
                { name: "C#", title: "C#", hash: "csharp" },
                { name: "OAuth", title: "OAuth 2.0", hash: "oauth" },
                { name: "PKCE", title: "OAuth 2.0 with PKCE", hash: "pkce" },
                { name: "Openid", title: "Openid", hash: "openid" },
                { name: "JWT", title: "JSON Web Token", hash: "jwt" },
                { name: "Android", title: "Android", hash: "android" },
                { name: "SQL", title: "Structured Query Language", hash: "sql" },
                { name: "MongoDB", title: "MongoDB", hash: "MongoDB" },
                { name: "AWS", title: "Amazon Web Services", hash: "aws" },
                { name: "Microservices", title: "Microservices", hash: "microservice" },
                { name: "Git", title: "Git", hash: "git" },
                { name: "SOAP", title: "SOAP", hash: "soap" },
                { name: "XML", title: "XML", hash: "xml" },
                { name: "Webhooks", title: "Webhooks", hash: "webhooks" },
                { name: "Devops", title: "Devops", hash: "devops" },
                { name: "Mocha", title: "Mocha", hash: "mochajs" },
                { name: "Should.js", title: "Should.js", hash: "shouldjs" },
                { name: "Shopify", title: "Shopify App Development", hash: "shopify" },
                { name: "Polaris", title: "Shopify Polaris", url: "https://polaris.shopify.com" },
                { name: "Svelte", title: "SvelteJS", url: "https://svelte.dev" },
                { name: "Bulma", title: "Bulma", url: "https://bulma.io" },
                { name: "Foundation", title: "Foundation JS", url: "https://get.foundation" },
                { name: "GDPR", title: "GDPR", hash: "gdpr" },
                { name: "Firebase", title: "Firebase", hash: "firebase" },
                { name: "Cloud Functions", title: "Google Cloud Functions", hash: "cloudfunctions" },
            ],
            contactDetails: [
                { name: "LinkedIn", icon: "icon-linkedin-square-fa", id: "praphull8888", url: "https://in.linkedin.com/in/praphull8888" },
                { name: "GitHub", icon: "icon-github-square-fa", id: "praphull", url: "https://github.com/praphull" },
                { name: "Skype", icon: "icon-skype-fa", id: "praphull.purohit" },
                { name: "Email", icon: "icon-envelope-fa", id: "praphull8888 [at] gmail" }
            ],
            experience: [
                { item: "Scala/Akka", duration: "6 years" },
                { item: "Java", duration: "8 years" },
                { item: "Oracle/PLSQL", duration: "6 years" },
                { item: "OAuth 2.0, Openid", duration: "1 year" },
                { item: "PostgreSQL", duration: "4 years" },
                { item: "Cassandra", duration: "1 year" },
                { item: "Node.js", duration: "1 year" },
                { item: "C#", duration: "1 year" },
                { item: "Documentum", duration: "2 years" },
            ],
            preferred: ["Scala", "Akka", "Databases/SQL", "Java", "Node.js", "JavaScript/Web"],
            certifications: {
                lightbend: [
                    {
                        certificateId: "d8ba5bd3-1ef3-441e-8a7c-16e99d90c780",
                        name: "Reactive Architecture: Introduction to Reactive Systems - Level 2",
                        icon: "reactive-architecture-introduction-to-reactive-systems-level-2.png"
                    },
                    {
                        certificateId: "db264da9-d029-4ca0-999f-82d5a08ab2e5",
                        name: "Lightbend Akka for Scala Professional - Level 2",
                        icon: "lightbend-akka-for-scala-professional-level-2.png"
                    },
                    {
                        certificateId: "d60162d0-f54c-47ab-9f76-d7df3b6d03ae",
                        name: "Lightbend Akka Streams for Scala Professional - Level 1",
                        icon: "lightbend-akka-streams-for-scala-professional-level-1.png"
                    }
                ]
            },
            courses: {
                coursera: [
                    { certificateId: "W5KPDYKVJ2JP", name: "Functional Programming Principles in Scala", university: "École polytechnique fédérale de Lausanne" }
                ]
            }
        };

        //event.locals.foo = "bar";
        event.locals.info = info;

        const response = await resolve(event);

        return response;
};