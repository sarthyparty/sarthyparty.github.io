import { React, useState } from "react";
import "./Info.css";
import Xarrow from "react-xarrows";


function Info(props) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  if (expanded) {
    if (props.id == "fist") {
      return (
        <div>
        <div class="instr">
          <p id="instr">&nbsp;</p>
        </div>
          <div class="info">
          <div class="open" id={props.id}>
            <input
              type="button"
              onClick={handleClick}
              value={props.title + " @ " + props.location}
            />
          </div>
          <p>{props.description}</p>
          <h3>{props.date}</h3>
        </div>
        </div>
        
      );

    } else {
      return (
        <div class="info">
          <div class="open" id={props.id}>
            <input
              type="button"
              onClick={handleClick}
              value={props.title + " @ " + props.location}
            />
          </div>
          <p>{props.description}</p>
          <h3>{props.date}</h3>
        </div>
      );

    }
    
  } else if (props.id == "fist") {
    return (
      <div>
        <div class="instr">
          <p id="instr">Click here to see more!</p>
        </div>
        <Xarrow
                start="instr" //can be react ref
                end="first" 
                id="arrow"//or an id
            />
        <div class="info">
          <div class="open">
            <input
              type="button"
              onClick={handleClick}
              value={props.title + " @ " + props.location}
              id={props.id}
            />
          </div>
          <h3>{props.date}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div class="info">
        <div class="open">
          <input
            type="button"
            onClick={handleClick}
            value={props.title + " @ " + props.location}
            id={props.id}
          />
        </div>
        <h3>{props.date}</h3>
      </div>
    );
  }
}

export default Info;
