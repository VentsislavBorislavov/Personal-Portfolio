import { useState, useEffect } from "react";
import { ReactComponent as MenuIcon } from "../images/hamburger.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [showLinks, setShowLinks] = useState(window.innerWidth > 425);

  useEffect(() => {
    gsap.to(".intro-link span", {
      y: 0,
      scrollTrigger: {
        trigger: ".last-name",
        scrub: true,
        start: "100 200",
        end: "100 0",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".intro-link span", {
      yPercent: -100,
      scrollTrigger: {
        trigger: "footer h2",
        scrub: true,
        start: "50 100%",
        end: "50 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <nav>
      <a href="intro" className="intro-link">
        <span>Ventsislav</span>
      </a>
      <div className="section-links">
        <button onClick={() => setShowLinks(!showLinks)}>
          <MenuIcon />
        </button>
        {showLinks && (
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
