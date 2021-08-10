const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="wrapper">
        <div className="about-me">
          <h3>Me</h3>
          <p>
            Hello, my name is Ventsy! I live in Vratsa, Bulgaria. I have
            finished a Java course in my town and I had been in a summer
            workshop in Nemetschek. I learned Javascript and React on my own and
            I like creating web apps!
          </p>
        </div>
        <div className="my-skills">
          <h3>My Skills</h3>
          <ul className="skills">
            <li>JAVASCRIPT, JAVA, PYTHON</li>
            <li>HTML, CSS, SCSS</li>
            <li>REACT, REDUX, GSAP</li>
            <li>PHOTOSHOP, PREMIERE PRO, FIGMA</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
