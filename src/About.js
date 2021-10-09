import React from "react"
import Typewriter from "typewriter-effect";
import myself from "./myself.jpg"


import "./About.css"
class About extends React.Component {
    render(props) {
      const intro = `I am a senior at Eden Prairie High School
      hoping to major in computer science in college. I enjoy
       messing around with code, playing tennis, and hanging out with
       my friends. I am open to chatting with anyone, please connect 
       with me on linkedin or any other social media.
       `;
      return <div class = "about">
        <div class = "box">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .changeDelay(50)
            .typeString('Hello! My name is Sarthak Agrawal.')
            .start();}}
          />
        </div>
        <br></br>
        <br></br>
        <div class = "content">
            <Typewriter
            onInit={(typewriter) => {
              typewriter
              .pauseFor(2500)
              .changeDelay(15)
              .typeString(intro)
              .stop()
              .start();}}
            />
          </div>
          <div class = "container">
            <img src = {myself} alt = "myself"></img>
            </div>
      </div>
      ;
    }
}

export default About