import { useEffect } from "react";
import { footerLinks } from "../data/footer";
import githubIcon from "../images/github-icon.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "center 86%",
        end: "center 86%",
      },
    });
    tl.from("footer h2", {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: "power4.out",
    })
      .to("footer .more-projects", {
        y: 0,
        opacity: 1,
        delay: -0.6,
        duration: 1,
        ease: "power4.out",
      })
      .to("footer h4", {
        y: 0,
        opacity: 1,
        delay: -0.7,
        duration: 1,
        ease: "power4.out",
      })
      .to("footer .links", {
        y: 0,
        opacity: 1,
        delay: -0.7,
        duration: 1,
        ease: "power4.out",
      });
  }, []);

  return (
    <footer id="contact">
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
