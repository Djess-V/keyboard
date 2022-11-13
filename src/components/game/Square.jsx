import React from "react";

export default function Square(props) {
  return (
    <button className={`square ${props.status}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
