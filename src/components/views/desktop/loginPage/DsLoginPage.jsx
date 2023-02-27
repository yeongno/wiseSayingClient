import React from "react";
import useGoogleLogin from "../../../../hook/useGoogleLogin";

function DsLoginPage() {
  const login = useGoogleLogin;
  return (
    <div className="Ds-container">
      <div className="DsLoginPage-container">
        <div className="DsLoginPage-wrapper">
          <button onClick={login}>login</button>
          <br />
          <button onClick={login}>login</button>
          <br />
          <button onClick={login}>login</button>
          <br />
          <button onClick={login}>login</button>
          <br />
          <button onClick={login}>login</button>
          <br />
          <button onClick={login}>login</button>
          <br />
          <button onClick={login}>login</button>
          <br />
          <button onClick={login}>login</button>
          <br />
          <button onClick={login}>login</button>
        </div>
      </div>
    </div>
  );
}

export default DsLoginPage;
