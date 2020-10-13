import React from "react";

const validationComponent = (props) => {
  let output = "Text too short";

  if (props.textLength >= 5) {
    output = "Text long enough";
  }
  return (
    <div>
      <p>ValidationComponent</p>
      <p>{output}</p>
    </div>
  );
};

export default validationComponent;
