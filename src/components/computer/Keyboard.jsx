import React from "react";
import UpPanel from "./UpPanel";
import CentralPanel from "./CentralPanel";
import MousePanel from "./MousePanel";

export default function Keyboard({
  onCapsLock,
  onAlt,
  onShift,
  missingButtons,
  onClickButton = (f) => f,
}) {
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
        onAlt={onAlt}
        condition={missingButtons}
        isAction={isAction}
        onClick={onClickButton}
      />
      <div className="keyboard__downContainer">
        <CentralPanel
          onShift={onShift}
          onClick={onClickButton}
          condition={missingButtons}
          isAction={isAction}
        />
        <MousePanel onCapsLock={onCapsLock} />
      </div>
    </div>
  );
}
