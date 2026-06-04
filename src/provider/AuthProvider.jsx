import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth"

export const AuthContext = createContext();

let auth = null;
if (app) {
  try {
    auth = getAuth(app);
  } catch (error) {
    console.warn('Firebase auth initialization failed. Falling back to local auth.', error);
    auth = null;
  }
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    if (!auth) {
      setLoading(true);
      const fakeUser = { email, displayName: null };
      return new Promise((resolve) => {
        setTimeout(() => {
          setUser(fakeUser);
          setLoading(false);
          resolve({ user: fakeUser });
        }, 0);
      });
    }

    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    if (!auth) {
      setLoading(true);
      const fakeUser = { email, displayName: email.split('@')[0] };
      return new Promise((resolve) => {
        setTimeout(() => {
          setUser(fakeUser);
          setLoading(false);
          resolve({ user: fakeUser });
        }, 0);
      });
    }

    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    if (!auth) {
      setLoading(true);
      return new Promise((resolve) => {
        setTimeout(() => {
          setUser(null);
          setLoading(false);
          resolve();
        }, 0);
      });
    }

    setLoading(true);
    return signOut(auth);
  }

  const updateUserProfile = (name, photoURL) => {
    if (!auth) {
      setUser((previous) => ({ ...previous, displayName: name, photoURL }));
      return Promise.resolve();
    }

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return undefined;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => { unsubscribe(); };
  }, []);

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