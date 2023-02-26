import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { turnMenu } from "../../../../redux/_actions/turn_action";
import DsMainPage from "../../desktop/mainPage/DsMainPage";
import MbMainPage from "../../mobile/mainPage/MbMainPage";
import TbMainPage from "../../tablet/mainPage/TbMainPage";

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(turnMenu("MAIN_MENU"));
  }, []);

  return (
    <div>
      <DsMainPage />
      <TbMainPage />
      <MbMainPage />
    </div>
  );
}

export default MainPage;
