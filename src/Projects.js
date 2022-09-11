import React from "react";
import { projects } from "./Data.js";
import "./Projects.css";
import { Link } from "react-scroll";

class Projects extends React.Component {
  render() {
    return (
      <div class="projects">
        <h1>Projects</h1>
        <br/><br/>
        {projects.map((project) => (
          <div>
          <Project project={project} />
          </div>
        ))}
        <div class="next">
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
          >
          <br></br>
            <p>Go to Experience</p>
          </Link>
        </div>
      </div>
    );
  }
}

function Project(props) {
  return (
    <div class="project">
      <a href={props.project.link}>
        <div class="image">
          <img src={props.project.image} alt={props.project.name} />
          <div class="body">
          <h2>{props.project.name}</h2>
          <p>{props.project.description}</p>
        </div>
        </div>
        
      </a>
    </div>
  );
}

export default Projects;
