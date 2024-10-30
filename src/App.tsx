import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

function App() {
  const [isLoginRequired, setIsLoginRequired] = useState<boolean>(true);

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
            <>
              {console.log(isLoginRequired)}
              {isLoginRequired ? (
                <Route path="/" element={<Login  isLoginRequired={isLoginRequired} setIsLoginRequired={setIsLoginRequired}/>} />
              ) : (
                <Route path="/" element={<Home />} />
              )}
            </>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
