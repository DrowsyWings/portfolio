import type { ProjectCardProps } from '../components/projectCard';

export const projectsData: ProjectCardProps[] = [
  {
    title: "GSoC 2025: Rebuilding Mentorship Website",
    description: "Implemented new design for mentorship.kde.org transitioning it from static site into a dynamic contributor onboarding and recruitment website.",  
    image: "/gsoc.png",
    imageAlt: "Screenshot of GSoC mentorship website",
    skills: ["HuGo", "SCSS", "YAML", "Web Development"], // Changed from 'tags' to 'skills'
    links: {
      preview: "https://community.kde.org/GSoC/2025/StatusReports/Anish_Tak", // Changed from 'liveDemo'
      github: "https://invent.kde.org/paulb/kde-mentor-programs-g-so-c-2025-project/" // Changed from 'viewSource'
    }
  },
  {
    title: "Win2Linux Chooser: KDE SoK Project",
    description: "Cross-platform GUI app recommending Linux distros based on user input and hardware specs, using a recommendation engine with hardware vectors and preferences.",
    image: "/win2linux.png",
    imageAlt: "Win2Linux Chooser GUI showing recommended Linux distributions",
    skills: ["Python", "PySide6", "Kirigami", "Open Source"], // Changed from 'tags' to 'skills'
    links: {
      preview: "https://community.kde.org/SoK/2025/StatusReport/Anish_Tak", // Changed from 'liveDemo'
      github: "https://invent.kde.org/drowsywings/win-2-linux/" // Changed from 'viewSource'
    }
  },
  {
    title: "MDG Space: CLI Web Crawler",
    description: "A depth-limited BFS web crawler CLI built in Go with BoltDB for storage, tracking visited pages, extracting titles/metadata, and reporting detailed crawl statistics.",
    image: "/crawler.png",
    imageAlt: "CLI output showing MDG Space web crawler statistics",
    skills: ["Go", "cobra-cli", "Web Scraping", "Testify"], // Changed from 'tags' to 'skills'
    links: {
      preview: "https://github.com/drowsyWings/web-crawler#installation", // Changed from 'liveDemo'
      github: "https://github.com/DrowsyWings/web-crawler" // Changed from 'viewSource'
    }
  },
  {
    title: "LeetCode Helper: VS Code Extension",
    description: "VS Code extension to fetch LeetCode problems via GraphQL, run C++/Python code locally, and display side-by-side actual vs expected outputs for easy debugging inside the editor.",
    image: "/extension.png",
    imageAlt: "VS Code showing LeetCode Helper extension interface",
    skills: ["TypeScript", "VSCode", "GraphQL", "Extension"], // Changed from 'tags' to 'skills'
    links: {
      preview: "https://marketplace.visualstudio.com/items?itemName=drowsywings.cph-for-leetcode", // Changed from 'liveDemo'
      github: "https://github.com/DrowsyWings/VScodeExtension-for-leetcode" // Changed from 'viewSource'
    }
  },
  // {
  //   title: "P2P Payment Website",
  //   description: "Full-stack payment platform built with Next.js, TurboRepo, and PostgreSQL. Implements a bank webhook microservice in TypeScript to simulate and process external bank events.",
  //   image: "/images/payment-website-preview.png",
  //   imageAlt: "Payment website dashboard showing transactions",
  //   skills: ["Next.js", "PostgreSQL", "Monorepo", "Microservices"], // Changed from 'tags' to 'skills'
  //   links: {
  //     preview: "/preview", // Changed from 'liveDemo'
  //     github: "https://github.com/DrowsyWings/paytm-clone" // Changed from 'viewSource'
  //   }
  // }
];
