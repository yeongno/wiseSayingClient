import React from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/desktop/landingPage/DsLandingPage.scss";

function DsLandingPage() {
  return (
    <div className="DsLandingPage-container">
      <div className="DsLandingPage-wrapper">
        <Outlet />
        12
      </div>
    </div>
  );
}

export default DsLandingPage;
