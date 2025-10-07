import type { ProjectCardProps } from '../components/projectCard';

export const projectsData: ProjectCardProps[] = [
  {
    title: "GSoC 2025: Rebuilding Mentorship Website",
    description: "Implemented new design for mentorship.kde.org transitioning it from static site into a dynamic contributor onboarding and recruitment website.",  
    image: "/gsoc.png",
    imageAlt: "Screenshot of GSoC mentorship website",
    skills: ["HuGo", "SCSS", "YAML", "Web Development"],
    links: {
      preview: "https://community.kde.org/GSoC/2025/StatusReports/Anish_Tak",
      github: "https://invent.kde.org/paulb/kde-mentor-programs-g-so-c-2025-project/"
    }
  },
  {
    title: "Win2Linux Chooser: KDE SoK Project",
    description: "Cross-platform GUI app recommending Linux distros based on user input and hardware, using a recommendation engine with hardware vectors.",
    image: "/win2linux.png",
    imageAlt: "Win2Linux Chooser GUI showing recommended Linux distributions",
    skills: ["Python", "PySide6", "Kirigami", "Open Source"],
    links: {
      preview: "https://community.kde.org/SoK/2025/StatusReport/Anish_Tak",
      github: "https://invent.kde.org/drowsywings/win-2-linux/"
    }
  },
  {
    title: "MDG Space: CLI Web Crawler",
    description: "Depth-limited BFS web crawler CLI in Go with BoltDB storage, tracking visited pages, extracting titles/metadata, and reporting crawl stats. Includes tests for crawler and HTML parser using Testify.",
    image: "/crawler.png",
    imageAlt: "CLI output showing MDG Space web crawler statistics",
    skills: ["Go", "cobra-cli", "Web Scraping", "Testify"],
    links: {
      preview: "https://github.com/drowsyWings/web-crawler#installation",
      github: "https://github.com/DrowsyWings/web-crawler"
    }
  },
  {
    title: "LeetCode Helper: VS Code Extension",
    description: "VS Code extension that fetches LeetCode problems via GraphQL, runs C++/Python code locally, and shows side-by-side actual vs expected outputs for easier debugging.",    image: "/extension.png",
    imageAlt: "VS Code showing LeetCode Helper extension interface",
    skills: ["TypeScript", "VSCode", "GraphQL", "Extension"],
    links: {
      preview: "https://marketplace.visualstudio.com/items?itemName=drowsywings.cph-for-leetcode",
      github: "https://github.com/DrowsyWings/VScodeExtension-for-leetcode"
    }
  },
  // {
  //   title: "P2P Payment Website",
  //   description: "Full-stack payment platform built with Next.js, TurboRepo, and PostgreSQL. Implements a bank webhook microservice in TypeScript to simulate and process external bank events.",
  //   image: "/images/payment-website-preview.png",
  //   imageAlt: "Payment website dashboard showing transactions",
  //   skills: ["Next.js", "PostgreSQL", "Monorepo", "Microservices"],
  //   links: {
  //     preview: "/preview",
  //     github: "https://github.com/DrowsyWings/paytm-clone"
  //   }
  // }
];
