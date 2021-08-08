import { useState } from "react";
import { ReactComponent as MenuIcon } from "../images/hamburger.svg";
const Nav = () => {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <nav>
      <a href="#" className="intro-link">
        Ventsislav
      </a>
      <div className="section-links">
        <button onClick={() => setShowLinks(!showLinks)}>
          <MenuIcon />
        </button>
        {showLinks && (
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact me</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
