import "react-bootstrap"
import About from "./About"
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact"
import Education from "./Education";
import FadeIn from "react-fade-in/lib/FadeIn";

import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import React from "react"

class App extends React.Component {
  render() {
    return (
        <HashRouter>
            <div>
                {/* <ul className="sidebar">
                    <li><NavLink exact to="/">About</NavLink></li>
                    <li><NavLink to="/experience">Experience</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={About}/>
                    <Route path="/experience" component={Experience}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                </div> */}
                <About/>
                <br/><br/><br/><br/>

                <Projects/>
                <Experience/>
                <Education/>

            </div>
        </HashRouter>
        
    );
  }
} 

export default App;

