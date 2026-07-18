import React, { Children } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({Children}) => {

    const authInfo ={

    }
    return (
        <div>
           <AuthContext value={authInfo}>

           </AuthContext>
        </div>
    );
};

export default AuthProvider;