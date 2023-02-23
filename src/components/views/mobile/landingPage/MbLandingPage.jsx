import React from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/mobile/landingPage/MbLandingPage.scss";

function MbLandingPage() {
  return (
    <div className="Mb-container">
      <Outlet />
    </div>
  );
}

export default MbLandingPage;
