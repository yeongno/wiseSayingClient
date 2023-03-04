import React from "react";
import useGoogleLogin from "../../../../hook/login/UseGoogleLogin";

function MbLoginPage() {
  // const login = useGoogleLogin();
  return (
    <div className="Mb-container">
      <div className="MbLoginPage-container">
        <div className="MbLoginPage-wrapper">
          <span>Mobile LoginPage</span> <br />
          <button>login</button>
        </div>
      </div>
    </div>
  );
}

export default MbLoginPage;
