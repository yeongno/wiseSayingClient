import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { turnMap } from "../../../../redux/_actions/turn_action";

function DsTest2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    navigate("/test2");
    dispatch(turnMap("TEST2_MENU"));
  }, []);

  return <div>DsTest2</div>;
}

export default DsTest2;
