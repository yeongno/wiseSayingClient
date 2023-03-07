import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useTurnResponsive from "../../../../hook/useTurnResponsive";
import useWindowWidth from "../../../../hook/useWindowWidth";
import { turnDevice } from "../../../../redux/_actions/turn_action";
import "../../../styles/mobile/landingPage/MbLandingPage.scss";
import MbDrawer from "../drawer/MbDrawer";

function MbLandingPage() {
  //각 디바이스 마다 outlet을 불러오게 함으로 랜더링이 중복됨을 방지 하기 위한 루트 코드
  const Mb_Ref = useRef();
  const windth = useWindowWidth();
  const dispatch = useDispatch();
  const DEVICE = useSelector((state) => state?.turn?.turnDevice);

  useEffect(() => {
    const activity = window?.getComputedStyle(Mb_Ref.current).display;
    if (activity == "block") {
      dispatch(turnDevice("MOBILE_DEVICE"));
    } else if (activity == "none") {
    }
  }, [windth]);
  return (
    <div className="Mb-container" ref={Mb_Ref}>
      <div className="MbLandingPage-container">
        <MbDrawer />
        <div className="MbLandingPage-wrapper">
          {DEVICE == "MOBILE_DEVICE" && <Outlet />}
          {/* {render && <Outlet />} */}
        </div>
      </div>
    </div>
  );
}

export default MbLandingPage;
