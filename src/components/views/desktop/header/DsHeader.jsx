import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../config/FireBaseConfig";
import "../../../styles/desktop/header/DsHeader.scss";
function DsHeader() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const onLogOut = () => {
    auth.signOut();
  };
  const onLogIn = () => {
    navigate("/login");
  };
  return (
    <div className="DsHeader-container">
      <div className="DsHeader-wrapper">
        <div className="logo-section">logo</div>
        <div className="user-section">
          <span>내 정보</span>
          {isLoggedIn ? (
            <span onClick={onLogOut}>로그아웃</span>
          ) : (
            <span onClick={onLogIn}>로그인</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default DsHeader;
