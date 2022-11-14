import React from "react";

export default function ButtonClassStd({
  onShift,
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
        className={`${block}__btnClassStd ${isAction(id) ? "action" : ""} ${
          onShift && (id === 62 || id === 75) ? "onShift" : ""
        }`}
      >
        <div className="column1">
          <p>{data[0]}</p>
          {data[1] && <p>{data[1]}</p>}
        </div>
        <div className="column2">
          {data[2] && <p>{data[2]}</p>}
          {data[3] && <p>{data[3]}</p>}
        </div>
      </button>
    </>
  );
}
