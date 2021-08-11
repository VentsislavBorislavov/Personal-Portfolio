import { projects } from "../data";
import Video from "./Video";

const Projects = () => {
  return (
    <section id="projects">
      <h2>
        <span>Projects</span>
      </h2>
      <div className="all-projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
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
