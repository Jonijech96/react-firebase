import React, { useState } from "react";

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold">
          {isLoggingIn ? "Inicia Sesion" : "Registrate"}
        </h1>
        <form action="" className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input className="shadow" type="text" id="username" />
          <label htmlFor="password">Password</label>
          <input className="shadow mb-2" type="password" id="password" />
          <button className="bg-blue-500">
            {isLoggingIn ? "Acceder" : "Registrate"}
          </button>
        </form>
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
