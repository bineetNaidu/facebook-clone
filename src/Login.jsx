import React from "react";
import { Button } from "@material-ui/core";
import { useStateValue } from "./customs/contexts/state.context";
import { actionTypes } from "./customs/contexts/reducer";

// DATABASE
import { auth, provider } from "./firebase";

// STATICS
import "./Login.css";

const Login = () => {
  // STATES

  // HOOKS && CONTEXTS
  const [, dispatch] = useStateValue();

  // FUNCTIONS
  const signIn = () => {
    // sign in stuff ..
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({ type: actionTypes.SET_USET, user: res.user });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="facebook logo"
        />

        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="FB TXT LOGO"
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
