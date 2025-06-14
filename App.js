const heading = React.createElement("h1", {id:"heading"}, "Hello world with React"); // this "heading is just an javascript object and not h1 element"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // converts the heading object into element and renders inside the root