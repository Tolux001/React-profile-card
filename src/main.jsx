import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Images from "./component/image";
import Section from "./component/section";

function App() {
  return (
    <div className="mainContainer">
      <Images />
      <Section />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
