import React, { useEffect } from "react";
import useLaindgScroll from "../../../../hook/useLaindgScroll";
import "../../../styles/desktop/mainPage/DsMainPage.scss";
function DsMainPage() {
  const nowy = useLaindgScroll();
  console.log("now", nowy);

  useEffect(() => {
    console.log(nowy);
  }, [nowy]);
  return (
    <div className="Ds-container">
      <div className="DsMainPage-container">
        <div className="DsMainPage-wrapper"></div>
      </div>
    </div>
  );
}

export default DsMainPage;
