import githubIcon from "../images/github-icon.svg";
import codesandboxIcon from "../images/codesandbox-icon.svg";
import webIcon from "../images/web-icon.svg";
import facebookIcon from "../images/facebook-icon.svg";
import linkedinIcon from "../images/linkedin-icon.svg";
import emailIcon from "../images/email-icon.svg";
import calcVideo from "../videos/react-calc.mp4";
import noteVideo  from "../videos/note-app.mp4"

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

export const footerLinks = [
  {
    site: "LinkedIn",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/vencislav-borislavov-2b2145217",
  },
  {
    site: "Facebook",
    icon: facebookIcon,
    link: "https://www.facebook.com/Vencislav.k.b/",
  },
  {
    site: "Email",
    icon: emailIcon,
    link: "mailto:vkosevb@gmail.com",
  },
];

export const skills = [
  "JAVASCRIPT, JAVA, PYTHON",
  "HTML, CSS, SCSS",
  "REACT, REDUX, GSAP",
  "PHOTOSHOP, PREMIERE PRO, FIGMA",
];
