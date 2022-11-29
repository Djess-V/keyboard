import React from "react";
import { makeAStep } from "../../store/reducerGame/gameSlice";
import { useDispatch } from "react-redux";

function Square({ index, value, status }) {
  const dispatch = useDispatch();

  return (
    <button
      className={`board-row__square board-row__square_status_${status}`}
      onClick={() => dispatch(makeAStep(index))}
    >
      {value}
    </button>
  );
}

/* ---------------------------------------------------------------------------------- */

export default Square;
