import React from "react";

export const ExampleComponent = (props) => {
  console.log("React from SDK:", React.version);
  return <div>Hello from Example Component 2 {props.text} </div>;
};
