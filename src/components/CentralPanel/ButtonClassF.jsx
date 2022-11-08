import React from "react";

export default function ButtonClassF({ data }) {
  return (
    <>
      <button className="btnClassF">
        {data[0]}
        <p>{data[1]}</p>
      </button>
    </>
  );
}
