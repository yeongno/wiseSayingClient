import React from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/mobile/landingPage/MbLandingPage.scss";
import MbDrawer from "../drawer/MbDrawer";

function MbLandingPage() {
  return (
    <div className="Mb-container">
      <div className="MbLandingPage-container">
        <MbDrawer />
        <div className="MbLandingPage-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MbLandingPage;
