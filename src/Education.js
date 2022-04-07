import React from "react";
import "./Education.css";
import Info from "./Info";
import { Link } from "react-scroll";

class Education extends React.Component {
  render() {
    return (
      <div class="education">
        <h1>Education</h1>
        <br />
        <br />
        <div>
          <Info
            title="PSEO Student"
            location="University of Minnesota"
            date="Sept. 2021 - Present"
            description="Took Computer Science, Math, and Economics courses as a highschool student."
          />
        </div>
        <br />
        <Info
          title="Student"
          location="Eden Prairie High School"
          date="Sept. 2018 - Present"
          description="Enjoyed AP Java, learned a lot of coding during COVID."
        />
        <br />
        <br />
        <div class="next">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <p>Go to Top</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Education;
