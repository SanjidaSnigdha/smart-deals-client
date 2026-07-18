import React, { Children } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ Children }) => {

    const createUser = ()=>{
        return createUserWithEmailAndPassword
    }
  const authInfo = {};
  return (
    <div>
      <AuthContext value={authInfo}>{Children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
