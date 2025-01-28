import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const jsxHeading = <h1 id="heading">Namaste React using jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

const Headingcomponent = () => {
  return <h1>Namaste React functional component</h1>;
};

root.render(jsxHeading);
