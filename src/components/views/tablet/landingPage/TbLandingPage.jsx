import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import useWindowWidth from "../../../../hook/useWindowWidth";
import "../../../styles/tablet/landingPage/TbLandingPage.scss";
import TbDrawer from "../drawer/TbDrawer";
function TbLandingPage() {
  //각 디바이스 마다 outlet을 불러오게 함으로 랜더링이 중복됨을 방지 하기 위한 루트 코드
  const Tb_Ref = useRef();
  const [activity, setActivity] = useState("");
  const [render, setRender] = useState(true);
  const windth = useWindowWidth();

  useEffect(() => {
    const ac = window?.getComputedStyle(Tb_Ref.current).display;
    setActivity(ac);
  }, [Tb_Ref.current, windth]);
  useEffect(() => {
    console.log(activity);
    if (activity == "block") {
      setRender(true);
    } else if (activity == "none") {
      setRender(false);
    }
  }, [activity, windth]);

  return (
    <div className="Tb-container" ref={Tb_Ref}>
      <div className="TbLandingPage-container">
        <TbDrawer />
        <div className="TbLandingPage-wrapper">{render && <Outlet />}</div>
      </div>
    </div>
  );
}

export default TbLandingPage;
