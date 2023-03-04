import React from "react";
import useGoogleLogin from "../../../../hook/login/UseGoogleLogin";

function TbLoginPage() {
  // const login = useGoogleLogin();
  return (
    <div className="Tb-container">
      <div className="TbLoginPage-container">
        <div className="TbLoginPage-wrapper">
          <span>Tablate LoginPage</span> <br />
          <button>login</button>
        </div>
      </div>
    </div>
  );
}

export default TbLoginPage;
