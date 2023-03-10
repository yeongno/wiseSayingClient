import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useLaindgScroll from "../../../../hook/useLaindgScroll";
import { turnDrawer, turnMenu } from "../../../../redux/_actions/turn_action";
import "../../../styles/desktop/mainPage/DsMainPage.scss";
function DsMainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(turnMenu("MAIN_MENU"));
    dispatch(turnDrawer("POSSIBLE_DRAWER"));
  }, []);

  return (
    <div className="Ds-container">
      <div className="DsMainPage-container">
        <div className="DsMainPage-wrapper"></div>
      </div>
    </div>
  );
}

export default DsMainPage;
