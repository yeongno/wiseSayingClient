import axios from "axios";
const QUO = window.location.hostname === "localhost" ? "" : "/quotes";
const quotesInstance = axios.create({
  baseURL: QUO, // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});
// https://favqs.com/api/qotd

// 가지고 있는 토큰 넣어주기!
// 로그인 전이면 토큰이 없으니 못 넣어요.
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줍시다.
// Authorization: 'Token token="<API_KEY>"
// quotesInstance.defaults.headers.common["Authorization"] =
// "37017bba672eb45b94132c5e6f1af6e6";

export default quotesInstance;
