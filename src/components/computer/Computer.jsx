import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

export default function Computer() {
  return (
    <div className="computer">
      <Display />
      <Keyboard />
    </div>
  );
}
