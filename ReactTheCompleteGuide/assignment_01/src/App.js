import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    inputValue: "initial value",
  };

  inputValueChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const style = {
      backgroundColor: "blue",
    };

    return (
      <div className="App">
        <UserInput
          name={this.state.inputValue}
          changed={this.inputValueChangeHandler}
        ></UserInput>
        <UserOutput style={style} username={this.state.inputValue} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
