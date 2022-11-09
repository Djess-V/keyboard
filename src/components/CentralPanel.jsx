import React from "react";
import ButtonClassF from "./CentralPanel/ButtonClassF";
import ButtonClassStd from "./CentralPanel/ButtonClassStd";
import ButtonEnter from "./CentralPanel/ButtonEnter";
import {
  btn1F,
  btn2Number,
  btn3Tab,
  btn3CapsLock,
  btn4Shift,
  btn5Space,
} from "../data/data";

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
      <div className="block-3">
        <div className="block-3-Tab">
          {btn3Tab.map((item, i) => (
            <ButtonClassStd key={i} data={item} />
          ))}
        </div>
        <div className="block-3-CapsLock">
          {btn3CapsLock.map((item, i) => (
            <ButtonClassStd key={i} data={item} />
          ))}
        </div>
        <ButtonEnter />
      </div>
      <div className="block-4-Shift">
        {btn4Shift.map((item, i) => (
          <ButtonClassStd key={i} data={item} />
        ))}
      </div>
      <div className="block-5-Space">
        {btn5Space.map((item, i) => (
          <ButtonClassStd key={i} data={item} />
        ))}
      </div>
    </>
  );
}
