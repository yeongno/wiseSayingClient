import React, { Children, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import useLaindgScroll from "../../../../hook/useLaindgScroll";
import "../../../styles/desktop/landingPage/DsLandingPage.scss";
import DsDrawer from "../drawer/DsDrawer";
import DsHeader from "../header/DsHeader";
import DsMenuBar from "../menuBar/DsMenuBar";

function DsLandingPage() {
  const landing_Ref = useRef();
  const dsDrawer_Ref = useRef();
  const topSection_Ref = useRef();

  //랜딩페이지에 출력되는 높이만큼 drawer의 container 높이 값을 변경
  useEffect(() => {
    const landingHeight = window.getComputedStyle(landing_Ref.current);
    dsDrawer_Ref.current.style.minHeight = landingHeight.height;
  }, []);

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
  }, [bottomY]);

  return (
    <div className="Ds-container">
      <div className="DsLandingPage-container" ref={landing_Ref}>
        <div className="DsLandingPage-topSection" ref={topSection_Ref}>
          <DsHeader />
          <DsMenuBar />
        </div>
        <div className="DsDrawer-wrapper" ref={dsDrawer_Ref}>
          <DsDrawer onBottom={onBottom} />
        </div>
        <div className="DsLandingPage-wrapper" ref={dsbottom_Ref}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DsLandingPage;
