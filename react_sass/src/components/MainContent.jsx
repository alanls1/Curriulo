import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import TechnologiesContainer from "./TechnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";

const mainContent=()=> {
  return (
    <main id="main-content">
        <AboutContainer/>
        <TechnologiesContainer/>
        <ProjectsContainer/>

        
    </main>)

}

export default mainContent
