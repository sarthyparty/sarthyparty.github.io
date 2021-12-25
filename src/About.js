import React from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-scroll";

import "./About.css";
class About extends React.Component {
  render(props) {
    const intro =
      "I code websites, and I am exploring NLP.";
    return (
      <div class="about">
        <div class="box">
          <FadeIn>Hello, I'm Sarthak.</FadeIn>
        </div>
        <br></br>
        <div class="content">
          <FadeIn>
            {" "}
            {intro}
            <br></br>
            <div class="next">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                <p>Go to Experience</p>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default About;
