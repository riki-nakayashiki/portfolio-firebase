import AboutComponent from "./AboutComponent";
import ProjectsComponent from "./ProjectsComponent";
import SkillsComponent from "./SkillsComponent";
import ContactComponent from "./ContactComponent";

export default function MainComponent() {
  return (
    <section className="main-contents">
      {/* <div className="content-line" id="about-line"></div> */}
      <AboutComponent />
      <div className="content-line" id="projects-line"></div>
      <ProjectsComponent />
      <div className="content-line"></div>
      <SkillsComponent />
      <div className="content-line"></div>
      <ContactComponent />
      <div className="content-line"></div>
    </section>
  );
}
