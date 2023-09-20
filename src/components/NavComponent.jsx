import { ImLinkedin, ImGithub, ImProfile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TbShip } from "react-icons/tb";
import { useEffect, useState } from "react";

export default function NavComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <section>
      <nav className={isScrolled ? "nav-scrolled" : ""}>
        {/* <a href="#" className="nav-name"> */}
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
        <ul class="bigger-menu">
          <li>
            <a href="#about">About</a>
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
        <section class="nav-links">
          <a href="mailto:riki.nakayashiki@gmail.com?subject=A Message from the portfolio">
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/riki-nakayashiki/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin />
          </a>
          <a
            href="https://github.com/riki-nakayashiki"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub />
          </a>
          <a
            href="https://drive.google.com/file/d/11wpjBKyiXnC0jIBzvDCHhLm57grbm8zR/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <ImProfile />
          </a>
        </section>
      </nav>
      {/* <details class="smaller-menu">
        <summary class="fa-solid fa-bars"></summary>
        <summary></summary>
        <ul>
          <li>
            <a href="#about">About</a>
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
      </details> */}
    </section>
  );
}
