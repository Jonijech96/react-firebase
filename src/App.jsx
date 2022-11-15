import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./styles/tailwind.css";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  const [user, setUser] = useState(null);
  return user ? <Home user={user} /> : <Login />;
}

export default App;
