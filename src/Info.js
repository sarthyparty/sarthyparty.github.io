import { React, useState } from "react";
import "./Info.css";

function Info(props) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  if (expanded) {
    return (
      <div class="info">
        <div class="open">
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
  } else {
    return (
      <div class="info">
        <div class="open">
          <input
            type="button"
            onClick={handleClick}
            value={props.title + " @ " + props.location}
          />
        </div>
        <h3>{props.date}</h3>
      </div>
    );
  }
}

export default Info;
