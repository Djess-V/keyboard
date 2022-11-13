import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

export default function Computer({ missingButtons, onClickButton = (f) => f }) {
  return (
    <div className="computer">
      <Display />
      <Keyboard missingButtons={missingButtons} onClickButton={onClickButton} />
    </div>
  );
}
