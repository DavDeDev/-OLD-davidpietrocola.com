import {
  dba,
  backend,
  webdev,
  javadev,
  javascript,
  html,
  css,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  csharp,
  firebase,
  java,
  postman,
  postgre,
  aws,
  centennial,
  uofthacks,
  nsbe,
  travelTherapy,
  opzioneZen,
  jobsApi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "Java Developer",
    icon: javadev,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DBA",
    icon: dba,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name:"Postman",
  //   icon: postman,
  // },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: "postgresql",
    icon: postgre,
  },
];

const experiences = [
  {
    title: "Student Researcher - Full Stack Developer",
    company_name: "Wimtach",
    icon: centennial,
    iconBg: "#d3e02a",
    date: "January 2023 - Present",
    points: [
      "Designed and implemented a Microsoft SQL Server database from scratch, and hosted it on Amazon Web Services (AWS) Relational Database Service (RDS), ensuring high availability and scalability of the system.",
      "Created the basic logic of the project and developed documentation such as Entity Relationship Diagrams (ERDs), flowcharts, and technical specifications to guide development teams, and ensure consistent understanding of the project.",
      "Created the basic logic of the project and developed documentation such as Entity Relationship Diagrams (ERDs), flowcharts, and technical specifications to guide development teams, and ensure consistent understanding of the project.",
    ],
    website:"https://wimtach.centennialcollege.ca/partners/",
  },
  {
    title: "Hackathon",
    company_name: "UofTHacks",
    icon: uofthacks,
    iconBg: "#000",
    date: "January 2023",
    points: [
      "Designed and implemented a Microsoft SQL Server database from scratch, and hosted it on Amazon Web Services (AWS) Relational Database Service (RDS), ensuring high availability and scalability of the system.",
      "Created the basic logic of the project and developed documentation such as Entity Relationship Diagrams (ERDs), flowcharts, and technical specifications to guide development teams, and ensure consistent understanding of the project.",
      "Created the basic logic of the project and developed documentation such as Entity Relationship Diagrams (ERDs), flowcharts, and technical specifications to guide development teams, and ensure consistent understanding of the project.",
    ],
    website:"https://wimtach.centennialcollege.ca/partners/",
  },
  {
    title: "Hackathon",
    company_name: "NSBE",
    icon: nsbe,
    iconBg: "#271744",
    date: "March 2023",
    points: [
      "Designed and implemented a Microsoft SQL Server database from scratch, and hosted it on Amazon Web Services (AWS) Relational Database Service (RDS), ensuring high availability and scalability of the system.",
      "Created the basic logic of the project and developed documentation such as Entity Relationship Diagrams (ERDs), flowcharts, and technical specifications to guide development teams, and ensure consistent understanding of the project.",
      "Created the basic logic of the project and developed documentation such as Entity Relationship Diagrams (ERDs), flowcharts, and technical specifications to guide development teams, and ensure consistent understanding of the project.",
    ],
    website:"https://wimtach.centennialcollege.ca/partners/",
  }
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Travel Therapy",
    type: "Discord Bot",

    description:
      "Our discord bot mainly uses Python to develop the backend system of our bot, and with the help of the discord API, our bot provides a user-friendly and understandable interface. After getting input from users, our app uses Co:here to generate recommendations based on the emotions displayed by the user.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "hackathon",
        color: "purple-text-gradient",
      },
    ],
    image: travelTherapy,
    source_code_link:
      "https://github.com/DavDeDev/UofTHacks-TravelTherapy#readme-top",
  },
  {
    name: "Opzione Zen",
    type: "Chrome Extension",
    description:
      "This project is a Chrome Extension called 'Opzione Zen' that removes distracting components around the main content on popular websites to help users focus when reading documentation. It was developed after studying JavaScript and reading Google's documentation. The project includes a manifest.json file",
    tags: [
      {
        name: "manifest V3",
        color: "green-text-gradient",
      },
      {
        name: "chrome APIs",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: opzioneZen,
    source_code_link: "https://github.com/DavDeDev/Opzione-Zen#readme-top",
    live_demo_link:
      "https://chrome.google.com/webstore/detail/opzione-zen/pbkpdonipildmhpcpdjegimbhnkogpfi",
  },
  {
    name: "Jobs API",
    type: "RESTful API",
    description:
      "The project involved building a job search API using the Node.js and Express framework. MongoDB was utilized to store and retrieve job listings data, and RESTful routes were implemented to enable CRUD operations on the job listings. The API was tested and debugged using Postman, and it was integrated with a front-end documentation that was written in YAML using SwaggerUI and Apimatic",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "swaggerUI",
        color: "lime-text-gradient",
      },
    ],
    image: jobsApi,
    source_code_link: "https://github.com/DavDeDev/JOBs-API",
    live_demo_link: "https://seal-app-njg7y.ondigitalocean.app/api-docs/",
  },
];

export { services, technologies, experiences, projects };
