import { React, useState } from "react";
import "./Info.css";
import { FcCollapse, FcExpand } from "react-icons/fc";



function Info(props) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  if (expanded) {
    return (
      <div class="info">
        <div class="open" id={props.id}>
          <input
            type="button"
            onClick={handleClick}
            value={props.location}
          />
          <FcCollapse/>
        </div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <hr />
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
            value={props.location}
            id={props.id}
          />
          <FcExpand/>
        </div>
        <h4>{props.title}</h4>
        <hr />
        <h3>{props.date}</h3>
      </div>
    );
  }
}

export default Info;
