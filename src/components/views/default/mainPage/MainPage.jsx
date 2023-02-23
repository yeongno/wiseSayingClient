import React, { useEffect, useState } from "react";
import DsMainPage from "../../desktop/mainPage/DsMainPage";
import MbMainPage from "../../mobile/mainPage/MbMainPage";
import TbMainPage from "../../tablet/mainPage/TbMainPage";

function MainPage() {
  return (
    <div>
      <DsMainPage />
      <TbMainPage />
      <MbMainPage />
    </div>
  );
}

export default MainPage;
