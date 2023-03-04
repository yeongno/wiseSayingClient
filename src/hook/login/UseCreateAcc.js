import React, { useEffect } from "react";
import { auth, firebaseInstance } from "../../config/FireBaseConfig";

const UseCreateAcc = async (email, password, nickName) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await user.updateProfile({
      displayName: nickName,
    });
  } catch (error) {
    console.log(error);
    // setError(error.message);
  }
};

export default UseCreateAcc;
