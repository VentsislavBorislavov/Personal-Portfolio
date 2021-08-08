import imageMe from "../images/me.png";
import { ReactComponent as ArrowDown } from "../images/arrow-down.svg";
const Intro = () => {
  return (
    <section id="intro">
      <h1>
        <span className="first-name">Ventsislav</span>
        <span className="last-name">Borislavov</span>
      </h1>
      <div className="me">
        <img src={imageMe} alt="me" />
        <span className="description">Passionate Programmer</span>
      </div>
      <div className="scroll-down">
        <span>Scroll</span>
        <ArrowDown />
      </div>
    </section>
  );
};

export default Intro;
