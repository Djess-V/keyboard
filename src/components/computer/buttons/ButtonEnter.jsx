import React from "react";

export default function ButtonEnter({
  onClick = (f) => f,
  isAction = (f) => f,
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
        className={`button btnEnter ${isAction("86") ? "action" : ""}`}
        onClick={() => onClick("86")}
        data-id="86"
      >
        <div
          ref={refBtnEnterLU}
          onPointerOver={addActive}
          onPointerOut={addNotActive}
          className="btnEnterLU"
        ></div>
        <div className="btnEnterLD"></div>
        <div
          ref={refBtnEnterRU}
          onPointerOver={addActive}
          onPointerOut={addNotActive}
          className="btnEnterRU"
        >
          <p>Enter</p>
        </div>
        <div
          ref={refBtnEnterRD}
          onPointerOver={addActive}
          onPointerOut={addNotActive}
          className="btnEnterRD"
        ></div>
      </div>
    </>
  );
}
