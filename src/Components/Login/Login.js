import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../Context/StateProvider";
import { actionTypes } from "../../Context/redcer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((err) => err);
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,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"
          alt="slack__logo"
        />
        <h1>Sign in to Devansh Kc HQ</h1>
        <p> Devansh.slack.com</p>

        <Button onClick={signIn}>Sign in with google </Button>
      </div>
    </div>
  );
}

export default Login;
