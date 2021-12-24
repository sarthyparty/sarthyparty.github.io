import { React, useState } from "react";
import "./Info.css"

function Info(props) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded)
  }
  if (expanded) {
    return (
      <div class="info">
        <button onClick={handleClick}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </button>
      </div>
    );
  } else {
    return (
      <div class="info">
        <button onClick={handleClick}>
          <h2>{props.title}</h2>
        </button>
      </div>
    );
  }
}

export default Info;
