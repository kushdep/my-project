import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate(); 

    //from function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/register", {
          name,
          email,
          password,
          phone,
          address,
          answer
        });
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(`Something went wrong`);
      }
    };

  return (
    <Layout title="Register E-commerce app">
      <div className="form-container">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is your Favourite sports"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
