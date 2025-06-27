import React from "react";
class RandomImage extends React.Component {

  constructor(props){
    super(props);
    this.state={
        count:0,
        count2:2,
    }

  } 
  
  componentDidMount(){
    console.log("component did Mount");
    console.log("API-called");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("component did update");
    if(this.state.count != prevState.count)
    {
        console.log("API-called");
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {
            this.setState({
                count:this.state.count +1
            })
        }}>{this.state.count}</button>
         <button onClick={() => {
            this.setState({
                count2:this.state.count2 +1
            })
        }}>{this.state.count2}</button>
      </div>
    );
  }
}
export default RandomImage;
