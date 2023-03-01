import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import instance from "../../../../axios";
import { turnMenu } from "../../../../redux/_actions/turn_action";

function DsTest3() {
  const dispatch = useDispatch();
  const [data1, setData] = useState("");
  useEffect(() => {
    dispatch(turnMenu("TEST3_MENU"));
    (async () => {
      await instance.get("/api/qotds/qotd").then((res) => {
        setData(res.data.quote.body);
      });
    })();
  }, []);

  return <div className="Ds-container">{data1}</div>;
}

export default DsTest3;
