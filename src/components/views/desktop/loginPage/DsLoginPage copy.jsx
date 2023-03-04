import { async } from "q";
import React, { useEffect, useState } from "react";
import { auth, firebaseInstance } from "../../../../config/FireBaseConfig";
import UseCreateAcc from "../../../../hook/login/UseCreateAcc";
// import useCreateAcc from "../../../../hook/login/useCreateAcc";
import useGoogleLogin from "../../../../hook/login/useGoogleLogin";
import UseLoginAcc from "../../../../hook/login/UseLoginAcc";

function DsLoginPage() {
  const login = useGoogleLogin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
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
      const login = useGoogleLogin;
      login();
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
          <button onClick={login}>login with google</button>
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
          {/* <button onClick={useCreateAcc}>login</button> */}
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
          <button name="google" onClick={onSocialClick}>
            Continue with Google
          </button>
          <button name="github" onClick={onSocialClick}>
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default DsLoginPage;
