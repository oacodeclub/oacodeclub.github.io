import React from "react";
import "./Title.css";
class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.name}</h1>;
  }
}

export default Title;
