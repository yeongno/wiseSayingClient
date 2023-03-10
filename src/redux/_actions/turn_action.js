import {
  TURNDEVICE,
  TURNDRAWER,
  TURNFORUM,
  TURNMAP,
  TURNMAPCOVER,
  TURNMENU,
  TURNMO,
  TURNTEST,
} from "./types";

/**
 * 지도 바꾸기 DEFAULT_MAP, REL_MAP, NEAR_MAP, TEST_MAP, INTERESTED_MAP
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnMap(dataToSubmit) {
  return {
    type: TURNMAP,
    value: dataToSubmit,
  };
}

/**
 * 메뉴 바꾸기 MAIN_MENU, MAP_MENU, COMMUNITY_MENU, TEST_MAP, INTERESTED_MAP
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnMenu(dataToSubmit) {
  return {
    type: TURNMENU,
    value: dataToSubmit,
  };
}

/**
 * 게시판 포럼 바꾸기 GENERAL_FORUM, NOTICE_FORUM, INQUIRY_FORUM
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnForum(dataToSubmit) {
  return {
    type: TURNFORUM,
    value: dataToSubmit,
  };
}
/**
 * leftSection 옵션 바꾸기 MINE_MO, NEAR_MO, OTHER_MO
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnMO(dataToSubmit) {
  return {
    type: TURNMO,
    value: dataToSubmit,
  };
}

/**
 * map의 커버를 OnOff
 * @param {boolean true} dataToSubmit
 * @returns
 */
export function turnMapCover(dataToSubmit) {
  return {
    type: TURNMAPCOVER,
    value: dataToSubmit,
  };
}
/**
 * Test 메뉴 바꾸기
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnTest(dataToSubmit) {
  return {
    type: TURNTEST,
    value: dataToSubmit,
  };
}

/**
 * 활성화 디바이스
 * @param {string "DESKTOP_DEVICE"} dataToSubmit
 * @returns
 */
export function turnDevice(dataToSubmit) {
  return {
    type: TURNDEVICE,
    value: dataToSubmit,
  };
}

/**
 * 활성화 디바이스
 * "POSSIBLE_DRAER", "IMPOSSIBLE_DRAWER"
 * @param {string "POSSIBLE_DRAWER"} dataToSubmit
 * @returns
 */
export function turnDrawer(dataToSubmit) {
  return {
    type: TURNDRAWER,
    value: dataToSubmit,
  };
}
