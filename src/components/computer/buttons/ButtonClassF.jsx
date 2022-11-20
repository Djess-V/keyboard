import React from "react";

export default function ButtonClassF({
  onComputer,
  isHidden = (f) => f,
  data,
  id,
  block = "",
  onClick = (f) => f,
  pressedButton,
}) {
  return (
    <>
      <button
        data-id={id}
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
}
