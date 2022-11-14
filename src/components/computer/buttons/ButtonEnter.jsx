import React from "react";

export default function ButtonEnter({
  onComputer,
  onClick = (f) => f,
  isHidden = (f) => f,
}) {
  const [active, setActive] = React.useState("notActive");
  const refBtnEnterLU = React.useRef();
  const refBtnEnterRU = React.useRef();
  const refBtnEnterRD = React.useRef();

  const addActive = () => {
    setActive("activeBtnEnter");
  };

  const addNotActive = () => {
    setActive("notActive");
  };

  React.useEffect(() => {
    refBtnEnterLU.current.id = active;
    refBtnEnterRU.current.id = active;
    refBtnEnterRD.current.id = active;
  }, [active, onComputer]);

  return (
    <>
      <div
        className={`btnEnter ${isHidden("86") ? "hidden" : ""} ${
          onComputer ? "onComputer" : ""
        }`}
        onClick={() => onClick("86")}
        data-id="86"
      >
        <div
          ref={refBtnEnterLU}
          onPointerOver={() => {
            onComputer && addActive();
          }}
          onPointerOut={() => {
            onComputer && addNotActive();
          }}
          className="btnEnter__LU"
        ></div>
        <div className={`btnEnter__LD ${onComputer ? "onComputer" : ""}`}></div>
        <div
          ref={refBtnEnterRU}
          onPointerOver={() => {
            onComputer && addActive();
          }}
          onPointerOut={() => {
            onComputer && addNotActive();
          }}
          className={`btnEnter__RU ${onComputer ? "onComputer" : ""}`}
        >
          <p>Enter</p>
        </div>
        <div
          ref={refBtnEnterRD}
          onPointerOver={() => {
            onComputer && addActive();
          }}
          onPointerOut={() => {
            onComputer && addNotActive();
          }}
          className={`btnEnter__RD ${onComputer ? "onComputer" : ""}`}
        ></div>
      </div>
    </>
  );
}
