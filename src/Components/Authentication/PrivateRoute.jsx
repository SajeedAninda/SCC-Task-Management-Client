import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    let { signedInUser, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center h-screen items-center'>
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    if (signedInUser) {
        return children;
    }

    return <Navigate to="/"></Navigate>;
};

export default PrivateRoute;