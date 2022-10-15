import "./home.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import client from "../common/client";
import { useNavigate } from "react-router-dom";
import useAuthenticate from "../common/use-authenticate";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useAuthenticate(
    client,
    () => setIsLoggedIn(true),
    () => navigate("/login")
  );

  if (!isLoggedIn) {
    return <div>LOADING</div>;
  }

  return (
    <div className="home">
      <Navbar />
      <div className="home-main"></div>
    </div>
  );
};

export default Home;
