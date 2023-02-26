import React, { useEffect, useRef } from "react";
import "../../../styles/desktop/drawer/DsDrawer.scss";

function DsDrawer({ onBottom }) {
  const dsDrawer_Ref = useRef();

  //플래그 값에 따라 비/활성화
  useEffect(() => {
    if (onBottom) {
      dsDrawer_Ref.current.style.opacity = "1";
      dsDrawer_Ref.current.style.height = "3rem";
    } else {
      dsDrawer_Ref.current.style.opacity = "0";
      dsDrawer_Ref.current.style.height = "0";
    }
  }, [onBottom]);

  return (
    <div className="dsDrawer-container" ref={dsDrawer_Ref}>
      <div className="dsDrawer-wrapper">
        <div className="logo-section">
          <span
            onClick={() => {
              console.log("akakak");
            }}
          >
            logo
          </span>
        </div>
        <div className="drawer-section">
          <span>*</span>
        </div>
      </div>
    </div>
  );
}

export default DsDrawer;
