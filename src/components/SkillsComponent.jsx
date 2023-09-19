// import { FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";

export default function SkillsComponent() {
  return (
    <section class="contents" id="skills">
      <h1>Skills</h1>
      <section>
        <section class="skill-category">
          <section class="skill-border">
            <h3>Frontend</h3>
            <div></div>
          </section>
          <section class="skill-elements">
            <aside>
              {/* <FaHtml5 className="skill-icon" /> */}
              <i class="devicon-html5-plain colored"></i>
              <p>HTML</p>
            </aside>
            <aside>
              {/* <FaCss3Alt className="skill-icon" /> */}
              <i class="devicon-css3-plain colored"></i>
              <p>CSS</p>
            </aside>
            <aside>
              {/* <FaSass /> */}
              <i class="devicon-sass-original colored"></i>
              <p>SASS, SCSS</p>
            </aside>
            <aside>
              <i class="devicon-bootstrap-plain colored"></i>
              <p>Bootstrap</p>
            </aside>
            <aside>
              <i class="devicon-javascript-plain colored"></i>
              <p>JavaScript</p>
            </aside>
            <aside>
              <i class="devicon-vuejs-plain colored"></i>
              <p>Vue.js</p>
            </aside>
            <aside>
              <i class="devicon-react-original colored"></i>
              <p>React.js</p>
            </aside>
            <aside>
              <i class="devicon-jquery-plain colored"></i>
              <p>JQuery</p>
            </aside>
          </section>
        </section>
        <section class="skill-category">
          <section class="skill-border">
            <h3>Backend</h3>
            <div></div>
          </section>
          <section class="skill-elements">
            <aside>
              <i class="devicon-php-plain colored"></i>
              <p>PHP</p>
            </aside>
            <aside>
              <i class="devicon-java-plain colored"></i>
              <p>JAVA</p>
            </aside>
          </section>
        </section>
        <section class="skill-category">
          <section class="skill-border">
            <h3>Others</h3>
            <div></div>
          </section>
          <section class="skill-elements">
            <aside>
              <i class="devicon-mysql-plain colored"></i>
              <p>MySQL</p>
            </aside>
            <aside>
              <i class="fa-brands fa-square-git"></i>
              <p>Git</p>
            </aside>
            <aside>
              <i class="fa-solid fa-robot"></i>
              <p>UiPath</p>
            </aside>
            <aside>
              <i class="fa-brands fa-microsoft"></i>
              <p>Power Platform</p>
            </aside>
            <aside>
              <i class="fa-solid fa-file-excel"></i>
              <p>Excel</p>
            </aside>
            <aside>
              <i class="fa-regular fa-file-word"></i>
              <p>Word</p>
            </aside>
            <aside>
              <i class="fa-solid fa-file-powerpoint"></i>
              <p>PowerPoint</p>
            </aside>
          </section>
        </section>
        <section class="skill-category">
          <section class="skill-border">
            <h3>Personality</h3>
            <div></div>
          </section>
          <section class="skill-elements">
            <aside>
              <i class="fa-solid fa-graduation-cap"></i>
              <p>Fast learner</p>
            </aside>
            <aside>
              <i class="fa-solid fa-people-arrows"></i>
              <p>Good communicator</p>
            </aside>
            <aside>
              <i class="fa-solid fa-people-group"></i>
              <p>Team worker</p>
            </aside>
            <aside>
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              <p>Problem solver</p>
            </aside>
            <aside>
              <i class="fa-sharp fa-solid fa-person-circle-check"></i>
              <p>Adaptability</p>
            </aside>
          </section>
        </section>
      </section>
    </section>
  );
}
