import { footerLinks } from "../data";
import githubIcon from "../images/github-icon.svg";

const Footer = () => {
  return (
    <footer>
      <h2>
        <a href="#intro">Ventsislav Borislavov</a>
      </h2>
      <p className="more-projects">
        Find more of my projects at my{" "}
        <a href="https://github.com/VentsislavBorislavov">
          <img src={githubIcon} alt="github" />
          GitHub
        </a>
      </p>
      <h4>Connect with me</h4>
      <div className="links">
        {footerLinks.map((link) => (
          <a href={link.link} key={link.site}>
            {link.site} <img src={link.icon} alt="link icon" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
