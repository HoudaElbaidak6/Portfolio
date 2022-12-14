import { Component } from "react";
import "./Projects.css";
import Titles from "../Titles/Titles";
import ProjectCard from "../ProjectCard/ProjectCard";
import ReverseCard from "../ReverseCard/ReverseCard";
import calculatrice from "../../images/calculatrice.PNG";
import Appvilla from "../../images/Appvilla.PNG";
import chatbot from "../../images/chatbot.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

class Projects extends Component {
  componentDidMount() {
    Aos.init({ duration: 3000 });
  }
  render() {
    return (
      <div className="projectsMain" id="thirdS" data-aos="fade-left">
        <div className="flex">
          <Titles number="02." title="Projects" />
          <div className="totalProjects">
            <ProjectCard
              img={calculatrice}
              projectitle="Calculator"
              paragraph="Building a web calculator is a great project, especially if you have just started learning JavaScript. It is quite simple for people of any skill level. This project covers the interactions with UI and key JavaScript methods."
              fL="Html"
              sL="Css"
              tL="Javascript"
              link="https://github.com/HoudaElbaidak6/Calculatrice"
              linkb="https://houdaelbaidak6.github.io/Calculatrice/"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
            />
            <ReverseCard
              img={Appvilla}
              projectitle="Appvilla"
              paragraph="Appvilla was website we tried to do in class in just 4 hours, We use the languages and frameworks we just learned which are Html , css and Bootstrap . Overall it was a fun challenge and a great practice "
              fL="Html"
              sL="Css"
              tL="Javascript"
              link="https://github.com/HoudaElbaidak6/appvilla"
              linkb="https://houdaelbaidak6.github.io/appvilla/"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
            />
            <ProjectCard
              img={chatbot}
              projectitle="Chatbot"
              paragraph="Working from home got you feeling lonely? Missing human social interaction? Well it's finally acceptable to suggest making yourself a nice chat bot to talk to instead of going out into the world."
              fL="React js"
              sL="Css"
              tL="Javascript"
              link="https://github.com/HoudaElbaidak6/smallprojects"
              linkb="https://houdaelbaidak6.github.io/smallprojects/"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
