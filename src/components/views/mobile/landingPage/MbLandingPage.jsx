import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import useWindowWidth from "../../../../hook/useWindowWidth";
import "../../../styles/mobile/landingPage/MbLandingPage.scss";
import MbDrawer from "../drawer/MbDrawer";

function MbLandingPage() {
  //각 디바이스 마다 outlet을 불러오게 함으로 랜더링이 중복됨을 방지 하기 위한 루트 코드
  const Mb_Ref = useRef();
  const [activity, setActivity] = useState("");
  const [render, setRender] = useState(true);
  const windth = useWindowWidth();

  useEffect(() => {
    const ac = window?.getComputedStyle(Mb_Ref.current).display;
    setActivity(ac);
  }, [Mb_Ref.current, windth]);
  useEffect(() => {
    console.log(activity);
    if (activity == "block") {
      setRender(true);
    } else if (activity == "none") {
      setRender(false);
    }
  }, [activity, windth]);
  return (
    <div className="Mb-container" ref={Mb_Ref}>
      <div className="MbLandingPage-container">
        <MbDrawer />
        <div className="MbLandingPage-wrapper">{render && <Outlet />}</div>
      </div>
    </div>
  );
}

export default MbLandingPage;
