// import './App.css';
// import { Link } from "react-router-dom";
import React from "react";
import NavBar from "../Components/NavBar";
import Title from "../Components/Title";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Title name="Home" />
          <iframe
            src="https://docs.google.com/presentation/d/1ccBLi6HYT5JLZ23HMdbgZYEqaUeNKONeT-GaNPhrpHo/embed?start=false&loop=true&delayms=3000&slide=id.g9a34fb2cab_0_183"
            frameborder="0"
            width="480"
            height="299"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
      </div>
    );
  }
}

export default Home;