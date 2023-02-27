import axios from "axios";
import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useMediaQuery } from "react-responsive";
import { Outlet, useNavigate } from "react-router-dom";
import instance from "../../axios";
import useLaindgScroll from "../../hook/useLaindgScroll";
import useMenuSelector from "../../hook/useMenuSelector";
import DsLandingPage from "./desktop/landingPage/DsLandingPage";
import MbLandingPage from "./mobile/landingPage/MbLandingPage";
import TbLandingPage from "./tablet/landingPage/TbLandingPage";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, authService } from "../../config/FireBaseConfig";
function LandingPage() {
  //landingPage 스크롤 할 때마다 마운트 시키기
  const nowY = useSelector((state) => state.scroll_reducer.landingScroll);

  // useEffect(() => {
  //   console.log(nowY);
  // }, [nowY]);
  useLaindgScroll();
  useMenuSelector();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/mainpage");
  }, []);

  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
        console.log("auth", authService.currentUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    //각 디바이스의 랜딩 페이지
    <div>
      <button onClick={handleGoogleLogin}>Login</button>
      {userData ? userData.displayName : null}
      <DsLandingPage />
      <MbLandingPage />
      <TbLandingPage />
    </div>
  );
}

export default LandingPage;
