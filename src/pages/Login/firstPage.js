import React, { useState } from "react";
import Login from "./Login";
// import "./login.css";
import AntinoLogo from "./img/AntinoLogo.png";

const FirstPage = () => {
  const [option, setOption] = React.useState(true);
  const [userNameError, setUserNameError] = useState("");
  const [emailChange, handelEmailChange] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordChange, handlePasswordChange] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setsuccessMessage] = useState();
  const [userName, setUsername] = useState("");
  const [userSuccess, setUserSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleClick = () => {
    setOption(false);
    setUserNameError("");
    setPasswordError("");
    setEmailError("");
    handelEmailChange("");
    handlePasswordChange("");
    setUsername("");
  };

  const handleClick2 = () => {
    setOption(true);
    setUserNameError("");
    setPasswordError("");
    setEmailError("");
    handelEmailChange("");
    handlePasswordChange("");
    setUsername("");
  };
  return (
    <div className="wholePage"> 
    <div className="firstpage">
      <div className="Logo">
        <img src={AntinoLogo} alt="" />
      </div>
      <div className="formConatiner">
        <header>
          <div
            className={
              "header-headings " + (option === true ? "sign-in" : "sign-up")
            }
          >
            <span>Sign in to your account</span>
            <span>Create an account</span>
          </div>
        </header>
        <ul className="options">
          <li
            className={option === true ? "active" : ""}
            onClick={handleClick2}
          >
            Sign in
          </li>
          <li
            className={option === false ? "active" : ""}
            onClick={handleClick}
          >
            Sign up
          </li>
        </ul>
        <Login
          option={option}
          setOption={setOption}
          userNameError={userNameError}
          setUserNameError={setUserNameError}
          emailChange={emailChange}
          handelEmailChange={handelEmailChange}
          passwordChange={passwordChange}
          handlePasswordChange={handlePasswordChange}
          emailError={emailError}
          passwordError={passwordError}
          setEmailError={setEmailError}
          setPasswordError={setPasswordError}
          successMessage={successMessage}
          setsuccessMessage={setsuccessMessage}
          userName={userName}
          setUsername={setUsername}
          setEmailSuccess={setEmailSuccess}
          emailSuccess={emailSuccess}
          passwordSuccess={passwordSuccess}
          setPasswordSuccess={setPasswordSuccess}
          userSuccess={userSuccess}
          setUserSuccess={setUserSuccess}
        />
      </div>
      </div>
      </div>
  );
};
export default FirstPage;
