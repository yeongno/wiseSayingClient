import { SCROLL_LANDING, SCROLL_MARK, SCROLL_NOW } from "./types";

export function landingScroll(data) {
  const result = data;
  return {
    type: SCROLL_LANDING,
    payload: result,
  };
}
//현 화면상의 컴포넌트 Y 위치
export function markScroll(data) {
  const result = data;
  return {
    type: SCROLL_MARK,
    payload: result,
  };
}
//현 컴포넌트 Y 위치
export function nowScroll(data) {
  const result = data;
  return {
    type: SCROLL_NOW,
    payload: result,
  };
}
