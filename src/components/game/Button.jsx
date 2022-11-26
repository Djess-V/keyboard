import React from "react";

function Button(props) {
  return (
    <button
      className={`game-table-td__button game-table-td__button_mode_${
        props.modify
      } ${
        props.moves && props.moves.length === 1
          ? "game-table-td__button_hidden"
          : ""
      }`}
      onClick={() => props.handle(props.index)}
    >
      {props.desc}
    </button>
  );
}

/* ---------------------------------------------------------------------------------- */

export default Button;
