import React, { useState } from "react";
import loginWithEmailPassword from "../functions/loginWithEmailPassword"
import registerUser from "../functions/registerUser"
import loginWithGoogle from "../functions/loginWithGoogle"

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function submitHandler(e){
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log("voila",username,password);

    if(isLoggingIn){
      await loginWithEmailPassword(username,password);
    } else {
      await registerUser(username,password);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">
          {isLoggingIn ? "Inicia Sesion" : "Registrate"}
        </h1>
        <form action="" className="flex flex-col" onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input className="shadow" type="text" id="username" />
          <label htmlFor="password">Password</label>
          <input className="shadow mb-2" type="password" id="password" />
          <button className="bg-blue-500 rounded text-white p-2 font-bold">
            {isLoggingIn ? "Acceder" : "Registrate"}
          </button>
        </form>
        <button 
        className="bg-green-500 rounded text-white p-2 font-bold"
        onClick={loginWithGoogle}>Accede con Google</button>
        <button
          className="underline"
          onClick={() => setIsLoggingIn(!isLoggingIn)}
        >
          {isLoggingIn ? "no tene?crea" : "si tene?entra"}
        </button>
      </div>
    </div>
  );
};

export default Login;
