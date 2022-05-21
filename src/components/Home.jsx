import React from "react";
import {useAuth} from "../context/AuthContext";
const Home = () => {
    const context = useAuth();
    console.log(context)
  return <div>Home</div>;
};

export default Home;
