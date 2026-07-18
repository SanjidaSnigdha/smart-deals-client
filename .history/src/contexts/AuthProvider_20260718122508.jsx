import React, { Children } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({Children}) => {

    const authInfo ={

    }
    return (
        <div>
           <AuthContext val>

           </AuthContext>
        </div>
    );
};

export default AuthProvider;