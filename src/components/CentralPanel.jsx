import React from "react";
import ButtonClassF from "./CentralPanel/ButtonClassF";
import ButtonClassStd from "./CentralPanel/ButtonClassStd";
import {
  TfiReddit,
  TfiTwitter,
  TfiStar,
  TfiTarget,
  TfiSkype,
  TfiSettings,
  TfiPalette,
  TfiPackage,
  TfiPaintRoller,
  TfiMagnet,
  TfiLocationArrow,
  TfiMicrophone,
} from "react-icons/tfi";

const styleSVGCentralPanel = {
  width: "14px",
  height: "17px",
  color: "#ffffff",
};

const btn1F = [
  ["Esc", ""],
  [<TfiReddit style={styleSVGCentralPanel} />, "F1"],
  [<TfiTwitter style={styleSVGCentralPanel} />, "F2"],
  [<TfiStar style={styleSVGCentralPanel} />, "F3"],
  [<TfiTarget style={styleSVGCentralPanel} />, "F4"],
  [<TfiSkype style={styleSVGCentralPanel} />, "F5"],
  [<TfiSettings style={styleSVGCentralPanel} />, "F6"],
  [<TfiPalette style={styleSVGCentralPanel} />, "F7"],
  [<TfiPackage style={styleSVGCentralPanel} />, "F8"],
  [<TfiPaintRoller style={styleSVGCentralPanel} />, "F9"],
  [<TfiMagnet style={styleSVGCentralPanel} />, "F10"],
  [<TfiLocationArrow style={styleSVGCentralPanel} />, "F11"],
  [<TfiMicrophone style={styleSVGCentralPanel} />, "F12"],
  ["Insert", "Scr Lk"],
  ["Delete", "Print Scr"],
];

const btn2Number = [
  ["~", "`", "Ё"],
  ["!", "1"],
  ["@", "2", '"'],
  ["#", "3", "№"],
  ["$", "4", ";"],
  ["%", "5"],
  ["^", "6", ":"],
  ["&", "7", "?"],
  ["*", "8"],
  ["(", "9"],
  [")", "0"],
  ["_", "-"],
  ["+", "="],
  ["Backspace"],
];

export default function CentralPanel() {
  return (
    <>
      <div className="block-1-Esc">
        {btn1F.map((item, i) => (
          <ButtonClassF key={i} data={item} />
        ))}
      </div>
      <div className="block-2-Number">
        {btn2Number.map((item, i) => (
          <ButtonClassStd key={i} data={item} />
        ))}
      </div>
      <div className="block-3-Enter">
        <div className="block-3-Tab"></div>
        <div className="block-3-CapsLock"></div>
      </div>
      <div className="block-4-Shift"></div>
      <div className="block-5-Space"></div>
    </>
  );
}
