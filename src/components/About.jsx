import User from "./User";
import Userclass from "./Userclass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent Render")
    const Location = "Bengaluru";
    const email = "gaurav511pai@gmail.com";
    return (
      <div className="about-container">
        <h1>Our Team </h1>
        <Userclass name={"First"} Location={Location} email={email} />
        <Userclass name={"Second"} Location={Location} email={email} />
      </div>
    );
  }
}
export default About;
