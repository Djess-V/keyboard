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

export default function UpPanel({
  condition,
  onClick = (f) => f,
  isAction = (f) => f,
}) {
  return (
    <>
      <div className="leftPanel">
        <button
          className={`button mouseBtn ${isAction("1") ? "action" : ""}`}
          onClick={() => onClick("1")}
          data-id="1"
        >
          <TfiMouseAlt style={styleSVG} />
        </button>
        <button
          className={`button soundBtn ${isAction("2") ? "action" : ""}`}
          onClick={() => onClick("2")}
          data-id="2"
        >
          <TfiMusicAlt style={styleSVG} />
        </button>
        <button
          className={`button homeBtn ${isAction("3") ? "action" : ""}`}
          onClick={() => onClick("3")}
          data-id="3"
        >
          <TfiHome style={styleSVG} />
        </button>
        <button
          className={`button blockBtn ${isAction("4") ? "action" : ""}`}
          onClick={() => onClick("4")}
          data-id="4"
        >
          <TfiLock style={styleSVG} />
          <p>PC</p>
        </button>
        <button
          className={`button offBtn ${isAction("5") ? "action" : ""}`}
          onClick={() => onClick("5")}
          data-id="5"
        >
          <TfiPowerOff style={styleSVG} />
          <p>PC</p>
        </button>
      </div>
      <div className="button rightPanel">
        <div className="emblem">
          <TfiApple
            style={{ width: "25px", height: "25px" }}
            onClick={() => window.location.reload()}
            title="Нажми на меня, чтобы перезагрузить страницу!"
          />
          <p>Apple</p>
        </div>
      </div>
    </>
  );
}
