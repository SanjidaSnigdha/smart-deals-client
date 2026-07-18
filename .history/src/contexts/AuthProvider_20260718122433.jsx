import React, { Children } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({Children}) => {
    return (
        <div>
           <AuthContext></AuthContext>
        </div>
    );
};

export default AuthProvider;