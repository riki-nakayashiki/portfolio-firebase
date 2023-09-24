import PopupComponent from "./PopupComponent";
import { ImLinkedin, ImGithub, ImProfile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TbShip } from "react-icons/tb";
import { useState } from "react";

export default function NavComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  let timeoutId;
  document.addEventListener("scroll", () => {
    if (timeoutId) return;
    timeoutId = setTimeout(function () {
      timeoutId = 0;
      setIsScrolled(window.scrollY > 0);
    }, 100);
  });

  return (
    <section>
      <nav className={isScrolled ? "nav-scrolled" : ""}>
        <a
          href="#"
          className={isScrolled ? "nav-name-scrolled nav-name" : "nav-name"}
        >
          <p className="title-name">
            <span>Riki</span>
            <br /> Nakayashiki
          </p>
        </a>
        {/* <TbShip className="animate" /> */}
        <TbShip className={isScrolled ? "animate" : "non-animate"} />
        <ul className="bigger-menu">
          <li>
            <a href="#about">Home</a>
          </li>
          <li>
            <a href="#projects-space">Projects</a>
          </li>
          <li>
            <a href="#skills-space">Skills</a>
          </li>
          <li>
            <a href="#contact-space">Contact</a>
          </li>
        </ul>
        <section className="nav-links">
          <a href="mailto:riki.nakayashiki@gmail.com?subject=A Message from the portfolio">
            <MdEmail className="nav-link-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/riki-nakayashiki/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin className="nav-link-icon" />
          </a>
          <a
            href="https://github.com/riki-nakayashiki"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub className="nav-link-icon" />
          </a>
          <a
            href="https://drive.google.com/file/d/11wpjBKyiXnC0jIBzvDCHhLm57grbm8zR/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <ImProfile className="nav-link-icon" />
          </a>
        </section>
        <PopupComponent />
      </nav>
    </section>
  );
}
