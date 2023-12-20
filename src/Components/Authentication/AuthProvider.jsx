import React, { createContext, useEffect, useState } from 'react';
export let AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from './firebase.config';
const auth = getAuth(app);
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    let [signedInUser, setSignedInUser] = useState(null);
    let [loading, setLoading] = useState(true);

    let register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    let githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider)

    }
    let logOut=()=>{
        return signOut(auth)
    }
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setSignedInUser(user);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    
    let authorization = {
        register,
        login,
        googleLogin,
        githubLogin,
        logOut,
        loading,
        signedInUser
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;