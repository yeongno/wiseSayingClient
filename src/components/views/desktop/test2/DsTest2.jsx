import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { turnMap, turnMenu } from "../../../../redux/_actions/turn_action";

function DsTest2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    navigate("/test2");
    dispatch(turnMenu("TEST2_MENU"));
  }, []);

  return <div className="Ds-container">DsTest2</div>;
}

export default DsTest2;
