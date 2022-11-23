import React from "react";

const symbolsCalculator = [
  "%",
  "CE",
  "C",
  "",
  "",
  "",
  "",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "",
  "0",
  ".",
  "=",
];

export default function Calculator() {
  const buttons = symbolsCalculator.map((item, i) => (
    <button key={i} className="calculator_button">
      {item}
    </button>
  ));

  return (
    <div className="display_calculator">
      <input />
      <div className="calculator_memory"></div>
      <div className="calculator_buttons">{buttons}</div>
    </div>
  );
}
