import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mark Freer', // e.g: 'Name | Developer'
  lang: 'English', // e.g: en, es, fr, jp
  description: 'Welcome to Mark Freer Blog', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mark Freer',
  subtitle: 'I am a Senior (S.R.E) at Red Hat',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'surf.jpg',
  paragraphOne:
    'I am Senior Site Reliability Enginer, working for Red Hat Ireland and based in Waterford Ireland.',
  paragraphTwo:
    'Interested in Kubernetes, Openshift, AWS, Go-lang, and contributing to many open source projects. I have keen interested in cloud security aswell',
  paragraphThree: 'I like to surf and do sea Kayaking on Waterfords local beaches.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Secure M.E.R.N Web application',
    info: 'This is a secure M.E.R.N Web application demo OWASP security top ten',
    info2: 'Highlights some of node js security principals',
    url: 'https://github.com/Nanyte25/penconnectorlab.git',
    repo: 'https://github.com/Nanyte25/penconnectorlab.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rpi-cluster.jpg',
    title: 'Settting Up an Kubernetes RaspBerry Pi4 Cluster',
    info: 'Kubernetes is a great testing plaform and the Rapsberry PI make for cheap physical nodes',
    info2: 'This tutorial will step you through the process of getting you cluster up and running',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Jira1.jpg',
    title: 'Setup a Jira instance for your Dev Projects',
    info: 'This tutorial will guide you through setting up a jira instance for all your development projects',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Jira1.jpg',
    title: 'Setup a Jira instance for your Dev Projects',
    info: 'This tutorial will guide you through setting up a jira instance for all your development projects',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'freer.mark@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/markfreer/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Nanyte25',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
