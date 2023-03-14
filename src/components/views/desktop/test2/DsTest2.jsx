import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../../../../axios";
import { turnMap, turnMenu } from "../../../../redux/_actions/turn_action";

function DsTest2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    navigate("/test2");
    dispatch(turnMenu("TEST2_MENU"));
    firstQuot();
    filterCheck();
  }, []);

  const [data1, setData] = useState("");
  const [data2, setData2] = useState("");
  const firstQuot = useCallback(() => {
    if (!data1) {
      (async () => {
        await instance.get("/api/qotds/quotes").then((res) => {
          console.log(res);
          setData(res);
        });
      })();
    }
  }, [data1]);
  const filterCheck = useCallback(() => {
    if (!data2) {
      (async () => {
        await instance.get("/api/qotds/filter/inspiration").then((res) => {
          console.log("2", res);
          setData(res);
        });
      })();
    }
  }, [data2]);

  return <div className="Ds-container">DsTest2</div>;
}

export default DsTest2;
