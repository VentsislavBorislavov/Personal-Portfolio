import githubIcon from "../images/github-icon.svg";
import codesandboxIcon from "../images/codesandbox-icon.svg";
import webIcon from "../images/web-icon.svg";
import calcVideo from "../videos/react-calc.mp4";

export const projects = [
  {
    name: "React-Calculator",
    technologies: ["React", "Redux", "Redux-toolkit"],
    video: calcVideo,
    links: [
      {
        site: "GitHub",
        link: "https://github.com/VentsislavBorislavov/react-calculator",
        icon: githubIcon,
      },
      {
        site: "CodeSandbox",
        link: "https://nvcez.csb.app/",
        icon: codesandboxIcon,
      },
    ],
  },
  {
    name: "Notes-app",
    technologies: ["React", "Redux", "firebase", "framer-motion"],
    video: calcVideo,
    links: [
      {
        site: "GitHub",
        link: "https://github.com/VentsislavBorislavov/react-calculator",
        icon: githubIcon,
      },
      {
        site: "Notes-app",
        link: "https://nvcez.csb.app/",
        icon: webIcon,
      },
    ],
  },
  {
    name: "Weather-app",
    technologies: ["React", "Redux", "Redux-toolkit", "gsap", "REST api"],
    video: calcVideo,
    links: [
      {
        site: "GitHub",
        link: "https://github.com/VentsislavBorislavov/react-calculator",
        icon: githubIcon,
      },
      {
        site: "Weather",
        link: "https://nvcez.csb.app/",
        icon: webIcon,
      },
    ],
  },
];
