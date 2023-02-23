import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const useMenuSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state?.turn?.turnMenu);
  useEffect(() => {
    // executeMenu("MAIN_MENU");
    // dispatch(turnMenu("MAIN_MENU"));
  }, []);
  useEffect(() => {
    executeMenu(menu);
  }, [menu]);
  const MenuValue = {
    MAIN_MENU() {
      navigate("/mainpage");
    },
    TEST2_MENU() {
      navigate("/test2");
    },

    TEST3_MENU() {
      //MenuBar를 클릭 시 디포트 페이지인 TEST1으로 이동 할 수 있게 설정
      navigate("/test3");
    },
    // 기본 픽 페이지
    SETTEST_MENU() {
      //클릭 하였을 때는 COMMUNITY_MAIN() 실행
      //기본 마운트 dispatch코드로 해당 빈 코드 실행
    },
  };

  //해당 맵 스위치 코드
  const executeMenu = (MenuType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (menu) MenuValue[MenuType]();
  };
};
export default useMenuSelector;
