
import {
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import FetchRandomJokes from "./FetchRandomJokes"
import { auth } from "../firebaseApp";
import { signOut } from "firebase/auth";
import GetCookie from "./GetCookie"


const LoginPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, , gLoading, gError] = useSignInWithGoogle(auth);

  const logout = () => {
    signOut(auth).then(() => document.location.reload());
  };
  const authError = error || gError;
  const isLoading = loading || gLoading;

  const login = async () => {
    await setPersistence(auth, browserLocalPersistence);
    signInWithGoogle();
  };

  if (authError) {
    return (
      <div>
        <p style={{ color: "white" }}>Error: {authError.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  if (user) {
    return (
      <>
        <button onClick={logout}>Sign out</button>
        <FetchRandomJokes />

      </>
    );
  }

  return (
    <div>
      <h1>
        Joker
      </h1>
      <button
        disabled={isLoading}
        onClick={login}
      >
        Sign In
      </button>
      <GetCookie />
    </div>
  );

}


export default LoginPage;
