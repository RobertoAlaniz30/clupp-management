import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const context = createContext();

export const useAuth = () => {
  return useContext(context);
};
const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
const AuthProvider = (props) => {
  const user = {
    email: "pepito juarez",
  };
  return <context.Provider value={{ user }}>{props.children}</context.Provider>;
};

export default AuthProvider;
