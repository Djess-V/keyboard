import React from "react";
import UpPanel from "./UpPanel";
import CentralPanel from "./CentralPanel";
import MousePanel from "./MousePanel";

export default function App() {
  return (
    <div className="keyboard">
      <div className="up-panel">
        <UpPanel />
      </div>
      <div className="down-container">
        <div className="central-panel">
          <CentralPanel />
        </div>
        <div className="mouse-panel">
          <MousePanel />
        </div>
      </div>
    </div>
  );
}
