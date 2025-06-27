import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    //this is the best place to recieve props also create state variables
    
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy-name",
        location: "Dummy-location",
        email: "Dummy-emai",
        avatar_url: "Dummy-url",
      },
    };
    console.log("component constructor")
  }
  async componentDidMount() {
    console.log("Component did mount");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate(prevProps,prevState) {
    if(this.state.userInfo!== prevState.userInfo)
    {
      console.log("API CALLED")
    }
    console.log("component did update");
  }
  componentWillUnmount(){
    console.log("component unmounted");
  }
  render() {
    console.log("component render");
    const { name, location, avatar_url, twitter_username } =
      this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>{name}</h2>
        <h4>{location}</h4>
        <h4>@{twitter_username}</h4>
      </div>
    );
  }
}

export default Userclass;
