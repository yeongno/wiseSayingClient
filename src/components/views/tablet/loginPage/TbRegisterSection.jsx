import { CheckOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../config/FireBaseConfig";
import UseCreateAcc from "../../../../hook/login/UseCreateAcc";
import "../../../styles/tablet/loginPage/TbRegisterSection.scss";
function TbRegisterSection() {
  const idCheck_Ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState(false);
  const [confirmPW, setConfirmPW] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkMatchPW, setMatchPW] = useState(false);

  //이메일 정규식 체크
  const [checkEmail, setCheckEmail] = useState(false);

  //사용 가능한 이메일인지 체크
  const [matchEmail, setMatchEmail] = useState(false);
  //비밀번호 정규식
  //숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };
  useEffect(() => {
    setCheckEmail(isEmail(email));
  }, [email]);

  useEffect(() => {
    if (password === confirmPW) {
      setMatchPW(true);
    } else {
      setMatchPW(false);
    }
  }, [password]);
  const onEmail = (e) => {
    setEmail(e.target.value);
    setMatchEmail(false);
  };
  const onPassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.match(passwordRegEx) === null) {
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }
  };
  const onCheckPassword = (e) => {
    setConfirmPW(e.target.value);
    if (e.target.value === password) {
      setMatchPW(true);
    } else {
      setMatchPW(false);
    }
  };

  const onCheckId = () => {
    const checkEmailExist = async () => {
      const methods = await auth.fetchSignInMethodsForEmail(email);
      if (methods.length > 0) {
        setMatchEmail(false);
        alert("이미 있는 이메일 입니다.");
        console.log(methods);
      } else {
        setMatchEmail(true);
        console.log(methods);
        alert("사용 가능한 이메일 입니다.");
      }
    };
    checkEmailExist();
  };

  const onNickName = (e) => {
    setNickName(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (matchEmail && checkPassword && confirmPW && nickName) {
      try {
        await UseCreateAcc(email, password, nickName);
        console.log("create", auth.currentUser);
        navigate("/mainpage");
      } catch (error) {
        console.log(error);
        alert("정보를 다시 한번 확인해 주세요");
      }
    } else {
      alert("정보를 다시 한번 확인해 주세요");
    }
  };
  return (
    <div className="TbregisterSection-container">
      <div className="TbregisterSection-wrapper">
        <div className="form-container">
          {!checkEmail && (
            <span
              style={{
                position: "absolute",
                marginLeft: "25rem",
                color: "red",
              }}
            >
              이메일 형식으로 입력해야 합니다.
            </span>
          )}{" "}
          <span>아이디</span>
          <div className="form-id">
            <input name="id" onChange={onEmail} />
            <button
              ref={idCheck_Ref}
              onClick={() => {
                onCheckId(email);
              }}
            >
              <CheckOutlined />
              중복 확인
            </button>{" "}
          </div>
          {!checkPassword && (
            <span
              style={{
                position: "absolute",
                marginLeft: "12rem",
                color: "red",
              }}
            >
              숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.
            </span>
          )}{" "}
          <span>비밀번호</span>
          <div className="form-password">
            <input type="password" name="password" onChange={onPassword} />
          </div>
          {!checkMatchPW && (
            <span
              style={{
                position: "absolute",
                marginLeft: "26rem",
                color: "red",
              }}
            >
              비밀번호와 일치하지 않습니다.
            </span>
          )}
          <span>비밀번호 재확인</span>
          <input
            type="password"
            name="confirmPassword"
            onChange={onCheckPassword}
          />
          <span>닉네임</span>
          <input name="nickName" onChange={onNickName} />
          <div className="form-submit">
            <button onClick={onSubmit}>가입하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TbRegisterSection;
