import React from "react";

export default function Button(props) {
  return (
    <button
      className={`game-table-button ${props.modify} ${
        props.moves && props.moves.length === 1 ? "start-game-hidden" : ""
      }`}
      onClick={() => props.handle(props.index)}
    >
      {props.desc}
    </button>
  );
}
