import { calculateAge } from "./utils/CalculateAge";

export const siteConfig = {
  // Title of your website
  title: "Marin Heđeš",
  // Description of your website
  description: "Graphic/motion designer & software developer",
  // Keywords people can use to find your website
  keywords:
    "portfolio, marin heđeš, faust, sincerelyfaust, founder, developer, graphic designer, motion designer, web developer",
  // Link of an image that will be displayed in an embed
  embedImageLink: "https://avatars.githubusercontent.com/u/44751736?v=4",
  // Website's URL for when it goes live
  canonicalLink: "https://marinhedes.com",
  // Your name
  name: "Marin Heđeš",
  // Briefly describe yourself
  shortDescription: "Graphic/motion designer & software developer",
  // Optional: Your Twitter username
  twitter: "@sincerelyfaust",
  // Optional: Your GitHub username
  github: "sincerelyfaust",
  // Optional: Your LinkedIn username
  linkedin: "marinhedes",
  // Optional: Your Instagram username
  instagram: "marinhedes",
  // Optional: Your mail
  mail: "hedesmarin@gmail.com",
  // Optional: Where you reside
  location: { country: "Croatia", city: "Slavonski Brod" },
  // Describe yourself
  longDescription: `My name is Marin Heđeš, I'm a ${calculateAge(
    "2001/02/23",
  )} year old self-taught graphic/motion designer and a developer based in 🇭🇷 Slavonski Brod, Croatia. I love learning and gathering new experiences which is what drives me to try something new every once in a while. Hate studying. Can't live without music. Aged 15, decided to skip on college and teach myself design and programming. Got into open source back in 2020, started learning new skills and getting experience in various fields while building projects with great people and now I'm looking forward to where it'll take me next. I specialize in graphic/motion design (branding, UI/UX, web design, photoshop, promo), building brands, marketing/advertising, project/product/community management, public relations, desktop/mobile/web app development and web development.`,
  // Optional: Brief information about yourself
  infoChips: [
    { name: "⏳ Age", description: [`${calculateAge("2001/02/23")}`] },
    { name: "🎶 Fav music genres", description: ["All of them"] },
    {
      name: "🍿 Fav film genres",
      description: ["Psychological thriller", "Horror"],
    },
  ],
  // List out your skills
  skills: [
    {
      name: "Motion design",
      description: ["Adobe After Effects", "Lottie"],
    },
    {
      name: "Tools",
      description: ["Git", "Meta Business Suite", "CI/CD"],
    },
    {
      name: "Graphic design",
      description: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    },
    {
      name: "Non-languages",
      description: ["HTML", "CSS"],
    },
    {
      name: "Frameworks",
      description: ["Flutter", "React", "Next.js"],
    },
    {
      name: "Languages",
      description: ["Dart", "TypeScript"],
    },
  ],
  // List out your projects
  projects: [
    {
      name: "dahliaOS App Store",
      description:
        "Curated marketplace for third-party applications on dahliaOS.",
      link: "https://github.com/dahliaOS/app_store",
      technologies: ["Dart", "Flutter"],
    },
    {
      name: "dahliaOS Welcome",
      description: "An application for getting started with dahliaOS.",
      link: "https://github.com/dahliaOS/welcome",
      technologies: ["Dart", "Flutter"],
    },
    {
      name: "dahliaOS Website",
      description: "Website for dahliaOS.",
      link: "https://github.com/dahliaOS/website",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Styled Components",
        "Emotion",
      ],
    },
    {
      name: "The Hateful Society",
      description: "An upcoming hypewear brand.",
      link: "https://github.com/thehatefulsociety/thehatefulsociety",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Styled Components",
        "Medusajs",
      ],
    },
    {
      name: "Portfolio",
      description: "Portfolio template, the website you're currently on.",
      link: "https://github.com/SincerelyFaust/portfolio",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind"],
    },
    {
      name: "FSK Satellite website",
      description: "Website for an Italian trap group.",
      link: "https://github.com/SincerelyFaust/fsksatellite",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind",
        "Three.js(R3F)",
      ],
    },
    {
      name: "Cordhook",
      description:
        "Cordhook is an application for sending webhooks on Discord.",
      link: "https://github.com/SincerelyFaust/cordhook",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Styled Components",
        "Tauri",
        "Rust",
      ],
    },
  ],
  // Optional: Declare if you're available for hire
  availability: true,
  // List out your experience
  experience: [
    {
      name: "dahliaOS",
      position: "Founder",
      description:
        "Joining dahliaOS through Camden Bruce, I started as a graphic designer designing various promotional/marketing material, user interfaces, logos, wallpapers and more. After a few months, I moved onto a more managerial role where I took on the challenge to spread the word about dahliaOS, improve our presence and expand our horizons. I overlooked almost every aspect of the project making sure that our work is consistent and of good quality, that the team is productive, communicative and well-guided. I helped the team get more organized by introducing a few tools and guidelines that helped boost our productivity and improve task management. On the side, I also did some community management, wrote and designed most of the posts, engaged with our community, ran ads for the project on platforms such as Facebook and Instagram. Software development-wise, worked on various applications, the desktop enviroment and our website.",
      link: "https://dahliaos.io",
      duration: { start: "2020/01", end: "" },
    },
    {
      name: "BlissLabs",
      position: "Design Lead / PR Lead / Business Director",
      description:
        "I was invited to join the BlissLabs non-profit organization by Jon West to help them progress further and get the team back on its feet. Aside from the BlissLabs organization, I also chose to work on Bliss OS, Bliss ROM and Android-Generic projects to help them grow, too. Shortly after I joined, I was picked for the new design and PR lead. I've led BlissLabs through a rebrand where we changed the logo and the name from Bliss Family of ROMS to BlissLabs. Consulted the team leads on project sustainability and management. I also took part in the negotiations between Astian and BlissLabs regarding joining the forces in creating a cloud suite. Design-wise, I designed various promotional/marketing content. In general, helped with recruiting (HR), business management, PR (social media). Introduced them to a few tools that helped boost productivity and improve task management.",
      link: "https://blisslabs.org/",
      duration: { start: "2021/02", end: "2021/06" },
    },
  ],
  footer: [
    {
      category: "💬 Get in touch",
      links: [
        { name: "Instagram", url: "/instagram" },
        { name: "Twitter", url: "/twitter" },
        { name: "LinkedIn", url: "/linkedin" },
        { name: "GitHub", url: "/github" },
      ],
    },
  ],
};
