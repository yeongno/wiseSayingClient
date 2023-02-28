import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { auth, firebaseInstance } from "../../config/FireBaseConfig";

const UseLoginAcc = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
    // setError(error.message);
  }
};

export default UseLoginAcc;
