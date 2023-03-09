import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useTurnResponsive from "../../../../hook/useTurnResponsive";
import useWindowWidth from "../../../../hook/useWindowWidth";
import { turnDevice } from "../../../../redux/_actions/turn_action";
import "../../../styles/tablet/landingPage/TbLandingPage.scss";
import TbDrawer from "../drawer/TbDrawer";
function TbLandingPage() {
  //각 디바이스 마다 outlet을 불러오게 함으로 랜더링이 중복됨을 방지 하기 위한 루트 코드
  const Tb_Ref = useRef();
  const windth = useWindowWidth();
  const dispatch = useDispatch();
  const DEVICE = useSelector((state) => state?.turn?.turnDevice);

  useEffect(() => {
    const activity = window?.getComputedStyle(Tb_Ref.current).display;
    if (activity == "block") {
      dispatch(turnDevice("TABLET_DEVICE"));
    } else if (activity == "none") {
    }
  }, [windth]);

  return (
    <>
      <div className="Tb-container" ref={Tb_Ref}>
        <div className="TbLandingPage-container">
          <TbDrawer />
          <div className="TbLandingPage-wrapper">
            {/* {render && <Outlet />} */}
            {DEVICE == "TABLET_DEVICE" && <Outlet />}
          </div>
        </div>
      </div>
      <div className="item"></div>
    </>
  );
}

export default TbLandingPage;
