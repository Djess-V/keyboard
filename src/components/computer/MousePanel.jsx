import React from "react";

export default function MousePanel({ onCapsLock }) {
  return (
    <>
      <div className="keyboard__downContainer__mousePanel">
        <div className="downContainer__mousePanel__board"></div>
        <div className="downContainer__mousePanel__buttons">
          <button className="mousePanel__buttons__left"></button>
          <button className="mousePanel__buttons__right"></button>
        </div>
        {onCapsLock && (
          <div className="downContainer__mousePanel__message">
            CapsLock включён
          </div>
        )}
      </div>
    </>
  );
}
