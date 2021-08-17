import githubIcon from "../images/github-icon.svg";
import codesandboxIcon from "../images/codesandbox-icon.svg";
import webIcon from "../images/web-icon.svg";
import calcVideo from "../videos/react-calc.mp4";
import noteVideo  from "../videos/note-app.mp4"
import weatherVideo from "../videos/weather-appl.mp4"

export const projects = [
  {
    name: "Notes-app",
    technologies: ["React", "Redux", "firebase", "framer-motion"],
    video: noteVideo,
    links: [
      {
        site: "GitHub",
        link: "https://github.com/VentsislavBorislavov/react-notes-app",
        icon: githubIcon,
      },
      {
        site: "Notes-app",
        link: "https://react-note-app-b76e7.web.app/",
        icon: webIcon,
      },
    ],
  },
  {
    name: "Weather-app",
    technologies: ["React", "Redux", "Redux-toolkit", "gsap", "REST api"],
    video: weatherVideo,
    links: [
      {
        site: "GitHub",
        link: "https://github.com/VentsislavBorislavov/react-weather-app",
        icon: githubIcon,
      },
      {
        site: "Weather",
        link: "https://weather-react-v.netlify.app/",
        icon: webIcon,
      },
    ],
  },
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
];
