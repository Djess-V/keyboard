import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

export default function Computer({
  indexDisplayImage,
  missingButtons,
  onClickButton = (f) => f,
}) {
  return (
    <div className="computer">
      <Display indexDisplayImage={indexDisplayImage} />
      <Keyboard missingButtons={missingButtons} onClickButton={onClickButton} />
    </div>
  );
}
