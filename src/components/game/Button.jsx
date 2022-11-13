import React from "react";

export default function Button(props) {
  return (
    <button
      className={`game-table-button ${props.modify}`}
      onClick={() => props.handle(props.index)}
    >
      {props.desc}
    </button>
  );
}
