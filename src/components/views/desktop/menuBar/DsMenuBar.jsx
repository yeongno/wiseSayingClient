import React from "react";
import { useDispatch } from "react-redux";
import { turnMenu } from "../../../../redux/_actions/turn_action";
import "../../../styles/desktop/menuBar/DsMenuBar.scss";

function DsMenuBar() {
  const dispatch = useDispatch();
  return (
    <div className="DsMenuBar-container">
      <div className="DsMenuBar-wrapper">
        <span
          onClick={() => {
            dispatch(turnMenu("MAIN_MENU"));
          }}
        >
          MAIN
        </span>
        <span
          onClick={() => {
            dispatch(turnMenu("TEST2_MENU"));
          }}
        >
          Test2
        </span>
        <span
          onClick={() => {
            console.log("agaga");

            dispatch(turnMenu("TEST3_MENU"));
            console.log("agaga");
          }}
        >
          Test3
        </span>
      </div>
    </div>
  );
}

export default DsMenuBar;
