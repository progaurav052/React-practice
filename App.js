//const heading = React.createElement("h1", { id: "heading" }, "Hello world with React"); // this "heading is just an javascript object and not h1 element"
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); // converts the heading object into element and renders inside the root

// create an nested structure 
/*
<div id="top">
    <div id="parent">
       <h1></h1>
    </div>
</div>
*/

const jsonobject = React.createElement("div",
     { id: "top" },
      React.createElement("div", { id: "parent" },
         [React.createElement("h1", { id: "heading" }, "Nested component1"),React.createElement("h1", { id: "heading" }, "Nested component2")]));
root.render(jsonobject);

//there should be only one root which is used to render 
// we can see that using createElement we are making code ugly when writing nested structure
// Led to origin of JSX 