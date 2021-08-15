import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import H2 from "./H2";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth > 425);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);
  useEffect(() => {
    // Setting up the timeline with scrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-h2",
        start: "400 bottom",
      },
    });

    // animating the about section's h2
    tl.to(".about-h2 .before", {
      width: "100%",
      duration: 1,
      ease: "power4.out",
    }).to(".about-h2 span", {
      x: 0,
      duration: 0.5,
      delay: -0.8,
    });

    // animating before el of about-me div only if it is desktop
    // there is .before class because the CSSRulePlugin does not work :(

    if (isDesktop) {
      tl.from(".about-me-wrapper .before", {
        x: "30%",
        opacity: 0,
      });
    }

    /*
      Animating about-me div as a whole while in tablet or higher resolution 
      On phones it does not have it's border-shadow and the effect is useless
    */
    if (isTablet) {
      tl.from(".about-me", {
        x: "10%",
        opacity: 0,
      });
    }
    // Animating the elements of my-skills div

    tl.to(".about-me h3 span", {
      duration: 0.4,
      y: 0,
    }).from(".about-me p", {
      opacity: 0,
      scale: 1.1,
      ease: "back.out(1.7)",
    });

    // animating before el as class on my-skills div only if it is desktop
    // there is .before class because the CSSRulePlugin does not work :(
    if (isDesktop) {
      tl.from(".my-skills-wrapper .before", {
        x: "-30%",
        opacity: 0,
      });
    }
    /*
      Animating my-skills div as a whole while in tablet or higher resolution 
      On phones it does not have it's border-shadow and the effect is useless
    */
    if (isTablet) {
      tl.from(".my-skills", {
        x: "-10%",
        opacity: 0,
      });
    }

    // Animating the elements of my-skills div
    tl.to(".my-skills h3 span", {
      duration: 0.4,
      y: 0,
    })
      .from(".my-skills ul", {
        opacity: 0,
        x: -10,
        ease: "back.out(1.7)",
      })
      .to(".my-skills span", {
        y: 0,
        stagger: 0.2,
      });
  }, []);
  return (
    <section id="about">
      <H2 className="about-h2">About</H2>
      <div className="wrapper">
        <div className="about-me-wrapper">
          <div className="about-me">
            <h3>
              <span style={spanStyle}>Me</span>
            </h3>
            <p>
              Hello, my name is Ventsislav! I live in Vratsa, Bulgaria. I have
              finished a Java course in my town and I had been in a summer
              workshop in Nemetschek. I learned Javascript and React on my own
              and I like creating web apps!
            </p>
          </div>
          <div className="before"></div>
        </div>
        <div className="my-skills-wrapper">
          <div className="my-skills">
            <h3>
              <span style={spanStyle}>My Skills</span>
            </h3>
            <ul className="skills">
              <li>
                <div className="info-holder">
                  <span>JAVASCRIPT, JAVA, PYTHON</span>
                </div>
              </li>
              <li>
                <div className="info-holder">
                  <span>HTML, CSS, SCSS</span>
                </div>
              </li>
              <li>
                <div className="info-holder">
                  <span>REACT, REDUX, GSAP</span>
                </div>
              </li>
              <li>
                <div className="info-holder">
                  <span>PHOTOSHOP, PREMIERE PRO, FIGMA</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="before"></div>
        </div>
      </div>
    </section>
  );
};

const spanStyle = { display: "block", transform: "translateY(-100%)" };

export default About;
