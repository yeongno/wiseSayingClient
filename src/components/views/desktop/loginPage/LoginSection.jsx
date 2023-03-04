import { async } from "@firebase/util";
import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

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
      }
    } else {
      alert("정보를 확인 해주세요");
    }
  };
  const onSocialClick = async (event) => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    await signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        alert(`${auth.currentUser.displayName}님 반갑습니다.`);
        navigate("/mainpage");
      })
      .catch((err) => {
        alert("정보를 다시 한번 확인해 주세요");
        console.log(err);
      });
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
        <img
          src="/assets/google/googleSignUp.png"
          alt=""
          onClick={onSocialClick}
        />{" "}
      </div>
    </div>
  );
}

export default LoginSection;
