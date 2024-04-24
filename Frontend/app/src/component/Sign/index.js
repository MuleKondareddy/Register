import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => {
        navigate("/login");
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form className="text-center" onSubmit={handlesubmit}>
          <h1>Register</h1>
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </button>
        </form>
        <p>Already have an account Login</p>
        <Link to="/login" type="btn" className="btn bg-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Sign;
