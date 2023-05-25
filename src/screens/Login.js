import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import {Link, Navigate} from 'react-router-dom';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let Navigate = useNavigate();
  const [info, setinfo] = useState({  email: "", password: "" });
  const handleSubmitforlogin = async (e) => {
    e.preventDefault();
    const respnose = await fetch("http://localhost:8000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        email: info.email,
        password: info.password,
      }),
    });
    const json = await respnose.json();
    console.log(json);

    if (!json.success) {
      alert("enter correct email and password");
    }

    if (json.success) {
      localStorage.setItem("userEmail", info.email)
      localStorage.setItem("authToken", json.authToken)
      console.log(localStorage.getItem("authToken"))
      Navigate("/");
    }
  };
  const onChange = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="register-photo">
          <div className="form-container">
            <div className="image-holder"></div>
            <form onSubmit={handleSubmitforlogin}>
              <h2 className="text-center">
                <strong>Create</strong> an account.
              </h2>

              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={info.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={info.password}
                  onChange={onChange}
                />
              </div>

              <div className="form-group ">
                <button
                  className=" btn btn-success btn-block btn btn-sm-5"
                  type="submit"
                >
                  Log In
                </button>
              </div>
              <Link to="/signup" className="already">
                <h5>
                  don't have account? <strong>Sign up</strong>
                </h5>
              </Link>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
