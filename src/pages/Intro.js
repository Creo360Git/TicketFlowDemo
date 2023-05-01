import logo from "../logo.svg";
import "../App.css";
import React from "react";
import { withRouter } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const IntroPage = ({ props }) => {
  return (
    <div>
      <header className="App-header">
        <Player
          src="https://assets5.lottiefiles.com/packages/lf20_qt4a6xmc.json"
          className="player"
          loop
          autoplay
        ></Player>
        <p>What is TicketFlow?</p>
      </header>
    </div>
  );
};

export default IntroPage;
