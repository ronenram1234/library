import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { User } from "./interfaces/User";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  const [isLoginRequired, setIsLoginRequired] = useState<boolean>(false);
  const [userName, setUserName] = useState<User>({
    email: "",
    pass: "",
  });

  return (
    <div>
      <div className="container">
        <div className="container bg-dark">
          <>
            

            <h1 className="text-light text-center pt-4 ">Book Collection</h1>
            {userName.email !== "" ? (
              <>
                <h6 className="text-light">Welcome {userName.email}</h6>
                <button className="btn btn-primary mb-4">Logout</button>
               
                
              </>
            ) : (
              <br />
            )}
          </>
        </div>

        <Router>
          <Routes>
            <>
              {console.log(isLoginRequired)}
              {isLoginRequired ? (
                <Route
                  path="/"
                  element={
                    <Login
                      isLoginRequired={isLoginRequired}
                      setIsLoginRequired={setIsLoginRequired}
                      setUserName={setUserName}
                    />
                  }
                />
              ) : (
                <Route path="/" element={<Home />} />
              )}
              <Route
                path="/register"
                element={
                  <Register userName={userName} setUserName={setUserName} />
                }
              />
            </>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
