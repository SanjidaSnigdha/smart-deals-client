import React, { Children } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ Children }) => {
    const [user,setu]
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {};
  return (
    <div>
      <AuthContext value={authInfo}>{Children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
