import React from "React";
import ReactDOM from "React-dom";
import App from "./App";
import { BrowserRouter as Router } from "React-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
