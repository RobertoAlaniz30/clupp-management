import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import "../firebase";

const context = createContext();

export const useAuth = () => {
  return useContext(context);
};

//Function Provider Component
const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <context.Provider value={{ signUp, logIn, user, logOut }}>
      {props.children}
    </context.Provider>
  );
};

export default AuthProvider;
