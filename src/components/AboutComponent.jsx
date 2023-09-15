import profilepic from "../assets/profilepic.png";

export default function AboutComponent() {
  return (
    <section className="contents" id="about">
      <figure>
        <img src={profilepic} alt="profilepic" />
        <figcaption>
          <h1>Hi there, I'm Riki !</h1>
          <p>
            Over 5 years in the tech industry at Accenture, excelled as a
            software engineer with expertise in web development, automation, and
            client operations optimization. Enhanced web development skills in
            Canada, embracing diverse perspectives.
          </p>
          {/* <p>
            With over five years of experience in the technology industry at
            Accenture, I possess diverse expertise as a software engineer,
            including web development, automation, and optimizing client
            operations using various technologies.
          </p>
          <p>
            Additionally, I enhanced my skills by learning web development in
            Canada, which broadened my technical knowledge and exposed me to
            different cultural perspectives. Through the integration of these
            experiences, I provide a comprehensive understanding of development
            techniques and various technologies to make meaningful contributions
            to any project.
          </p> */}
        </figcaption>
      </figure>
    </section>
  );
}
