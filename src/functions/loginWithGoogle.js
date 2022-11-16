import { auth } from "../firebase/credenciales";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

export default async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider);
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
}
