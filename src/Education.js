import React from "react";
import "./Education.css";
import Info from "./Info";
import { Link } from "react-scroll";
import FadeIn from "react-fade-in/lib/FadeIn";

class Education extends React.Component {
  render() {
    return (
      <FadeIn>
      <div class="education">
        <h1>Education</h1>
        <br />
        <br />
        <Info
          title="Computer Science Student"
          location="University of Wisconsin"
          date="Sept. 2022 - Present"
          description="Well I just started, so not much to say. I am taking Programming III (which involves more advanced data structures and algorithms) and Intro to Computer Engineering. "
        />
        <br/>
        <div>
          <Info
            title="PSEO Student"
            location="University of Minnesota"
            date="Sept. 2021 - May 2022"
            description="Took Computer Science, Math, and Economics courses as a highschool student through a dual-enrollment program."
          />
        </div>
        <br />
        <Info
          title="Student"
          location="Eden Prairie High School"
          date="Sept. 2018 - June 2022"
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
      </FadeIn>
    );
  }
}

export default Education;
