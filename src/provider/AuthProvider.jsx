import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // console.log(`user: ${user}`)
    // console.log(`loading: ${loading}`)

    // {user.name = "Rifat";
    // user.email = "rifathasan1875@gmail.com"}
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    // const updateUserProfile = (updatedData) =>{
    //     return updateProfile(auth.currentUser, updatedData);
    // };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => { unsubscribe() };
    }, [])

    const authinfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        loginUser,
        updateUserProfile,
        loading,
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider