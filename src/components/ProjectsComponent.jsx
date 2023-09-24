import internal from "../assets/internal.png";
import rpa from "../assets/rpa.png";
import bpo from "../assets/bpo.png";
import libraweb from "../assets/Libraweb.png";
import marketplace from "../assets/market-place.png";
import ecommerce from "../assets/e-commerce-app.png";

export default function ProjectsComponent() {
  return (
    <section className="contents" id="projects">
      <h1>Projects</h1>
      <section className="gallery">
        <section className="figure-wrap">
          <section className="pc-button"></section>
          <figure>
            <img src={internal} alt="internal" />
            <figcaption>
              <h3>Internal website development project</h3>
              <ul>
                <li>
                  Developed an internal website for over 10,000 employees to
                  track their completion of internal training courses,
                  collaborating with a team of 4 members.
                </li>
                <li>
                  Designed and implemented multiple web pages that interacted
                  with and retrieved data through a REST API, utilizing
                  React.js, Java, and MySQL
                </li>
                <li>
                  DStreamlined manual completion tracking processes, leading to
                  a monthly labor hour reduction of 100 hours
                </li>
                <li>Tool : Java, HTML, CSS, bootstrap, JavaScript and MySQL</li>
              </ul>
            </figcaption>
          </figure>
        </section>
        <section className="figure-wrap">
          <section className="pc-button"></section>
          <figure>
            <img src={bpo} alt="bpo" />
            <figcaption>
              <h3>Optimization and automation of operation project</h3>
              <ul>
                <li>
                  Optimized business process outsourcing operations through no
                  code/low code tool, Power Platform, and automated specific
                  aspects of the operation
                </li>
                <li>
                  Adapted to and mastered various new technologies with rapid
                  proficiency
                </li>
                <li>
                  Designed and implemented a new website for BPO operations
                  using Power Platform
                </li>
                <li>
                  Tested software for bugs and operating speed, fixing bugs and
                  documenting processes to increase efficiency by 20%
                </li>
                <li>
                  Tool : Power Platform (Power Apps, Power Automate, Dataverse)
                  and UiPath
                </li>
              </ul>
            </figcaption>
          </figure>
        </section>
        <section className="figure-wrap">
          <section className="pc-button"></section>
          <figure>
            <img src={rpa} alt="rpa" />
            <figcaption>
              <h3>RPA(Robotic process automation) development Project</h3>
              <ul>
                <li>
                  Developed over 20 virtual robots independently to automate
                  various customer operations, covering all stages from
                  requirements definition to operation
                </li>
                <li>
                  Enhanced operational efficiency by implementing automated
                  processes, resulting in monthly time savings of 300-500 hours
                  for clients
                </li>
                <li>
                  Led multiple small teams in the development of virtual robots
                  as a proficient team leader
                </li>
                <li>
                  Managed and oversaw the deployment of virtual robots through
                  UiPath Orchestrator, ensuring seamless execution and
                  performance monitoring
                </li>
                <li>Tool : UiPath (Robotic process automation tool)</li>
              </ul>
            </figcaption>
          </figure>
        </section>
        <section className="figure-wrap">
          <section className="pc-button"></section>
          <figure className="project-small">
            <img src={marketplace} alt="market" />
            <figcaption>
              <h3>Website development for market place</h3>
              <ul>
                <li>
                  Developed a website for market place using Vue.js,
                  collaborating with a team of three members.
                </li>
                <li>Designed and implemented most of pages</li>
                <li>Tool : HTML, CSS, PHP, Vue.js, MySQL, Git</li>
              </ul>
            </figcaption>
          </figure>
        </section>
        <section className="figure-wrap">
          <section className="pc-button"></section>
          <figure className="project-small">
            <img src={libraweb} alt="libraweb" />
            <figcaption>
              <h3>Website development for a library</h3>
              <ul>
                <li>
                  Developed a website for a library using Vue.js, collaborating
                  with a team of three members.
                </li>
                <li>Designed and implemented most of pages</li>
                <li>Tool : HTML, CSS, PHP, Vue.js, MySQL, Git</li>
              </ul>
            </figcaption>
          </figure>
        </section>
        <section className="figure-wrap">
          <section className="pc-button"></section>
          <figure className="project-small">
            <img src={ecommerce} alt="ecommerce" />
            <figcaption>
              <h3>Website development for e-commerce</h3>
              <ul>
                <li>
                  Developed a website for a e-commerce app using React.js,
                  collaborating with a team of four members.
                </li>
                <li>Designed and implemented some pages</li>
                <li>Tool : HTML, CSS, React.js, Git</li>
              </ul>
            </figcaption>
          </figure>
        </section>
      </section>
    </section>
  );
}
