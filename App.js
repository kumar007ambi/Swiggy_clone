import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World From React!"
// );

//Nested Elements
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div",{ id: "child" },
//     //Making Siblings
//     [
//       React.createElement("h1", {}, "Namaste React 🚀"),
//       React.createElement("h2", {}, "I am an H2 Tag"),
//     ]),
//     React.createElement("div",{ id: "child2" },[
//       //Making Siblings
//       [
//         React.createElement("h1", {}, "I am an H1 Tag"),
//         React.createElement("h2", {}, "I am an H2 Tag"),
//       ],
//     ]),
// ]);
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//React.createElement=>Object=>HTMLElement(render) --> This is core react
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

//JSX -> HTML likes or XML likes syntax
//React Element
const JsxHeading = () => (
  <h1 id="heading" tabIndex="1">
    {" "}
    Namaste React using JSX 🚀
  </h1>
);

const num = 1000;
//Functional Component
const HeadingComponent = () => {
  return (
    <>
      <div id="container">
        {/* we can call function inside here also */}
        {JsxHeading()}
        <JsxHeading />
        <JsxHeading></JsxHeading>
        <h1 className="heading">Namaste React Funcional Component</h1>;
      </div>
      <div>
        <h1 className="heading">Namaste React Funcional Component</h1>;
      </div>
    </>
  );
};

//Functional Component(short hand for 1 line code)
// const HeadingComponent1 = () => (
//   <h1 className="heading">Namaste React Funcional Component</h1>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

//for functional component
root.render(<HeadingComponent />);
//root.render(jsxHeading);
