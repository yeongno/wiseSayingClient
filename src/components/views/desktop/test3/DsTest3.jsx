import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import instance from "../../../../axios";
import quotesInstance from "../../../../quotesInstance";
import { turnMenu } from "../../../../redux/_actions/turn_action";

function DsTest3() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(turnMenu("TEST3_MENU"));
    // quotesInstance.get("/api/qotd").then((data) => {
    //   console.log(data);
    // });
    instance.get("/api/qotds/qotd").then((res) => {
      console.log("qotds", res);
    });
  }, []);

  return <div className="Ds-container"></div>;
}

export default DsTest3;
