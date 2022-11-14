import React from "react";
import UpPanel from "./UpPanel";
import CentralPanel from "./CentralPanel";
import MousePanel from "./MousePanel";

export default function Keyboard({
  onMouse,
  onMusic,
  onLock,
  onComputer,
  onCapsLock,
  onAlt,
  onShift,
  missingButtons,
  onClickButton = (f) => f,
}) {
  const isHidden = (id) => {
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
        onMouse={onMouse}
        onMusic={onMusic}
        onLock={onLock}
        onComputer={onComputer}
        onAlt={onAlt}
        condition={missingButtons}
        isHidden={isHidden}
        onClick={onClickButton}
      />
      <div className="keyboard__downContainer">
        <CentralPanel
          onComputer={onComputer}
          onShift={onShift}
          onClick={onClickButton}
          condition={missingButtons}
          isHidden={isHidden}
        />
        <MousePanel onComputer={onComputer} onCapsLock={onCapsLock} />
      </div>
    </div>
  );
}
