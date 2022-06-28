import React from "react";
// import { Link } from "react-router-dom";
import Person from "../Components/Person";
import NavBar from "../Components/NavBar";
import Title from "../Components/Title";
import Container from "react-bootstrap/Container";

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Title name="About" />
        <Container className="col d-grid gap-3">
        <Container className="row justify-content-center">
          <Person name="Angelina Z" content="President, c/o 2023" />
          <Person name="Anna L" content="Vice President, c/o 2023" />
          <Person name="Veronica S" content="Secretary, c/o 2025" />
        </Container>
        <Container className="row justify-content-center">
          <Person name="Sean K" content="Treasurer, c/o 2025" />
          <Person name="Derek M" content="Project Chair, c/o 2024" />
          <Person name="Trisha P" content="Public Relations, c/o 2025" />
        </Container>
        <Container className="row justify-content-center">
          <Person name="Eric V" content="Hack Club Director, c/o 2023" />
          <Person name="Vince V" content="Hack Club Director, c/o 2024" />
        </Container>
        </Container>
      </div>
    );
  }
}

export default About;