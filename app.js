import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", { id: "heading" }, "Hello from child"),
    React.createElement("h1", { id: "heading" }, "Hello from child2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
