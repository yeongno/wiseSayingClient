import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnMenu } from "../../../../redux/_actions/turn_action";

function DsTest3() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(turnMenu("TEST3_MENU"));
  }, []);

  return <div>DsTest3</div>;
}

export default DsTest3;
