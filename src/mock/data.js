import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mark Freer', // e.g: 'Name | Developer'
  lang: 'English', // e.g: en, es, fr, jp
  description: 'Welcome to Mark Freer Blog', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Open Source',
  name: 'Mark Freer',
  subtitle: 'I am a Senior (S.R.E) at Red Hat',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'surf.jpg',
  paragraphOne:
    'I am Senior Site Reliability Engineer, working for Red Hat Ireland and based in Waterford Ireland.',
  paragraphTwo:
    'Interested in Kubernetes, Openshift, AWS, Go-lang, and contributing to many open source projects. I have keen interested in cloud security as-well',
  paragraphThree: 'I like to surf and do sea Kayaking on Waterford local beaches.',
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
  {
    id: nanoid(),
    img: 'Glitchtip3.jpg',
    title: 'Glitchtip Error tracking software',
    info: 'This project was to standup a self hosted version of Glitchtip on Openshift dedicated. There is a script the the main repository to help test out Glitchtip. Its a working progress.',
    info2:
      'If you need to track bugs in a service or component within you software Glitchtip does just that.',
    url: 'https://github.com/Nanyte25/glitchtip',
    repo: 'https://github.com/Nanyte25/glitchtip', // if no repo, the button will not show up
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
      url: 'https://twitter.com/Nanyte25',
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
