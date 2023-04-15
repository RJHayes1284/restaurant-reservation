import react from "react";
import reactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

reactDOM.render(
  <react.StrictMode>
    <Router>
      <App />
    </Router>
  </react.StrictMode>,
  document.getElementById("root")
);
