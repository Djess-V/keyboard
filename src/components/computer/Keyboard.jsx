import React from "react";
import UpPanel from "./UpPanel";
import CentralPanel from "./CentralPanel";
import MousePanel from "./MousePanel";

export default function Keyboard({ missingButtons, onClickButton = (f) => f }) {
  const isAction = (id) => {
    for (let item of missingButtons) {
      if (item === id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="computer__keyboard">
      <UpPanel
        condition={missingButtons}
        isAction={isAction}
        onClick={onClickButton}
      />
      <div className="keyboard__downContainer">
        <CentralPanel
          onClick={onClickButton}
          condition={missingButtons}
          isAction={isAction}
        />
        <MousePanel />
      </div>
    </div>
  );
}
