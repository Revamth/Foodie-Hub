import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";

const Applayout = () => {
  return (
    <div className="app">
      {/* // header
      // Body
      // footer */}
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Applayout />
  </React.StrictMode>
);
