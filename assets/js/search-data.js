// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications, working papers, and other / policy work, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-new-voxeu-column-on-trade-secrets-and-supply-chains",
        
          title: "New VoxEU column on trade secrets and supply chains",
        
        description: "A short VoxEU/CEPR column on our new JEEA paper &quot;Exclusive Secrets.&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/voxeu-exclusive-secrets/";
          
        },
      },{id: "news-our-field-experiment-paper-with-ammon-salter-on-firms-knowledge-sourcing-from-universities-was-accepted-at-research-policy",
          title: 'Our field-experiment paper with Ammon Salter on firms’ knowledge sourcing from universities was...',
          description: "",
          section: "News",},{id: "news-our-team-science-study-comparing-human-only-ai-assisted-and-ai-led-research-teams-on-assessing-reproducibility-appeared-in-proceedings-of-the-national-academy-of-sciences",
          title: 'Our team-science study comparing human-only, AI-assisted, and AI-led research teams on assessing reproducibility...',
          description: "",
          section: "News",},{id: "news-i-joined-skema-business-school-as-assistant-professor-of-economics-based-at-the-sophia-antipolis-campus",
          title: 'I joined SKEMA Business School as Assistant Professor of Economics, based at the...',
          description: "",
          section: "News",},{id: "news-our-paper-exclusive-secrets-with-giacomo-calzolari-and-alireza-naghavi-on-how-weak-trade-secret-protection-narrows-suppliers-buyer-networks-was-accepted-at-the-journal-of-the-european-economic-association-we-summarise-the-findings-in-a-voxeu-column",
          title: 'Our paper Exclusive Secrets, with Giacomo Calzolari and Alireza Naghavi, on how weak...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv-Angenendt.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%76%69%64@%64%61%74%61%6E%65%63%6F%6E.%6F%72%67", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=AAVc4R8AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9583-6289", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/datanecon", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/datanecon", "_blank");
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
