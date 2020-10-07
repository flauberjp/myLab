import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  return (
    <div className="App">
      <UserInput></UserInput>
      <UserOutput />
      <UserOutput />
    </div>
  );
}

export default App;
