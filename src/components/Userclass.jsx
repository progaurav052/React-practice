import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    //this is the best place to recieve props also create state variables
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    // all the state variables are bundled inside this object
    console.log(`${this.props.name} class component Constructor`);

  }
  componentDidMount(){
    console.log(`${this.props.name} child Component did mount`);
  }
  render() {
    console.log(`${this.props.name} child Render`);
    const { name, email, Location } = this.props;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count: {this.state.count}
        </button>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 2,
            });
          }}
        >
          Count2: {this.state.count2}
        </button>
        <h2>Name :{name}</h2>
        <h4>Location :{email}</h4>
        <h4>email:{Location}</h4>
      </div>
    );
  }
}

export default Userclass;
