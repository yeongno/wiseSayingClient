import React, { useEffect, useRef, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { turnMenu } from "../../../../redux/_actions/turn_action";
import "../../../styles/desktop/drawer/DsDrawer.scss";

function DsDrawer({ onBottom }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dsDrawer_Ref = useRef();
  const Drawer_Ref = useRef();
  const Content_Ref = useRef();
  const Pad_Ref = useRef();
  const Menu_Ref = useRef();
  const [onDrawer, setOnDrawer] = useState(false);

  //플래그 값에 따라 드로워 비/활성화
  useEffect(() => {
    if (onBottom) {
      dsDrawer_Ref.current.style.opacity = "1";
      dsDrawer_Ref.current.style.height = "3rem";
    } else {
      dsDrawer_Ref.current.style.opacity = "0";
      dsDrawer_Ref.current.style.height = "0";
    }
  }, [onBottom]);

  //메뉴 버튼 클릭 시 상세 메뉴드로워 뷰 활성화
  const onMenu = () => {
    setOnDrawer(true);
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  };

  //여백 누를 시 뷰 비활성화
  const offMenu = () => {
    setOnDrawer(false);
    document.body.style.height = "";
    document.body.style.overflow = "";
  };

  //드로워 상세 뷰의 플래그 값에 따라 비/활성화 값 변경
  useEffect(() => {
    if (onDrawer) {
      Drawer_Ref.current.style.width = "100vw";
      Content_Ref.current.style.display = "";
      Menu_Ref.current.style.pointerEvents = "unset";
    } else {
      Drawer_Ref.current.style.width = "0";
      Content_Ref.current.style.display = "none";
      document.body.style.height = "";
      document.body.style.overflow = "";
      //opacity로 설정 되어 있으므로 해당 영역 터치 가능 하게 변경
      Menu_Ref.current.style.pointerEvents = "none";
    }
  }, [onDrawer]);

  return (
    <div className="dsDrawer-container" ref={dsDrawer_Ref}>
      <div className="dsDrawer-wrapper" ref={Menu_Ref}>
        <div className="logo-section">
          <span>logo</span>
        </div>
        <div className="drawer-section">
          <span onClick={onMenu}>
            <MenuOutlined />
          </span>
        </div>
      </div>
      <div className="headerDrawer-padding" ref={Pad_Ref}></div>
      <div className="dsDrawerBottom-container" ref={Drawer_Ref}>
        <div className="drawer-padding" onClick={offMenu}></div>
        <div className="drawer-main" ref={Content_Ref}>
          <ul>
            <ol>계정 관련 메뉴</ol>
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </li>
            <li>알림</li>
            <li>내 정보 변경</li>
            <ol>주요 페이지</ol>
            <li
              onClick={() => {
                dispatch(turnMenu("MAIN_MENU"));
                setOnDrawer(false);
              }}
            >
              메인 페이지
            </li>
            <li
              onClick={() => {
                dispatch(turnMenu("TEST2_MENU"));
                setOnDrawer(false);
              }}
            >
              Test2
            </li>
            <li
              onClick={() => {
                dispatch(turnMenu("TEST3_MENU"));
                setOnDrawer(false);
              }}
            >
              Test3
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DsDrawer;
