import React from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/tablet/landingPage/TbLandingPage.scss";
import TbDrawer from "../drawer/TbDrawer";
function TbLandingPage() {
  return (
    <div className="Tb-container">
      <div className="TbLandingPage-container">
        <TbDrawer />
        <div className="TbLandingPage-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TbLandingPage;
