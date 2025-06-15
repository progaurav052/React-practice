import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element (which is nothing but javascript object)==> on rendering ==> HTML element
// jsx heading is also an react element , this conversion is done by babel , which converts jsx to js code (this js code return react element which is javascript object)
const Para = () => {
  return (
    <div>
      <h2>H2 component</h2>
      <p>Para component</p>
    </div>
  );
};

const title = (
  <div>
    <p>Hi this is Title element</p>
    <Para />
  </div>
);

// functional component ==> function which return jsx
// Gives Example of component composition , component composed with another
const HeadingComponent = () => {
  return (
    <div>
      <h1>Namaste react using functional component</h1>
      {title}
      <Para />
    </div>
  );
};

root.render(<HeadingComponent />); // to render function component
