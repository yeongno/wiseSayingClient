import React from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/tablet/landingPage/TbLandingPage.scss";
function TbLandingPage() {
  return (
    <div className="Tb-container">
      <Outlet />
    </div>
  );
}

export default TbLandingPage;
