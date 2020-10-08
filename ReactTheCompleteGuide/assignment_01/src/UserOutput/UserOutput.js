import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p style={props.style}>username: {props.username}</p>
      <p>Paragraph 2</p>
    </div>
  );
};

export default userOutput;
