import React, { Children, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    createUser,
    user,loading
  };
  return (
    <div>
      <AuthContext value={authInfo}>{Children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
