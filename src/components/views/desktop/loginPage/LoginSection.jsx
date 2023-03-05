import { async } from "@firebase/util";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { auth } from "../../../../config/FireBaseConfig";
import UseLoginAcc from "../../../../hook/login/UseLoginAcc";
import "../../../styles/desktop/loginPage/LoginSection.scss";
function LoginSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmail = (e) => {
    setEmail(e.target.value);
  };
  const onPassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        await UseLoginAcc(email, password);
        alert(`${auth.currentUser.displayName}님 반갑습니다.`);
      } catch (error) {
        console.log(error);
        alert("정보를 확인 해주세요");
      }
    }
  };

  return (
    <div className="loginSection-container">
      <div className="loginSection-wrapper">
        <div className="topLogo-container"></div>
        <div className="form-container">
          <span>아이디</span>
          <div className="form-id">
            <input name="id" onChange={onEmail} />
          </div>

          <span>비밀번호</span>
          <div className="form-password">
            <input type="password" name="password" onChange={onPassword} />
          </div>

          <div className="form-submit">
            <button onClick={onSubmit}>로그인 하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;
