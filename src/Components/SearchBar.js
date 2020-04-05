import React, { Component } from "react";
import { Input } from "antd";
const { Search } = Input;

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress, false);
    //this.textInput.current.focus();
  }
  handleKeyPress(event) {
    event.preventDefault();
    if (event.key === "s") {
      console.log("U pressed s dude")
      //this.textInput.current.focus();
    }
  }
  render() {
    return (
      <div>
        <Search
          placeholder="Google Search"
          onSearch={(value) =>
            window.open(`https://www.google.com/search?q=${value}`, "_blank")
          }
          style={{
            position: "absolute",
            left: "35%",
            width: "30%",
            marginTop: "3.5%",
            textAlign: "center",
          }}
          enterButton={true}
          autoFocus
        />
      </div>
    );
  }
}
