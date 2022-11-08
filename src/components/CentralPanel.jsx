import React from "react";
import ButtonClassF from "./CentralPanel/ButtonClassF";
import ButtonClassStd from "./CentralPanel/ButtonClassStd";
import { btn1F, btn2Number, btn5Space } from "../data/data";

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
      <div className="block-5-Space">
        {btn5Space.map((item, i) => (
          <ButtonClassStd key={i} data={item} />
        ))}
      </div>
    </>
  );
}
