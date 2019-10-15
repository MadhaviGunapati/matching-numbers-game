import React from "react";
import ReactDOM from "react-dom";
import StarMatch from "./components/StarMatch";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <StarMatch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
