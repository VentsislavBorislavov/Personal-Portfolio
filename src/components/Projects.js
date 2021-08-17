import { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import Video from "./Video";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import H2 from "./H2";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef([]);
  useEffect(() => {
    //checks if it's display is <= 1000 because the elements orientation is diferent in this resolution
    const isTablet = window.innerWidth <= 1000;
    const topPosPercent = isTablet ? "-110%" : "-120%";
    const bottomPosPercent = isTablet ? "-100%" : "-70%";
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-h2",
        start: "bottom center",
        end: "bottom center",
      },
    });
    tl.from("#projects h2 .before", {
      duration: 1,
      width: 0,
      ease: "power4.out",
    }).to("#projects h2 span", {
      x: 0,
      duration: 1,
      delay: -0.5,
    });

    projectsRef.current.map((curr, idx) => {
      ScrollTrigger.create({
        trigger: curr,
        start: `top+=${topPosPercent} center`,
        end: `bottom+=${bottomPosPercent} center`,
        onEnter: () => {
          gsap.to(curr, {
            opacity: 1,
            yPercent: 0,
            y: 0,
            duration: 1,
            ease: "back.out(1.6)",
          });
        },
        onLeave: () => {
          if (idx < projectsRef.current.length - 1)
            gsap.to(curr, {
              opacity: 0,
              yPercent: -100,
              duration: 1,
              ease: "power4.out",
            });
        },
        onEnterBack: () => {
          if (idx < projectsRef.current.length - 1)
            gsap.to(curr, {
              opacity: 1,
              yPercent: 0,
              duration: 1,
              ease: "back.out(1.6)",
            });
        },
        onLeaveBack: () => {
          gsap.to(curr, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "power4.out",
          });
        },
      });
    });
  }, []);

  return (
    <section id="projects">
      <div className="h2-holder">
        <H2 className="projects-h2">Projects</H2>
      </div>
      <div className="all-projects">
        {projects.map((project, index) => (
          <div
            ref={(el) => (projectsRef.current[index] = el)}
            className="project"
            key={index}
          >
            <Video video={project.video} />
            <div className="info">
              <h3>{project.name}</h3>
              <h4>Used Technologies</h4>
              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <h4>Links</h4>
              <div className="project-links">
                {project.links.map((link, idx) => (
                  <a href={link.link} key={idx} className="link">
                    <img src={link.icon} alt="icon" className="link-icon" />
                    {link.site}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
