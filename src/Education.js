import React from "react";
import "./Education.css";
import Info from "./Info";
class Education extends React.Component {
  render() {
    return (
      <div class="education">
        <h1>Education</h1>
        <br/>
        <br/>
        <Info 
          title="PSEO Student"
          location="University of Minnesota"
          date="Sept. 2021 - Present"
          description="Took Computer Science, Math, and Economics courses as a highschool student."/>
        <br/>
        <Info 
          title="Student"
          location="Eden Prairie High School"
          date="Sept. 2018 - Present"
          description="Enjoyed AP Java, learned a lot of coding during COVID."/>
      </div>
    );
  }
}

export default Education;