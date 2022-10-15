import { Button } from "evergreen-ui";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../common/client";
import useAuthenticate from "../common/use-authenticate";

const Login = () => {
  const navigate = useNavigate();
  const [hasTriedAuthenticating, setHasTriedAuthenticating] = useState(false);

  useAuthenticate(
    client,
    () => navigate("/home"),
    () => setHasTriedAuthenticating(true)
  );

  if (!hasTriedAuthenticating) {
    return <div>LOADING LOGIN</div>;
  }

  return (
    <div>
      <Button
        onClick={() => (window.location = "http://localhost:3030/oauth/github")}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
