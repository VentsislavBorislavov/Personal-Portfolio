import { useEffect } from "react";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/all";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
gsap.registerPlugin(CSSRulePlugin);
function App() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("h1 span", {
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "power4.out",
      stagger: 0.5,
    })
      .to(".section-links ul li", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: -0.7,
        ease: "power4.out",
        stagger: 0.1,
      })
      .to(".me img", {
        scale: 1,
        duration: 0.6,
        delay: -0.3,
        ease: "back.out(1.7)",
      })
      .to(".description span", {
        y: 0,
        duration: 1,
        ease: "power4.out",
      })
      .to(".description .after", {
        opacity: 1,
        delay: -0.4,
      })
      .to(".description .after", {
        width: "50%",
        duration: 1,
        ease: "power4.out",
        delay: -0.3,
      })
      .to(".scroll-down span", {
        duration: 0.4,
        opacity: 1,
        scale: 1,
        ease: "power4.out",
      })
      .to(".scroll-down svg", {
        opacity: 1,
        rotate: 360,
        delay: -0.4,
        duration: 1,
        ease: "power4.out",
      });
  }, []);
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
