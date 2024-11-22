import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  voiceverse, 
  jobit,
  tripguide,
  threejs,
  cloudev,
  electrolux,
  nginx,
  github,
  redhat
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
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name:"redHat",
    icon: redhat

  },
  {
    name: "Nginx",
    icon: nginx,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Cloudev-Solutions",
    icon: cloudev,
    iconBg: " #E6DEDD",
    date: "Aug 2023 – Dec 2023",
    points: [
      "Assisted in design and development of server code using node.js, express.js · rest framework API · MongoDB.",
      "Node.js Developer · Backend developer.",
    ],
  },
  {
    title: "Digitalization and Developing Team",
    company_name: "electrolux",
    icon: electrolux,
    iconBg: "#383E56",
    date: "Jul 2022 – Sep 2022",
    points: [
      "Working on automation of machines for new factory line (Neptune).",
      "Scripts for Handhelds Autologin.",
      "Implement network solutions in line with company rules and standards."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VoiceVerse",
    description:
      "An Intelligent Dubbing Platform leveraging deep learning and deepfaketechniques revolutionizes the dubbing process by automating voice dubbing and enhancing lip synchronization.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/Fatmaamr61/VoiceVerse",
  },
  {
    name: "Real-time Notification System",
    description:
      "A system that includes functionality for user registration, login, product management, and discount notifications. The real -time notifications are sent to connected clients whenever a new product is added, or a discount is applied.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "webSocket",
        color: "pink-text-gradient",
      },
    ],
    image:  github,
    source_code_link: "https://github.com/Fatmaamr61/notificationSystem/",
  },
  {
    name: "DiamondSoul",
    description:
      "MakeUp Shopping web application working as a cutting-edge online shopping platform that brings together a seamless shopping experience and a diverse range of products to cater to your every need.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "restAPIs",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/Fatmaamr61/DiamondSoul",
  },
];

export { services, technologies, experiences, testimonials, projects };
 