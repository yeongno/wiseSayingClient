import React, { Children, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import useLaindgScroll from "../../../../hook/useLaindgScroll";
import "../../../styles/desktop/landingPage/DsLandingPage.scss";
import DsDrawer from "../drawer/DsDrawer";
import DsHeader from "../header/DsHeader";
import DsMenuBar from "../menuBar/DsMenuBar";

function DsLandingPage() {
  const topSection_Ref = useRef();

  //하단 상대 y값이 0 이하가 되면 플래그를 드로워에 줘서 활성화
  const dsbottom_Ref = useRef();
  const bottomY = dsbottom_Ref.current?.getBoundingClientRect().y;
  const [onBottom, setOnBottom] = useState(false);
  useEffect(() => {
    if (bottomY < 0) {
      setOnBottom(true);
    } else {
      setOnBottom(false);
    }
    console.log(bottomY);
  }, [bottomY]);

  return (
    <div className="Ds-container">
      <div className="DsLandingPage-container">
        <div className="DsLandingPage-topSection" ref={topSection_Ref}>
          <DsHeader />
          <DsMenuBar />
        </div>
        <DsDrawer onBottom={onBottom} />
        <div className="DsLandingPage-wrapper" ref={dsbottom_Ref}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DsLandingPage;
