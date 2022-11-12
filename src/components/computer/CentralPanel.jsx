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
} from "../../data/data";

export default function CentralPanel({
  onClick = (f) => f,
  isAction = (f) => f,
}) {
  return (
    <>
      <div className="keyboard__downContainer__centralPanel">
        <div className="centralPanel__blockEsc">
          {btn1F.map((item, i) => (
            <ButtonClassF
              key={i}
              data={item.data}
              id={item.id}
              block="blockEsc"
              onClick={onClick}
              isAction={isAction}
            />
          ))}
        </div>
        <div className="centralPanel__blockNumbers">
          {btn2Number.map((item, i) => (
            <ButtonClassStd
              key={i}
              data={item.data}
              id={item.id}
              block="blockNumbers"
              onClick={onClick}
              isAction={isAction}
            />
          ))}
        </div>
        <div className="centralPanel__containerEnter">
          <div className="centralPanel__blockTab">
            {btn3Tab.map((item, i) => (
              <ButtonClassStd
                key={i}
                data={item.data}
                id={item.id}
                block="blockTab"
                onClick={onClick}
                isAction={isAction}
              />
            ))}
          </div>
          <div className="centralPanel__blockCapsLock">
            {btn3CapsLock.map((item, i) => (
              <ButtonClassStd
                key={i}
                data={item.data}
                id={item.id}
                block="blockCapsLock"
                onClick={onClick}
                isAction={isAction}
              />
            ))}
          </div>
          <ButtonEnter onClick={onClick} isAction={isAction} />
        </div>
        <div className="centralPanel__blockShift">
          {btn4Shift.map((item, i) => (
            <ButtonClassStd
              key={i}
              data={item.data}
              id={item.id}
              block="blockShift"
              onClick={onClick}
              isAction={isAction}
            />
          ))}
        </div>
        <div className="centralPanel__blockSpace">
          {btn5Space.map((item, i) => (
            <ButtonClassStd
              key={i}
              data={item.data}
              id={item.id}
              block="blockSpace"
              onClick={onClick}
              isAction={isAction}
            />
          ))}
        </div>
      </div>
    </>
  );
}
