import axios from "axios";
import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useMediaQuery } from "react-responsive";
import { Outlet, useNavigate } from "react-router-dom";
import instance from "../../axios";
import useLaindgScroll from "../../hook/useLaindgScroll";
import DsLandingPage from "./desktop/landingPage/DsLandingPage";
import MbLandingPage from "./mobile/landingPage/MbLandingPage";
import TbLandingPage from "./tablet/landingPage/TbLandingPage";

function LandingPage() {
  const navigate = useNavigate();
  const nowY = useSelector((state) => state.scroll_reducer.landingScroll);
  useEffect(() => {
    navigate("/mainPage");
  }, []);

  useEffect(() => {
    console.log(nowY);
  }, [nowY]);

  // const isDesktop = useMediaQuery({ minWidth: 1501 });

  // //react-responsive 에 의해 써줘야 하는코드
  // useEffect(() => {
  //   if (isDesktop) {
  //     setIsDesk(isDesktop);
  //   }
  // }, [isDesktop]);

  // const Desktop = ({ children }) => {
  //   const isDesktop = useMediaQuery({ minWidth: 1501 });
  //   return isDesktop ? children : null;
  // };
  // const Tablet = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1500 });
  //   return isTablet ? children : null;
  // };
  // const Mobile = ({ children }) => {
  //   const isMobile = useMediaQuery({ maxWidth: 767 });
  //   return isMobile ? children : null;
  // };
  // const Default = ({ children }) => {
  //   const isNotMobile = useMediaQuery({ minWidth: 768 });
  //   return isNotMobile ? children : null;
  // };
  const nowy = useLaindgScroll();
  useEffect(() => {
    console.log(nowy);
  }, [nowy]);

  //todo
  //1.react-responsive로 인해 useeffect 안되는거 해결하기

  //heroku 서버 테스트
  // const [test, setTest] = useState();
  //   instance
  //     .post("/api/posts/getPost", { topic: "notice" })
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data.success) {
  //         setTest(response.data.posts);
  //       } else {
  //         alert("게시글 정보를 가져오는데 실패하였습니다.");
  //       }
  //     });
  // console.log(test);
  return (
    //각 디바이스의 랜딩 페이지
    <div>
      <DsLandingPage />
      <MbLandingPage />
      <TbLandingPage />
    </div>
  );
}

export default LandingPage;
