// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/al-folio/books/the_godfather/";
            },},{id: "news-completed-my-bachelor-s-in-telecommunications-engineering-at-universitat-politècnica-de-valència-with-a-thesis-on-deep-reinforcement-learning-for-uav-base-station-dynamic-positioning",
          title: 'Completed my Bachelor’s in Telecommunications Engineering at Universitat Politècnica de València with a...',
          description: "",
          section: "News",},{id: "news-started-my-master-s-in-computer-science-at-epfl-in-lausanne-switzerland-focusing-on-machine-learning-reinforcement-learning-and-mobile-networks",
          title: 'Started my Master’s in Computer Science at EPFL in Lausanne, Switzerland, focusing on...',
          description: "",
          section: "News",},{id: "news-submitted-our-paper-query-free-attacks-on-image-to-image-models-are-hard-to-avoid-to-icml-2025-with-collaborators-elias-abad-rocamora-and-prof-volkan-cevher-at-epfl",
          title: 'Submitted our paper “Query-free Attacks on Image-to-Image Models are Hard to Avoid” to...',
          description: "",
          section: "News",},{id: "projects-adversarial-attacks-on-i2i-generative-models",
          title: 'Adversarial Attacks on I2I Generative Models',
          description: "Adversarial robustness of diffusion models. LIONS lab, EPFL.",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/1_project/";
            },},{id: "projects-evolution-strategies-for-deep-rl-pretraining",
          title: 'Evolution Strategies for Deep RL Pretraining',
          description: "ES as pretraining for DQN/PPO. w/ Swiss Data Science Center.",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/2_project/";
            },},{id: "projects-chatsplaining-stem-tutoring",
          title: 'Chatsplaining: STEM Tutoring',
          description: "Fine-tuned Qwen3 + RAG + DPO for EPFL course QA.",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/3_project/";
            },},{id: "projects-wsi-resolution-impact-on-pathology-models",
          title: 'WSI Resolution Impact on Pathology Models',
          description: "Magnification effects on foundation model embeddings. LTS4 lab, EPFL.",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/4_project/";
            },},{id: "projects-uav-base-station-optimization-with-deep-rl",
          title: 'UAV Base Station Optimization with Deep RL',
          description: "PPO for aerial base station positioning in 5G/6G networks.",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%72%69%6F.%72%69%63%6F%69%62%61%6E%65%7A@%65%70%66%6C.%63%68", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MarioRicoIbanez", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mario-rico-ibáñez-6b5888225", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=U-WrIfQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
