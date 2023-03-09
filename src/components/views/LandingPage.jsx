import axios from "axios";
import React, { Children, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";
import { auth } from "../../config/FireBaseConfig";
import useLaindgScroll from "../../hook/useLaindgScroll";
import useMenuSelector from "../../hook/useMenuSelector";
import useTurnResponsive from "../../hook/useTurnResponsive";
import useWindowWidth from "../../hook/useWindowWidth";
import { turnDevice, turnDrawer } from "../../redux/_actions/turn_action";
import DsLandingPage from "./desktop/landingPage/DsLandingPage";
import MbLandingPage from "./mobile/landingPage/MbLandingPage";
import TbLandingPage from "./tablet/landingPage/TbLandingPage";

function LandingPage() {
  //landingPage 스크롤 할 때마다 마운트 시키기
  const nowY = useSelector((state) => state.scroll_reducer.landingScroll);
  const dispatch = useDispatch();
  useLaindgScroll();
  useMenuSelector();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/mainpage");
  }, []);
  return (
    //각 디바이스의 랜딩 페이지
    <div>
      {auth?.currentUser?.displayName}

      <DsLandingPage />
      <MbLandingPage />
      <TbLandingPage />
    </div>
  );
}

export default LandingPage;
