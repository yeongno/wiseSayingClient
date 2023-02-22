import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import instance from "../../axios";

function LandingPage() {
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
      aa
      <Outlet />
    </div>
  );
}

export default LandingPage;
