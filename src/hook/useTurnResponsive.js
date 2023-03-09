/**
 * 각 디바이스 마다 특정 역할 기능을 설정 하기 위한 훅
 */
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const useTurnResponsive = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state?.turn?.turnDevice);

  //해당 맵 스위치 코드
  const executeMenu = useCallback(
    (MenuType) => {
      //not a function 오류가 뜸으로 if 걸어둠
      if (menu) MenuValue[MenuType]();
    },
    [menu]
  );

  useEffect(() => {
    executeMenu(menu);
  }, [executeMenu]);
  const MenuValue = {
    DESKTOP_DEVICE() {},
    TABLET_DEVICE() {},
    MOBILE_DEVICE() {},
  };
};
export default useTurnResponsive;
