import React from "react";

export default function ButtonClassStd({
  onComputer,
  onShift,
  isHidden = (f) => f,
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
        className={`${block}__btnClassStd ${isHidden(id) ? "hidden" : ""} ${
          onShift && (id === 62 || id === 75) && onComputer ? "onShift" : ""
        } ${onComputer ? "onComputer" : ""}`}
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
