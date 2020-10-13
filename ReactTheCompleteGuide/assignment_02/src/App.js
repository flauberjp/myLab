import React, { useState } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import "./App.css";

function App() {
  const [textLength, setTextLength] = useState(0);

  const onChangeHandler = (event) => {
    setTextLength(event.target.value.length);
  };

  return (
    <div className="App">
      <input onChange={onChangeHandler} type="text" />
      <p>Length of the entered text: {textLength}</p>
      <ValidationComponent textLength={textLength} />
    </div>
  );
}

export default App;
