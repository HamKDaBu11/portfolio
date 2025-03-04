// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HamKDaBu11', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['HamKDaBu11/gibson', 'HamKDaBu11/library-app'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Development of Stripe Payment for Honda GDO Project',
          description:
            'Used Angular 14 to design the payment portal for Garage Door Opener portal for Honda during my tenure with Xavor. Extensively used Nodejs to architect the backend logic and POSTMAN to test APIs. Furthermore, I also used regex to set validation logic for credit card numbers.',
        },
        {
          title: 'Designed System for Property Renting Application.',
          description:
            'In my last tenure, I worked on the development and deployment of a system that allows user to rent and buy properties. Set up APIs with Firebase Firestore to store records, transitioned the application from simple CSS to Tailwind while also making it responsive on smaller screens.',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Hamza Khawaja',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'hamzak96',
    email: 'khawajahamza08@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'SCSS',
    'Bootstrap',
    'Sequelize',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Omega Software Solutions',
      position: 'Full-stack Engineer',
      from: 'March 2023',
      to: 'Present',
    },
    {
      company: 'Xavor Corporation',
      position: 'Web Frontend Engineer',
      from: 'February 2022',
      to: 'December 2023',
      companyLink: 'https://www.xavor.com/',
    },
    {
      company: 'CloudPlex Inc.',
      position: 'Full Stack Developer',
      from: 'September 2021',
      to: 'January 2022',
    },
  ],
  educations: [
    {
      institution: 'FAST-NUCES Lahore',
      degree: 'Bachelor of Computer Science',
      to: '2021',
    },
    {
      institution: 'Lahore Grammar School',
      degree: 'A Levels',
      from: '2013',
      to: '2015',
    },
    {
      institution: 'Lahore College of Arts and Sciences',
      degree: 'O Levels',
      from: '2011',
      to: '2013',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  enablePWA: true,
};

export default CONFIG;
