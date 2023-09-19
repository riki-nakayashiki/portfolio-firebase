export default function ContactComponent() {
  return (
    <section class="contents" id="contact">
      <h1>Contact</h1>
      <section class="send-mail">
        <p>
          I would love to collaborate and contribute my skills to create <br />
          innovative and engaging digital experiences.
          <br />
          Feel free to get in touch and let's discuss any opportunities!
        </p>
        <a href="mailto:riki.nakayashiki@gmail.com?subject=A Message from the portfolio">
          <i class="fa-solid fa-envelope"></i>
          SEND ME AN EMAIL
        </a>
      </section>
      <span></span>
      <section class="links">
        <a
          href="https://www.linkedin.com/in/riki-nakayashiki-92193b262/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
          <p>Linkedin</p>
        </a>
        <a
          href="https://github.com/riki-nakayashiki"
          target="_blank"
          rel="noreferrer"
        >
          <i class="devicon-github-original"></i>
          <p>GitHub</p>
        </a>
        <a
          href="https://drive.google.com/file/d/1rTlhGE22EVmRtgYfpiIsRmwIz5HJohij/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-regular fa-file-lines"></i>
          <p>Resume</p>
        </a>
      </section>
    </section>
  );
}
