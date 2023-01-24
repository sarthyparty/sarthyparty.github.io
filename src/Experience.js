import React from "react";
import "./Experience.css";
import Info from "./Info";
import { Link } from "react-scroll";
import FadeIn from "react-fade-in";


class Experience extends React.Component {
  render() {
    return (
      <div class="experience">
        <FadeIn>
          <h1>Experience</h1>
          <br />
          <div>
            <Info
              title="Software Engineer Intern"
              location="Splunk"
              date="May 2023 - August 2023"
              description="I'll intern here in the summer!
              "
              id="first"
            />
          </div>
          <br/>
          <div>
            <Info
              title="Software Engineer Intern"
              location="Optum"
              date="June 2022 - August 2022"
              description="My team’s project is to build a monitoring dashboard for 22+ microservices that deliver critical information for Optum's various services including Optum Bank.
              Developed and deployed my own microservice to test the monitoring dashboard on by building the application with spring boot, setting a docker repository to store the image, initializing kubernetes pods with a deployment.yaml file, and building a Jenkins pipeline to rebuild and push the new image, and then restart the kubernetes pods.
              "
              id="first"
            />
          </div>
          <br/>
          <div>
            <Info
              title="Software Developer Intern"
              location="Codeucate"
              date="July 2020 - January 2021"
              description="At first, I helped develop the course material for the courses. Then, I moved into the website development team, where I worked on a django backend and also worked a chatbot for the site."
              id="first"
            />
          </div>
          <br />
          <Info
            title="Project Lead"
            location="Futurist Academy"
            description="Worked on a lot of my fun projects in here. Made an attendance tracking site for clubs, a tiger graph solution for soccer match predictions, and learned a lot of web development skills."
            date="December 2020 - May 2022"
          />
          <br />
          <br />
          <div class="next">
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              duration={500}
            >
              <p>Go to Education</p>
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default Experience;
