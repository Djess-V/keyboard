import React from "react";

export default function ButtonClassStd({ data }) {
  return (
    <>
      <button className="btnClassStd">
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
