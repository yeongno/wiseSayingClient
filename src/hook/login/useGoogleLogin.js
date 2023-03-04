// import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../config/FireBaseConfig";

// const UseGoogleLogin = () => {
//   const [result, setResult] = useState(false);
//   const provider = new GoogleAuthProvider(); // provider를 구글로 설정
//   signInWithPopup(auth, provider) // popup을 이용한 signup
//     .then((data) => {
//       alert(`${auth.currentUser.displayName}님 반갑습니다.`);
//       setResult(true);
//     })
//     .catch((err) => {
//       alert("정보를 다시 한번 확인해 주세요");
//       console.log(err);
//       setResult(false);
//     });
//   return result;
// };

// export default UseGoogleLogin;
