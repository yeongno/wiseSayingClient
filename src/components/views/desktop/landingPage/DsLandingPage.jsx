import React, { Children, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useLaindgScroll from "../../../../hook/useLaindgScroll";
import useTurnResponsive from "../../../../hook/useTurnResponsive";
import useWindowWidth from "../../../../hook/useWindowWidth";
import { turnDevice, turnDrawer } from "../../../../redux/_actions/turn_action";
import "../../../styles/desktop/landingPage/DsLandingPage.scss";
import DsDrawer from "../drawer/DsDrawer";
import DsHeader from "../header/DsHeader";
import DsMenuBar from "../menuBar/DsMenuBar";

function DsLandingPage() {
  const topSection_Ref = useRef();

  //header, menuBar의 활성화 플래그
  const [onTopSection, setOnTopSection] = useState(false);
  const turnMenu = useSelector((state) => state.turn.turnMenu);

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

  useEffect(() => {
    if (turnMenu == "LOGIN_MENU") {
      setOnTopSection(false);
    } else {
      setOnTopSection(true);
    }
  }, [turnMenu]);
  //각 디바이스 마다 outlet을 불러오게 함으로 랜더링이 중복됨을 방지 하기 위한 루트 코드
  const Ds_Ref = useRef();
  const windth = useWindowWidth();
  const dispatch = useDispatch();
  const DEVICE = useSelector((state) => state?.turn?.turnDevice);
  useEffect(() => {
    const activity = window?.getComputedStyle(Ds_Ref.current).display;
    if (activity == "block") {
      dispatch(turnDevice("DESKTOP_DEVICE"));
    } else if (activity == "none") {
    }
  }, [windth]);

  // Drawer 비/활성화 값을 받아 활성화
  const GetDrawer = useSelector((state) => state.turn.turnDRAWER);
  const [Drawer, setDrawer] = useState("POSSIBLE_DRAWER");
  useEffect(() => {
    setDrawer(GetDrawer);
    console.log(GetDrawer);
  }, [GetDrawer]);

  return (
    <div className="Ds-container" ref={Ds_Ref}>
      <div className="DsLandingPage-container">
        <div className="DsLandingPage-topSection" ref={topSection_Ref}>
          {onTopSection ? (
            <>
              <DsHeader />
              <DsMenuBar />
            </>
          ) : (
            <></>
          )}
        </div>
        {Drawer == "POSSIBLE_DRAWER" && <DsDrawer onBottom={onBottom} />}
        <div className="DsLandingPage-wrapper" ref={dsbottom_Ref}>
          {DEVICE == "DESKTOP_DEVICE" && <Outlet />}
          {/* {render && <Outlet />} */}
        </div>
      </div>
    </div>
  );
}

export default DsLandingPage;
