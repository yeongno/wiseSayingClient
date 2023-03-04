import { async } from "q";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firebaseInstance } from "../../../../config/FireBaseConfig";
import UseCreateAcc from "../../../../hook/login/UseCreateAcc";
// import useCreateAcc from "../../../../hook/login/useCreateAcc";
import useGoogleLogin from "../../../../hook/login/UseGoogleLogin";
import UseLoginAcc from "../../../../hook/login/UseLoginAcc";
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";
import "../../../styles/desktop/loginPage/DsLoginPage.scss";

function DsLoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = (event) => {
    const socialName = event.target.name;
    if (socialName == "google") {
    }
    if (socialName == "github") console.log(socialName);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (newAccount) {
      await UseCreateAcc(email, password);
    } else {
      await UseLoginAcc(email, password);
    }
  };
  return (
    <div className="Ds-container">
      <div className="DsLoginPage-container">
        <div className="DsLoginPage-wrapper">
          <span
            onClick={() => {
              navigate("/mainpage");
            }}
          >
            EveryQT
          </span>
          <br />
          <button
            onClick={() => {
              console.log(auth.currentUser);
              auth.signOut();
            }}
          >
            logout
          </button>
          <br />
        </div>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
          <input
            type="submit"
            value={newAccount ? "Create Account" : "Sign In"}
          />
          {error}
        </form>
        <span onClick={toggleAccount}>
          {newAccount ? "Sign in" : "Create Account"}
        </span>
        {/* <button onClick={onCreateAcc}>aa</button> */}
        <div>
          <button name="github" onClick={onSocialClick}>
            Continue with Github
          </button>
        </div>
        {newAccount ? <RegisterSection /> : <LoginSection></LoginSection>}
      </div>
    </div>
  );
}

export default DsLoginPage;
