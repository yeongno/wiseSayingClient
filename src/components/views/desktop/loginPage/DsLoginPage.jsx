import { async } from "q";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firebaseInstance } from "../../../../config/FireBaseConfig";
import UseCreateAcc from "../../../../hook/login/UseCreateAcc";
// import useCreateAcc from "../../../../hook/login/useCreateAcc";
import UseLoginAcc from "../../../../hook/login/UseLoginAcc";
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";
import "../../../styles/desktop/loginPage/DsLoginPage.scss";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { turnDrawer } from "../../../../redux/_actions/turn_action";
import { useDispatch } from "react-redux";

function DsLoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(turnDrawer("IMPOSSIBLE_DRAWER"));
  }, []);

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
    <div className="Ds-container">
      <div className="DsLoginPage-container">
        <div className="DsLoginPage-wrapper">
          <div className="LoginTopsSection-container">
            <span
              onClick={() => {
                navigate("/mainpage");
              }}
            >
              EveryQT
            </span>
          </div>

          {newAccount ? <RegisterSection /> : <LoginSection></LoginSection>}
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

export default DsLoginPage;
