import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./styles/tailwind.css";
import Home from "./views/Home";
import Login from "./views/Login";
import {auth} from "./firebase/credenciales"
import {onAuthStateChanged} from "firebase/auth"

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase)=>{

    if(usuarioFirebase){
      setUser(usuarioFirebase);
    } else {
      setUser(null);
    }
  })
  return user ? <Home user={user} /> : <Login />;
}

export default App;
