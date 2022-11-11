import React from "react";
import ButtonClassF from "./buttons/ButtonClassF";
import ButtonClassStd from "./buttons/ButtonClassStd";
import ButtonEnter from "./buttons/ButtonEnter";
import {
  btn1F,
  btn2Number,
  btn3Tab,
  btn3CapsLock,
  btn4Shift,
  btn5Space,
} from "../data/data";

export default function CentralPanel({
  onClick = (f) => f,
  isAction = (f) => f,
}) {
  return (
    <>
      <div className="block-1-Esc">
        {btn1F.map((item, i) => (
          <ButtonClassF
            key={i}
            data={item.data}
            id={item.id}
            onClick={onClick}
            isAction={isAction}
          />
        ))}
      </div>
      <div className="block-2-Number">
        {btn2Number.map((item, i) => (
          <ButtonClassStd
            key={i}
            data={item.data}
            id={item.id}
            onClick={onClick}
            isAction={isAction}
          />
        ))}
      </div>
      <div className="block-3">
        <div className="block-3-Tab">
          {btn3Tab.map((item, i) => (
            <ButtonClassStd
              key={i}
              data={item.data}
              id={item.id}
              onClick={onClick}
              isAction={isAction}
            />
          ))}
        </div>
        <div className="block-3-CapsLock">
          {btn3CapsLock.map((item, i) => (
            <ButtonClassStd
              key={i}
              data={item.data}
              id={item.id}
              onClick={onClick}
              isAction={isAction}
            />
          ))}
        </div>
        <ButtonEnter onClick={onClick} isAction={isAction} />
      </div>
      <div className="block-4-Shift">
        {btn4Shift.map((item, i) => (
          <ButtonClassStd
            key={i}
            data={item.data}
            id={item.id}
            onClick={onClick}
            isAction={isAction}
          />
        ))}
      </div>
      <div className="block-5-Space">
        {btn5Space.map((item, i) => (
          <ButtonClassStd
            key={i}
            data={item.data}
            id={item.id}
            onClick={onClick}
            isAction={isAction}
          />
        ))}
      </div>
    </>
  );
}
