import React from "react";
import ReactDOM from "react-dom/client";



// const heading = React.createElement(
  //   "h1",
  //   { id: "heading", xyz: "abc" },
  //   "Hello World From React!"
// );

//Nested Elements 
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div",{ id: "child" },
    //Making Siblings
    [
      React.createElement("h1", {}, "Namaste React 🚀"),
      React.createElement("h2", {}, "I am an H2 Tag"),
    ]),
    React.createElement("div",{ id: "child2" },[
      //Making Siblings
      [
        React.createElement("h1", {}, "I am an H1 Tag"),
        React.createElement("h2", {}, "I am an H2 Tag"),
      ],
    ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
