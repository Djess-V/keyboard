import React from "react";
import UpPanel from "./UpPanel";
import CentralPanel from "./CentralPanel";
import MousePanel from "./MousePanel";

export default function App() {
  const [condition, setCondition] = React.useState([]);

  const handlerClick = (id) => {
    setCondition([...condition, id]);
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
    <div className="keyboard">
      <div className="up-panel">
        <UpPanel
          onClick={handlerClick}
          condition={condition}
          isAction={isAction}
        />
      </div>
      <div className="down-container">
        <div className="central-panel">
          <CentralPanel
            onClick={handlerClick}
            condition={condition}
            isAction={isAction}
          />
        </div>
        <div className="mouse-panel">
          <MousePanel />
        </div>
      </div>
    </div>
  );
}
