import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { turnTest } from "../redux/_actions/turn_action";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth]);

  return windowWidth;
}

export default useWindowWidth;
