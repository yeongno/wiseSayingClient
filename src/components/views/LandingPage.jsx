import axios from "axios";
import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";
import useLaindgScroll from "../../hook/useLaindgScroll";
import useMenuSelector from "../../hook/useMenuSelector";
import DsLandingPage from "./desktop/landingPage/DsLandingPage";
import MbLandingPage from "./mobile/landingPage/MbLandingPage";
import TbLandingPage from "./tablet/landingPage/TbLandingPage";
function LandingPage() {
  //landingPage 스크롤 할 때마다 마운트 시키기
  const nowY = useSelector((state) => state.scroll_reducer.landingScroll);

  useLaindgScroll();
  useMenuSelector();
  const navigate = useNavigate();
  const [test, setTest] = useState();
  useEffect(() => {
    navigate("/mainpage");

    // heroku 서버 테스트
    const data = async () =>
      await instance
        .post("/api/posts/getPost", { topic: "notice" })
        .then((response) => {
          console.log("asdv");
          if (response.data.success) {
            setTest(response.data.posts);
            console.log("aa", response);
          } else {
            alert("게시글 정보를 가져오는데 실패하였습니다.");
          }
        });
    data();
  }, []);

  console.log(test);
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
