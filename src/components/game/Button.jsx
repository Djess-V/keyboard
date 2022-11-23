import React from "react";

export default function Button(props) {
  return (
    <button
      className={`game_table_button ${props.modify} ${
        props.moves && props.moves.length === 1 ? "start_game_hidden" : ""
      }`}
      onClick={() => props.handle(props.index)}
    >
      {props.desc}
    </button>
  );
}
