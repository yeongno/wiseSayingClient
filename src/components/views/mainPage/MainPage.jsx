import React from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import DsMainPage from "../desktop/mainPage/DsMainPage";
import MbMainPage from "../mobile/mainPage/MbMainPage";
import TbMainPage from "../tablet/mainPage/TbMainPage";

function MainPage() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1501 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1500 });
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
  return (
    <div>
      <Desktop>
        <DsMainPage />
      </Desktop>
      <Tablet>
        <TbMainPage />
      </Tablet>
      <Mobile>
        <MbMainPage />
      </Mobile>
    </div>
  );
}

export default MainPage;
