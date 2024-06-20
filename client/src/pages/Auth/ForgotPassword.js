import React from 'react'
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();


  //from function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer
      });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
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
    <Layout title={"Forgot Password E-Commerce App"}>
            <div className="form-container  ">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email"
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
              placeholder="Enter your Favourite Sport"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter new Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>

    </Layout>
  )
}

export default ForgotPassword
