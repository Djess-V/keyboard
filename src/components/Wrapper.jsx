import React from "react";
import Computer from "./computer/Computer";
import Notes from "./other/Notes";
import Sponge from "./other/Sponge";
import { notesData } from "../data/data";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <Computer />
      <Notes info={notesData} />
      <Sponge />
    </div>
  );
}
