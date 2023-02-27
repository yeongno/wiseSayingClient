import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { turnMenu } from "../../../../redux/_actions/turn_action";
import DsLoginPage from "../../desktop/loginPage/DsLoginPage";
import MbLoginPage from "../../mobile/loginPage/MbLoginPage";
import TbLoginPage from "../../tablet/loginPage/TbLoginPage";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
    dispatch(turnMenu("LOGIN_MENU"));
  }, []);

  return (
    <div>
      <DsLoginPage />
      <TbLoginPage />
      <MbLoginPage />
    </div>
  );
}

export default LoginPage;
