import AboutComponent from "./AboutComponent";
import ProjectsComponent from "./ProjectsComponent";
import SkillsComponent from "./SkillsComponent";
import ContactComponent from "./ContactComponent";

export default function MainComponent() {
  return (
    <section className="main-contents">
      <AboutComponent />
      <div className="content-space" id="projects-space"></div>
      <ProjectsComponent />
      <div className="content-space" id="skills-space"></div>
      <SkillsComponent />
      <div className="content-space" id="contact-space"></div>
      <ContactComponent />
      <div className="content-space" id="footer-space"></div>
      <footer>
        <p>&copy; Riki's portfolio - 2023. All rights reserved.</p>
      </footer>
    </section>
  );
}
