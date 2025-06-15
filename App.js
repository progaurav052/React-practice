import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element (which is nothing but javascript object)==> on rendering ==> HTML element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React uisng React.create Element🚀"
);
console.log(heading);

// jsx heading is also an react element , this conversion is done by babel , which converts jsx to js code (this js code return react element which is javascript object)
const jsxheading = <h1 id="heading">Namaste React using JSX</h1>;
console.log(jsxheading);
root.render(jsxheading);
