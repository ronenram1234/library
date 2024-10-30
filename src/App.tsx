import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <div className="container">
        <div className="container bg-dark">
          <br />
          <h1 className="text-light text-center">Book Collection</h1>
          <br />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
