import React from "react";

function Square(props) {
  return (
    <button
      className={`board-row__square board-row__square_status_${props.status}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

/* ---------------------------------------------------------------------------------- */

export default Square;
