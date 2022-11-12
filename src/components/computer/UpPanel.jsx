import React from "react";
import { TfiApple } from "react-icons/tfi";
import { btnUpP } from "../../data/data";

export default function UpPanel({
  condition,
  onClick = (f) => f,
  isAction = (f) => f,
}) {
  return (
    <>
      <div className="keyboard__upPanel">
        <div className="keyboard__upPanel__leftPanel">
          {btnUpP.map((item, i) => (
            <button
              key={i}
              className={`${item.name} ${isAction(item.id) ? "action" : ""}`}
              data-id={item.id}
              onClick={() => onClick(item.id)}
            >
              {item.data[0]}
              {item.data[1] && <p>{item.data[1]}</p>}
            </button>
          ))}
        </div>
        <div
          className="keyboard__upPanel__rightPanel"
          onClick={() => onClick("100")}
        >
          <div className="emblem">
            <TfiApple
              style={{ width: "25px", height: "25px" }}
              title="Нажми на меня, чтобы вернуть кнопки!"
            />
            <p>Apple</p>
          </div>
        </div>
      </div>
    </>
  );
}
