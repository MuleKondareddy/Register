import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sign from "./component/Sign";
import Login from "./component/Login";
import Home from "./component/Home";

const App = () => {
  return (
    <div className="text-center">
      <h1>Hello World</h1>
      <p>Welcome to my app</p>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Sign />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
