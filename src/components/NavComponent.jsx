import { ImLinkedin, ImGithub, ImProfile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TbShip } from "react-icons/tb";

export default function NavComponent() {
  return (
    <section>
      <nav>
        <a href="#" className="nav-name">
          <h1>
            <span>Riki</span>
            <br /> Nakayashiki
          </h1>
        </a>
        <TbShip className="animate" />
        <ul class="bigger-menu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <section class="nav-links">
          <a href="mailto:riki.nakayashiki@gmail.com?subject=A Message from the portfolio">
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/riki-nakayashiki-92193b262/"
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
            href="https://drive.google.com/file/d/1rTlhGE22EVmRtgYfpiIsRmwIz5HJohij/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <ImProfile />
          </a>
        </section>
      </nav>
      <details class="smaller-menu">
        {/* <summary class="fa-solid fa-bars"></summary> */}
        <summary></summary>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </details>
    </section>
  );
}