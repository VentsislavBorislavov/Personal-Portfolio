import imageMe from "../images/me.png";
import { ReactComponent as ArrowDown } from "../images/arrow-down.svg";
const Intro = () => {
  return (
    <section id="intro">
      <h1 className="first-name">
        <span>Ventsislav</span>
      </h1>
      <h1 className="last-name">
        <span>Borislavov</span>
      </h1>
      <div className="me">
        <img src={imageMe} alt="me" />
        <div className="description">
          <div className="desc-cont">
            <span>Passionate Programmer</span>
          </div>
          <div className="after"></div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <span>Scroll</span>
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Intro;
