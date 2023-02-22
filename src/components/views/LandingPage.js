import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet, useNavigate } from "react-router-dom";
import instance from "../../axios";
import DsLandingPage from "./desktop/landingPage/DsLandingPage";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/mainPage");
  }, []);
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };
  //heroku 서버 테스트
  const [test, setTest] = useState();
  useEffect(() => {
    instance
      .post("/api/posts/getPost", { topic: "notice" })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setTest(response.data.posts);
        } else {
          alert("게시글 정보를 가져오는데 실패하였습니다.");
        }
      });
  }, []);
  console.log(test);
  return (
    <div>
      <Desktop>
        <DsLandingPage />
      </Desktop>
      <Tablet>
        <Outlet />2
      </Tablet>
      <Mobile>
        <Outlet />3
      </Mobile>
    </div>
  );
}

export default LandingPage;
