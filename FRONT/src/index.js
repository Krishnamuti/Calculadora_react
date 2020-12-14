import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./main/Calculator";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
      <Calculator />
    </div>
  </React.StrictMode>,
  rootElement
);
