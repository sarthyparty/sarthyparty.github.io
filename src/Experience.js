import React from "react";
import "./Experience.css";
import Info from "./Info";
import {Link} from "react-scroll"
class Experience extends React.Component {
  render() {
    return (
      <div class="experience">
        <h1>Experience</h1>
        <br/>
        <Info 
          title="Software Developer Intern @ Codeucate (2020-2021)"
          description="At first, I helped develop the course material for the courses. Then, I moved into the website development team, where I worked on a django backend and also worked a chatbot for the site."/>
        <br/>
        <Info 
          title="Project Lead @ Futurist Academy (2020 - Present)"
          description="Worked on a lot of my fun projects in here. Made an attendance tracking site for clubs, a tiger graph solution for soccer match predictions, and learned a lot of web development skills."/>
          <br/>
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
      </div>
    );
  }
}

export default Experience;
