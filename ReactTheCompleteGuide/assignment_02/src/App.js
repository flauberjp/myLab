import React, { useState } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import "./App.css";
import CharComponent from "./CharComponent/CharComponent";

function App() {
  const [textLength, setTextLength] = useState(0);
  const [textValue, setTextValue] = useState("");

  const onChangeHandler = (event) => {
    setTextLength(event.target.value.length);
    setTextValue(event.target.value);
  };

  let charComponents = null;

  const deleteCharComponentHandler = (charComponentIndex) => {
    const textValueInArray = textValue.split("");
    textValueInArray.splice(charComponentIndex, 1);
    setTextValue(textValueInArray.join(""));
    console.log(charComponents);
  };

  if (textLength > 0) {
    charComponents = (
      <div>
        {textValue.split("").map((char, index) => {
          return (
            <CharComponent
              key={index}
              char={char}
              onclick={() => deleteCharComponentHandler(index)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <input value={textValue} onChange={onChangeHandler} type="text" />
      <p>Length of the entered text: {textLength}</p>
      <ValidationComponent textLength={textLength} />
      {charComponents}
    </div>
  );
}

export default App;
