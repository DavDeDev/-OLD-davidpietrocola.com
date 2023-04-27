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
  react,
  figma,
  ubuntu,
  docker,
  csharp,
  firebase,
  java,
  tailwind,
  jquery,
  postman,
  python,
  postgre,
  aws,
  centennial,
  uofthacks,
  nsbe,
  travelTherapy,
  opzioneZen,
  jobsApi,
  mlh,
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
    name: "c#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "postgresql",
    icon: postgre,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name:"Postman",
  //   icon: postman,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "firebase",
  //   icon: firebase,
  // },
];

const experiences = [
  {
    title: "Student Researcher",
    company_name: "Wimtach",
    icon: centennial,
    iconBg: "#454546",
    date: "January 2023 - Present",
    points: [
      "Designed and implemented a Microsoft SQL Server database from scratch, and hosted it on Amazon Web Services (AWS) Relational Database Service (RDS), ensuring high availability and scalability of the system.",
      "Created the basic logic of the project and developed documentation such as Entity Relationship Diagrams (ERDs), flowcharts, and technical specifications to guide development teams, and ensure consistent understanding of the project.",
    ],
    website: "https://wimtach.centennialcollege.ca/partners/",
  },{
    title: "EducateHacks - 4th place",
    company_name: "MLH",
    icon: mlh,
    iconBg: "#fff", 
    date: "April 2023",
    points: [
      "With HackTheFeed, users can easily access and subscribe to relevant cybersecurity news and updates, providing them with the technological literacy needed in the modern world.",
      "Leveraged the latest developments in OpenAI technology, to provide real-time personalized insights for all posts.",
    ],
    website: "https://devpost.com/software/hackthefeed-1ycujf",
  },
  {
    title: "MapHacks 2 - 1st place",
    company_name: "MLH",
    icon: mlh,
    iconBg: "#fff",
    date: "April 2023",
    points: [
      "Local Eyes is a revolutionary web application that encourages users to explore their community by providing them with a comprehensive list of nearby locations. The app allows users to filter locations by type and rank them based on proximity.",
      "Developed a web application involving several tools and resources, including SvelteKit, DaisyUI, TailwindCSS, and Mapbox for the frontend, and Fastify, JWT, JSONSchema, MongoDB, and Swagger for the backend.",
    ],
    website: "https://devpost.com/software/tbd-p9xqhv",
  },
  {
    title: "NSBE Hackathon - 3rd place",
    company_name: "University Of Toronto",
    icon: nsbe,
    iconBg: "#271744",
    date: "March 2023",
    points: [
      "Our team participated in an inclusivity-themed hackathon and developed a discussion facilitation platform tailored for educational institutions.",
      `Our team's solution was recognized with third place in the 'Best education hack' category, highlighting the importance of inclusivity in education and the potential of technology to facilitate it.`,
    ],
    website:
      "https://devpost.com/software/discuss-io?ref_content=user-portfolio&ref_feature=in_progress",
  },
    {
    title: "UofTHacks Hackathon",
    company_name: "University Of Toronto",
    icon: uofthacks,
    iconBg: "#000",
    date: "January 2023",
    points: [
      "Developed a Discord Bot during the UofTHacks hackathon, designed to recommend locations around Toronto based on the user's emotional state, with the goal of improving mental health and wellbeing.",
      "Overcame challenges such as learning how to create a Discord bot and incorporating Co:here AI and ML technology, resulting in the successful creation of a functional bot. Gained valuable experience in bot development and working with AI and ML tools.",
    ],
    website: "https://devpost.com/software/travel-therapy",
  },
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
