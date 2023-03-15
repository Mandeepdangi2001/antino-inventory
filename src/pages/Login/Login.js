import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';

const Login = ({
  option,
  userNameError,
  setUserNameError,
  emailChange,
  handelEmailChange,
  passwordChange,
  handlePasswordChange,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
  setsuccessMessage,
  successMessage,
  userName,
  setUsername,
  userSuccess,
  setUserSuccess,
  passwordSuccess,
  setPasswordSuccess,
  emailSuccess,
  setEmailSuccess,
 
}) => {
  const navigate = useNavigate();


  // useEffect(() => {
  //   if (token) {
  //     navigate("/dashboard");
  //   }
  //   else {
  //     navigate("/");
  //   }
  // }, [token]);

  const handleEmail = (e) => {
    setsuccessMessage("");
    setEmailError("");
    handelEmailChange(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswordError("");
    setsuccessMessage("");
    handlePasswordChange(e.target.value);
  };
  const handleUserName = (e) => {
    setUserNameError("");
    setsuccessMessage("");
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailChange !== "") {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (emailRegex.test(emailChange)) {
        setEmailError("");
        setEmailSuccess(true);
      } else {
        setEmailError("Invalid Email");
      }
    } else {
      setEmailError("Email Required");
    }
    if (passwordChange !== "") {
      const passwordLength = passwordChange.length;
      if (passwordLength < 8) {
        setPasswordError("Password must be a minimum of 8 characters");
      } else {
        setPasswordSuccess(true);
      }
    } else {
      setPasswordError("password Required");
    }
    if (userName !== "") {
      const userRegex = /^[A-Za-z]+$/;
      if (userRegex.test(userName)) {
        setUserNameError("");
        setUserSuccess(true);
      } else {
        setUserNameError("Invalid UserName");
      }
    } else {
      setUserNameError("Name Required");
    }
    if (
      passwordSuccess === true &&
      userSuccess === true &&
      option === false &&
      emailSuccess === true
    ) {
      const res = await axios
        .post("http://localhost:8080/register", {
          userName: userName,
          userEmail: emailChange,
          password: passwordChange,
          role: "O",
        })
        .then((res) => {
          console.log("dgwaddawd" + res.data.statusCode);
          if (res.data.statusCode == "200") {
            alert("user registered successfully");
            navigate("/");
          } else {
            alert("owner already exist");
          }
        })
        .catch((e) => console.log("Error aa gyi", e));

      setUsername("");
      handelEmailChange("");
      handlePasswordChange("");
    }

    if (passwordSuccess === true && option === true && userSuccess === true) {
      const res = await axios
        .post("http://localhost:8080/login", {
          userName: userName,
          password: passwordChange,
        })
        .then((res) => {
          console.log("dgwaddawd" + res.data.statusCode);
          
          if (res.data.statusCode == "200") {
           
            window.userName = res.data.response.userName;
            window.role = res.data.response.role;
            window.token = res.data.response.token;
            localStorage.setItem("Token", res.data.response.token)
            localStorage.setItem("UserName",res.data.response.userName)
            
            console.log("token..."+window.role)
            // alertFunction();
            alert("Login Successfully!!")
            
            // setToken(true);
            
              navigate("/dashboard");
          
             
          } else {
            alert("Incorrect username or password");
          }
         
        })
        .catch((e) => console.log("Error aa gyi", e));
      console.log(passwordSuccess, emailSuccess, option);

      handelEmailChange("");
      handlePasswordChange("");
    }
  };
  if (option === false) {
    return (
      <div>
        <form className="account-form" onSubmit={handleSubmit}>
          <div
            className={
              "account-form-fields " + (option === true ? "sign-in" : "sign-up")
            }
          >
            <input
              id="UserName"
              name="UserName"
              type="text"
              placeholder="UserName"
              className="form-control custom-input"
              onChange={handleUserName}
              value={userName}
            />
            {userNameError && <div className="error-msg">{userNameError}</div>}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              className="form-control custom-input"
              value={emailChange}
              onChange={handleEmail}
            />
            {emailError && <div className="error-msg">{emailError}</div>}
            <input
              id="password"
              name="password"
              value={passwordChange}
              type="password"
              placeholder="Password"
              className="form-control custom-input"
              onChange={handlePassword}
            />

            {passwordError && <div className="error-msg">{passwordError}</div>}
          </div>
          <button className="btn-submit-form" type="submit">
            {option === true ? "Sign in" : "Sign up"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <form className="account-form" onSubmit={handleSubmit}>
        <div
          className={
            "account-form-fields " + (option === true ? "sign-in" : "sign-up")
          }
        >
          <h3 className="h33">Welcome Back</h3>
          <input
            id="UserName"
            name="UserName"
            type="text"
            placeholder="UserName"
            className="form-control custom-input"
            onChange={handleUserName}
            value={userName}
          />
          {userNameError && <div className="error-msg">{userNameError}</div>}
          <input
            id="password"
            name="password"
            value={passwordChange}
            type="password"
            placeholder="Password"
            className="form-control custom-input"
            onChange={handlePassword}
          />

          {passwordError && <div className="error-msg">{passwordError}</div>}
        </div>
        <button className="btn-submit-form" type="submit">
          {option === true ? "Sign in" : "Sign up"}
        </button>
      </form>
      
    </div>
  );
};
export default Login;
