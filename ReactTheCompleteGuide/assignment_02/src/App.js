import React, { useState } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import "./App.css";
import CharComponent from "./CharComponent/CharComponent";

function App() {
  const [textLength, setTextLength] = useState(0);
  const [textValue, setTextValue] = useState(0);

  const onChangeHandler = (event) => {
    setTextLength(event.target.value.length);
    setTextValue(event.target.value);
  };

  let charComponents = null;

  if (textLength > 0) {
    charComponents = (
      <div>
        {textValue.split("").map((char) => {
          return <CharComponent char={char} />;
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <input onChange={onChangeHandler} type="text" />
      <p>Length of the entered text: {textLength}</p>
      <ValidationComponent textLength={textLength} />
      {charComponents}
    </div>
  );
}

export default App;
