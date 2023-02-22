import React from "react";
import "../../../styles/desktop/header/DsHeader.scss";
function DsHeader() {
  return (
    <div className="DsHeader-container">
      <div className="DsHeader-wrapper">
        <div className="logo-section">logo</div>
        <div className="user-section">
          <span>내 정보</span>
          <span>로그아웃</span>
        </div>
      </div>
    </div>
  );
}

export default DsHeader;
