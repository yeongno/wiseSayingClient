import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { landingScroll } from "../redux/_actions/scroll_action";

function useLaindgScroll() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    dispatch(landingScroll(window.scrollY));
  };

  return window.scrollY;
}

export default useLaindgScroll;
