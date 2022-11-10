import React from "react";

export default function ButtonEnter({
  onClick = (f) => f,
  isAction = (f) => f,
}) {
  return (
    <>
      <div
        className={`button btnEnter ${isAction("86") ? "action" : ""}`}
        onClick={() => onClick("86")}
        data-id="86"
      >
        <div id="btnEnterLU"></div>
        <div id="btnEnterLD"></div>
        <div id="btnEnterRU">
          <p>Enter</p>
        </div>
        <div id="btnEnterRD"></div>
      </div>
    </>
  );
}
