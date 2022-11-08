import React from "react";
import {
  TfiMouseAlt,
  TfiMusicAlt,
  TfiHome,
  TfiLock,
  TfiPowerOff,
  TfiApple,
} from "react-icons/tfi";

const styleSVGUpPanel = { width: "14px", height: "17px", color: "#ffffff" };

export default function UpPanel() {
  return (
    <>
      <div className="leftPanel">
        <button className="mouseBtn">
          <TfiMouseAlt style={styleSVGUpPanel} />
        </button>
        <button className="soundBtn">
          <TfiMusicAlt style={styleSVGUpPanel} />
        </button>
        <button className="homeBtn">
          <TfiHome style={styleSVGUpPanel} />
        </button>
        <button className="blockBtn">
          <TfiLock style={styleSVGUpPanel} />
          <p>PC</p>
        </button>
        <button className="offBtn">
          <TfiPowerOff style={styleSVGUpPanel} />
          <p>PC</p>
        </button>
      </div>
      <div className="rightPanel">
        <div className="emblem">
          <TfiApple style={{ width: "25px", height: "25px" }} />
          <p>Apple</p>
        </div>
      </div>
    </>
  );
}
