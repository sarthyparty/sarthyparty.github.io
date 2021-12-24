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
          title="PSEO Student @ University of Minnesota - Twin Cities (Sept. 2021 - Present)"
          description="Took Computer Science, Math, and Economics courses as highschool student at this University."/>
        <br/>
        <Info 
          title="Student @ Eden Prairie High School (Sept. 2018 - Present)"
          description="Enjoyed AP Java, learned a lot of coding during COVID."/>
      </div>
    );
  }
}

export default Education;