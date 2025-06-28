import User from "./User";
import Userclass from "./Userclass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);


  }
  componentDidMount() {

  }
  render() {

    return (
      <div className="about-container">
        <h1>Our Team </h1>
        <Userclass />
      </div>
    );
  }
}
export default About;
