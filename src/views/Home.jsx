import React from "react";
import logOut from "../functions/logOut";

const Home = () => {
  return (
  <div>
    <h1>Home</h1>
    <button 
    className="bg-red-300 p-2 font-bold rounded text-white hover:bg-red-500"
    onClick={logOut}>Logout</button>
  </div>);
};

export default Home;
