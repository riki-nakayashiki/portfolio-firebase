import './css/styles.css';
import NavComponent from './components/NavComponent';
import AboutComponent from './components/AboutComponent';
import ProjectsComponent from './components/ProjectsComponent';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <section className='main-contents'>
        <div className='content-line'></div>
        <AboutComponent />
        <div className='content-line'></div>
        <ProjectsComponent/>
        <div className='content-line'></div>
      </section>
    </div>
  );
}

export default App;
