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
            date="December 2020 - Present"
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
