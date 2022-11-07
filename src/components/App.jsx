import React from "react";
import UpPanel from "./UpPanel";

export default function App() {
  return (
    <div className="keyboard">
      <div className="up-panel">
        <UpPanel />
      </div>

      <div className="center-panel"></div>
      <div className="mouse-panel"></div>
    </div>
  );
}
