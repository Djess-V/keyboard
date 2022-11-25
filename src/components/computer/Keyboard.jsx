import React from "react";
import UpPanel from "./UpPanel";
import CentralPanel from "./CentralPanel";
import MousePanel from "./MousePanel";

function Keyboard({
  onMouse,
  onMusic,
  onLock,
  onComputer,
  onCapsLock,
  onAlt,
  onCtrl,
  onShift,
  onFN,
  missingButtons,
  onClickButton = (f) => f,
  codeButtonDown,
  codeButtonUp,
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
        codeButtonDown={codeButtonDown}
        codeButtonUp={codeButtonUp}
      />
      <div className="keyboard__downContainer">
        <CentralPanel
          onComputer={onComputer}
          onShift={onShift}
          onCapsLock={onCapsLock}
          onAlt={onAlt}
          onCtrl={onCtrl}
          onFN={onFN}
          onClick={onClickButton}
          condition={missingButtons}
          isHidden={isHidden}
          codeButtonDown={codeButtonDown}
          codeButtonUp={codeButtonUp}
        />
        <MousePanel onComputer={onComputer} onCapsLock={onCapsLock} />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------------- */

export default Keyboard;
