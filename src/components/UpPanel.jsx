import React from "react";
import {
  TfiMouseAlt,
  TfiMusicAlt,
  TfiHome,
  TfiLock,
  TfiPowerOff,
  TfiApple,
} from "react-icons/tfi";
import { styleSVG } from "../data/data";

export default function UpPanel() {
  return (
    <>
      <div className="leftPanel">
        <button className="mouseBtn">
          <TfiMouseAlt style={styleSVG} />
        </button>
        <button className="soundBtn">
          <TfiMusicAlt style={styleSVG} />
        </button>
        <button className="homeBtn">
          <TfiHome style={styleSVG} />
        </button>
        <button className="blockBtn">
          <TfiLock style={styleSVG} />
          <p>PC</p>
        </button>
        <button className="offBtn">
          <TfiPowerOff style={styleSVG} />
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
