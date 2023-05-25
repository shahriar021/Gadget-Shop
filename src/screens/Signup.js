import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Signup() {
  let Navigate = useNavigate();
  const [info,setinfo]=useState({name:"",email:"",password:""});
  const handleSubmit = async(e)=>{
      e.preventDefault()
      const respnose = await fetch("http://localhost:8000/api/userinfo",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name:info.name,email:info.email,password:info.password})
      });
      const json = await respnose.json()
      console.log(json)

      if(!json.success){
        alert("something went wrong")
      }

      if (json.success) {
        alert("registration successful");
        Navigate("/login")
      }


  }
  const onChange = (e)=>{
    setinfo({...info,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="register-photo">
          <div className="form-container">
            <div className="image-holder"></div>
            <form onSubmit={handleSubmit}>
              <h2 className="text-center">
                <strong>Create</strong> an account.
              </h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="name"
                  value={info.name}
                  onChange={onChange}
                />
              </div>
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
                  className="float-end btn btn-primary btn-block btn btn-sm-5"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <Link to="/login" className="already">
                <h5>
                  You already have an account? <strong>Login here.</strong>
                </h5>
              </Link>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
