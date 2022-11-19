import React from "react";

export default function ButtonClassStd({
  onComputer,
  onShift,
  onCapsLock,
  onFN,
  onAlt,
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
        className={`${block}__btnClassStd ${isHidden(id) ? "hidden" : ""} 
        ${onShift && (id === 62 || id === 75) && onComputer ? "buttonOn" : ""} 
        ${onComputer ? "onComputer" : ""} 
        ${onFN && (id === 77) && onComputer ? "buttonOn" : ""}
        ${onCapsLock && (id === 49) && onComputer ? "buttonOn" : ""}
        ${onAlt && (id === 79 || id === 81) && onComputer ? "buttonOn" : ""}`}
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
