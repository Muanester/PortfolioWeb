import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// import ReactDOM from "react-dom";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(<App />);

// ReactDOM.render(<App />, document.querySelector("#root"));
