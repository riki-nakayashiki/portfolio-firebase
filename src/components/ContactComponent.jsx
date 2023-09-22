import { ImLinkedin, ImGithub, ImProfile } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export default function ContactComponent() {
  return (
    <section className="contents" id="contact">
      <h1>Contact</h1>
      <section className="send-mail">
        <p>
          {/* I would love to collaborate and contribute my skills to create <br />
          innovative and engaging digital experiences.
          <br /> */}
          Feel free to get in touch and let's discuss any opportunities!
        </p>
        <a href="mailto:riki.nakayashiki@gmail.com?subject=A Message from the portfolio">
          <MdEmail className="mail-icon" />
          {/* <i class="fa-solid fa-envelope"></i> */}
          {/* SEND AN EMAIL */}
        </a>
      </section>
      <span></span>
      <section className="links">
        <a
          href="https://www.linkedin.com/in/riki-nakayashiki/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin className="contact-icon" />
          {/* <i class="fa-brands fa-linkedin"></i> */}
          <p>Linkedin</p>
        </a>
        <a
          href="https://github.com/riki-nakayashiki"
          target="_blank"
          rel="noreferrer"
        >
          <ImGithub className="contact-icon" />
          {/* <i class="devicon-github-original"></i> */}
          <p>GitHub</p>
        </a>
        <a
          href="https://drive.google.com/file/d/11wpjBKyiXnC0jIBzvDCHhLm57grbm8zR/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <ImProfile className="contact-icon" />
          {/* <i class="fa-regular fa-file-lines"></i> */}
          <p>Resume</p>
        </a>
      </section>
    </section>
  );
}
