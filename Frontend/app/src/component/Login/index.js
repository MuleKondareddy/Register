import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form className="text-center" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Enter Your password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="btn" className="btn bg-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
