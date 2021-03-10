import React from "react";
import Dashboard from "./views/Dashboard";
import "./styles.css";
// import "./dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router
} from "react-router-dom"
function App() {
  return (
    <Router>
      <Dashboard/>
    </Router>
  )
}

export default App;
