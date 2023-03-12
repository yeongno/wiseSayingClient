import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../../../../config/FireBaseConfig";
import "../../../styles/mobile/loginPage/MbLoginPage.scss";
import MbLoginSection from "./MbLoginSection";
import MbRegisterSection from "./MbRegisterSection";

function MbLoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

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
  const onRegister = () => {
    setNewAccount(!newAccount);
  };
  return (
    <div className="Mb-container">
      <div className="MbLoginPage-container">
        <div className="MbLoginPage-wrapper">
          <div className="LoginTopsSection-container"></div>

          {newAccount ? (
            <MbRegisterSection />
          ) : (
            <MbLoginSection></MbLoginSection>
          )}
          <div className="LoginBottomSection-container">
            <div className="orSection__span">
              <span>or</span>
            </div>
            {newAccount ? (
              <button onClick={onRegister}>
                <span>로그인하기</span>
              </button>
            ) : (
              <button onClick={onRegister}>
                <span>가입하기</span>
              </button>
            )}
            <br />
            <img
              src="/assets/google/googleSignUp.png"
              alt=""
              onClick={onSocialClick}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MbLoginPage;
