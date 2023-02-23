import React, { Children, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import useLaindgScroll from "../../../../hook/useLaindgScroll";
import "../../../styles/desktop/landingPage/DsLandingPage.scss";
import DsHeader from "../header/DsHeader";
import DsMenuBar from "../menuBar/DsMenuBar";

function DsLandingPage() {
  const [isDesk, setIsDesk] = useState(false);
  const landing_Ref = useRef();
  const landingY = landing_Ref.current?.getBoundingClientRect().y;
  useEffect(() => {
    console.log(landingY);
  }, [landingY]);
  const nowy = useLaindgScroll();
  useEffect(() => {
    console.log(nowy);
  }, [nowy]);
  return (
    <div className="Ds-container">
      <div className="DsLandingPage-container">
        <DsHeader />
        <div ref={landing_Ref}>
          <DsMenuBar />
        </div>
        <div className="DsLandingPage-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DsLandingPage;
