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
        <div className="DsMainPage-wrapper">
          DsMainPage1
          <div className="test1">1</div>
          <div className="test2">2</div>
        </div>
      </div>
    </div>
  );
}

export default DsMainPage;
