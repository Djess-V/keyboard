import React from "react";
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
  TfiMicrosoftAlt,
  TfiAlignJustify,
  TfiArrowCircleLeft,
  TfiArrowCircleDown,
  TfiArrowCircleRight,
} from "react-icons/tfi";

export const styleSVG = {
  width: "14px",
  height: "17px",
  color: "#ffffff",
};

export const styleSVGArrow = {
  width: "11px",
  height: "11px",
  color: "#ffffff",
};

export const btn1F = [
  ["Esc", ""],
  [<TfiReddit style={styleSVG} />, "F1"],
  [<TfiTwitter style={styleSVG} />, "F2"],
  [<TfiStar style={styleSVG} />, "F3"],
  [<TfiTarget style={styleSVG} />, "F4"],
  [<TfiSkype style={styleSVG} />, "F5"],
  [<TfiSettings style={styleSVG} />, "F6"],
  [<TfiPalette style={styleSVG} />, "F7"],
  [<TfiPackage style={styleSVG} />, "F8"],
  [<TfiPaintRoller style={styleSVG} />, "F9"],
  [<TfiMagnet style={styleSVG} />, "F10"],
  [<TfiLocationArrow style={styleSVG} />, "F11"],
  [<TfiMicrophone style={styleSVG} />, "F12"],
  ["Insert", "Scr Lk"],
  ["Delete", "Print Scr"],
];

export const btn2Number = [
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

export const btn5Space = [
  ["Ctrl"],
  ["FN"],
  [<TfiMicrosoftAlt style={styleSVG} />],
  ["Alt"],
  [""],
  ["AltGr"],
  [
    "Ctrl",
    <TfiAlignJustify
      style={{
        width: "8px",
        height: "8px",
        color: "#ffffff",
      }}
    />,
  ],
  ["Home", <TfiArrowCircleLeft style={styleSVGArrow} />],
  [
    "Page",
    <TfiArrowCircleDown
      style={{
        width: "7px",
        height: "7px",
        color: "#ffffff",
      }}
    />,
    <TfiArrowCircleDown style={styleSVGArrow} />,
  ],
  ["End", <TfiArrowCircleRight style={styleSVGArrow} />],
];
