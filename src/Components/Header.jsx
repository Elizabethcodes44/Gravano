import "./Header.css";
import logo from "/logo.jpg";
import { Link } from "react-scroll";
export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="header_left">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="header_center">
          <ul className="header_list">
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                ABOUT US
              </Link>
            </li>

            <li>
              {" "}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
              >
                PROJECTS
              </Link>
            </li>

            <li>
              {" "}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
