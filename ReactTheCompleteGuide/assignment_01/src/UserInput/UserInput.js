import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <div>
      <input
        className="classOne"
        type="text"
        onChange={props.changed}
        value={props.name}
      ></input>
    </div>
  );
};

export default userInput;
