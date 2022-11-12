import React from "react";
import UpPanel from "./UpPanel";
import CentralPanel from "./CentralPanel";
import MousePanel from "./MousePanel";

export default function Keyboard() {
  const [condition, setCondition] = React.useState([]);

  const handlerClick = (id) => {
    if (id === "100") {
      setCondition([]);
    } else {
      setCondition([...condition, id]);
    }
  };

  const isAction = (id) => {
    for (let item of condition) {
      if (item === id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="computer__keyboard">
      <UpPanel
        onClick={handlerClick}
        condition={condition}
        isAction={isAction}
      />
      <div className="keyboard__downContainer">
        <CentralPanel
          onClick={handlerClick}
          condition={condition}
          isAction={isAction}
        />
        <MousePanel />
      </div>
    </div>
  );
}
