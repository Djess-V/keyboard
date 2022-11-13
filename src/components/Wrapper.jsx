import React from "react";
import Game from "./game/Game";
import Computer from "./computer/Computer";
import Papers from "./other/Papers";
import Sponge from "./other/Sponge";
import { notesData } from "../data/data";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <div className="wrapper_game_computer">
        <Game />
        <Computer />
      </div>
      <Papers info={notesData} />
      <Sponge />
    </div>
  );
}
