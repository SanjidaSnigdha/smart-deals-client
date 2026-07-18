import React, { Children } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ Children }) => {

    const createUser = ()=>{
        return create
    }
  const authInfo = {};
  return (
    <div>
      <AuthContext value={authInfo}>{Children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
