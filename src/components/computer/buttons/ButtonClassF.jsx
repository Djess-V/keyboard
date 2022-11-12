import React from "react";

export default function ButtonClassF({
  isAction = (f) => f,
  data,
  id,
  block = "",
  onClick = (f) => f,
}) {
  return (
    <>
      <button
        data-id={id}
        onClick={() => onClick(id)}
        className={`${block}__btnClassF ${isAction(id) ? "action" : ""}`}
      >
        {data[0]}
        <p>{data[1]}</p>
      </button>
    </>
  );
}
