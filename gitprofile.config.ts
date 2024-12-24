const CONFIG = {
  github: {
    username: 'GoblinJay', // Your GitHub org/user name
  },

  base: '/',

  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['GoblinJay/gitprofile', 'GoblinJay/pandora'],  // Updated to reflect your repos
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Bird Classification Website',
          description: 'Bird classification app with real-time recognition and database management.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'AI Tic-Tac-Toe Game',
          description: 'AI-powered tic-tac-toe with minimax and negamax algorithms.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },

  seo: {
    title: 'Portfolio of Jason Huang',
    description: 'Jason Huang - Software Developer Portfolio',
    imageURL: '',
  },

  social: {
    linkedin: 'jasonhuang',
    twitter: 'GoblinJay',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'goblinjay',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://github.com/GoblinJay',
    phone: '',
    email: 'jasonhuang1738@gmail.com',
  },

  resume: {
    fileUrl: 'https://github.com/GoblinJay/portfolio_resume.pdf',
  },

  skills: [
    'C/C++',
    'Python',
    'JavaScript',
    'React.js',
    'FastAPI',
    'Firebase',
    'Git',
    'VS Code',
    'Visual Studio',
  ],

  experiences: [
    {
      company: 'California State University, San Bernardino',
      position: 'Game Coordinator',
      from: 'Nov 2023',
      to: 'Present',
      companyLink: 'https://www.csusb.edu',
    },
    {
      company: 'CS&E Club, CSUSB',
      position: 'Cabinet Member',
      from: 'Aug 2022',
      to: 'Present',
      companyLink: 'https://www.csusb.edu',
    },
  ],

  educations: [
    {
      institution: 'California State University, San Bernardino',
      degree: 'BSc in Computer Science',
      from: '2023',
      to: '2026',
    },
    {
      institution: 'Victor Valley College',
      degree: 'Associate of Science in Computer Science',
      from: '2021',
      to: '2023',
    },
  ],
  
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'retro',
      'dracula',
    ],
  },

  footer: `Made by Jason Huang with <a 
      class="text-primary" href="https://github.com/GoblinJay/gitprofile"
      target="_blank"
      rel="noreferrer">GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
