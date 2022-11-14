import React from "react";

export default function ButtonEnter({
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
  }, [active]);

  return (
    <>
      <div
        className={`btnEnter ${isHidden("86") ? "hidden" : ""}`}
        onClick={() => onClick("86")}
        data-id="86"
      >
        <div
          ref={refBtnEnterLU}
          onPointerOver={addActive}
          onPointerOut={addNotActive}
          className="btnEnter__LU"
        ></div>
        <div className="btnEnter__LD"></div>
        <div
          ref={refBtnEnterRU}
          onPointerOver={addActive}
          onPointerOut={addNotActive}
          className="btnEnter__RU"
        >
          <p>Enter</p>
        </div>
        <div
          ref={refBtnEnterRD}
          onPointerOver={addActive}
          onPointerOut={addNotActive}
          className="btnEnter__RD"
        ></div>
      </div>
    </>
  );
}
