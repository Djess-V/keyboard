import React from "react";
import Computer from "./computer/Computer";
import Papers from "./other/Papers";
import Sponge from "./other/Sponge";
import { notesData } from "../data/data";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <Computer />
      <Papers info={notesData} />
      <Sponge />
    </div>
  );
}
