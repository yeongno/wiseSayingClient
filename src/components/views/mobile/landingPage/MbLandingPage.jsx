import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/mobile/landingPage/MbLandingPage.scss";
import MbDrawer from "../drawer/MbDrawer";

function MbLandingPage() {
  //각 디바이스 마다 outlet을 불러오게 함으로 랜더링이 중복됨을 방지 하기 위한 루트 코드
  const Mb_Ref = useRef();
  const activity = Mb_Ref.current?.style.display;
  const [render, setRender] = useState(true);
  useEffect(() => {
    if (activity == "none") {
      setRender(false);
    } else {
      setRender(true);
    }
  }, []);
  return (
    <div className="Mb-container" ref={Mb_Ref}>
      <div className="MbLandingPage-container">
        <MbDrawer />
        <div className="MbLandingPage-wrapper">
          {render ? <></> : <Outlet />}
        </div>
      </div>
    </div>
  );
}

export default MbLandingPage;
