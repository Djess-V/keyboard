import React from "react";

let ButtonClassF = ({
  onComputer,
  onFN,
  isHidden = (f) => f,
  data,
  id,
  block = "",
  onClick = (f) => f,
  pressedButton,
}) => {
  return (
    <>
      <button
        onClick={() => onClick(id)}
        className={`${block}__btnClassF ${isHidden(id) ? "hidden" : ""} ${
          onComputer ? "onComputer" : ""
        } ${pressedButton ? "buttonPressed" : ""}`}
      >
        {data[0]}
        <p>{data[1]}</p>
      </button>
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

ButtonClassF = React.memo(ButtonClassF);

export default ButtonClassF;
