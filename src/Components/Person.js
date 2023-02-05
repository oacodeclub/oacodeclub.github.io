import "../App.css";
import profile from "../Assets/profile.png";
import React from "react";
import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

class Person extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card
        style={{ width: "18rem", alignItems: "center" }}
        bg="dark"
        text="white"
        className="rounded-3 m-3 p-3"
      >
        <img
          src={profile}
          width="50%"
          className="rounded-circle"
          alt="profile"
        />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.content}</Card.Text>
          <Card.Text>
            OA Code Club
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="">Email</Card.Link>
          <Card.Link href="">Discord</Card.Link>
          <Card.Link href="">Github</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Person;
