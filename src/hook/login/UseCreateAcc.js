import React, { useEffect } from "react";
import { auth, firebaseInstance } from "../../config/FireBaseConfig";

const UseCreateAcc = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
    // setError(error.message);
  }
};

export default UseCreateAcc;
