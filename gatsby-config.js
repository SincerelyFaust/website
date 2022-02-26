module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://marinhedes.com/`,
    // Your Name
    name: `Marin Heđeš`,
    // Main Site Title
    title: `Marin Heđeš | Graphic/Motion Designer & Developer`,
    // Description that goes under your name in main bio
    description: `Graphic/motion designer & software developer`,
    // Optional: Twitter account handle
    author: `@sincerelyfaust`,
    // Optional: Github account URL
    github: `https://github.com/sincerelyfaust`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/marinhedes/`,
    // Optional: Instagram account URL
    instagram: `https://www.instagram.com/marinhedes/`,
    // Optional: Mail address URL
    mail: `mailto:hedesmarin@gmail.com`,
    // Content of the About Me section
    about: `My name is Marin Heđeš, I'm a 21 year old self-taught graphic/motion designer and a developer based in Slavonski Brod, Croatia.
    I love learning and gathering new experiences which is what drives me to try something new every once in a while. Hate studying. Can't
    live without music.
    Aged 15, decided to skip on college and teach myself design and programming. Got into open source back in 2020, started learning new skills and getting experience in various fields
    while building projects with great people and now I'm looking forward to where it'll take me next.
    I specialize in graphic/motion design (branding, UI/UX, 3D, web design, photoshop, promo), building brands, marketing/advertising, project/product/community management, developer/public relations and app development.
    Currently learning about open source, software development, graphic design, project management, marketing, enterprise,
    product management and motion design through various projects I work on while leading them to victory.
    Making beautiful applications for dahliaOS using Dart/Flutter in my free time.`,
    // Optional: Write if you're available for hire
    availability: `I'm available for collaborations/partnerships/etc. and am currently seeking full-time opportunities, feel free to contact me!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: `dahliaOS App store application`,
        description:
          `App store application for publishing and installing applications on the dahliaOS platform.`,
        technology: `Dart, Flutter`,
        link: `https://github.com/dahliaOS/app_store`,
      },
      {
        name: `dahliaOS Welcome application`,
        description:
          `Welcome application for getting started with the dahliaOS.`,
        technology: `Dart, Flutter`,
        link: `https://github.com/dahliaOS/welcome`,
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: `dahliaOS`,
        position: `Founder`,
        description: `Graphic/motion design, app development, project management, advertising, public relations`,
        duration: `January 2020 - Present`,
        link: `https://dahliaos.io`,
      },
      {
        name: `BlissLabs`,
        position: `Design Lead / PR Lead / Business Director`,
        description: `Project/business management, graphic design, public relations`,
        duration: `February 2021 - June 2021`,
        link: `https://blisslabs.org`,
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: `Languages`,
        description:
          `Dart`,
      },
      {
        name: `Frameworks`,
        description: `Flutter`,
      },
      {
        name: `Graphic design`,
        description:
          `Figma, Adobe Photoshop`,
      },
      {
        name: `Motion design`,
        description:
          `Adobe After Effects, Lottie`,
      },
      {
        name: `Tools`,
        description:
          `Git, Linear, VSCode, Google, Facebook Business Suite, Google Ads`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
