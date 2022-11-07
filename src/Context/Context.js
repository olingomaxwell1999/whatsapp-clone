import { useContext, createContext, useState, useEffect } from "react"

import { GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut } from "firebase/auth";

import {auth} from '../firebase'


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
  
    const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    //   signInWithRedirect(auth, provider)
    };
  
    const logOut = () => {
        signOut(auth)
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('User', currentUser)
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const UserAuth = () => {
    return useContext(AuthContext);
  };