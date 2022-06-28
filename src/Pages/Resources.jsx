import React from "react";
// import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Title from "../Components/Title";

class Resources extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Title name="Resources" />
      </div>
    );
  }
}

export default Resources;