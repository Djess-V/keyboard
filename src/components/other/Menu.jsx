import React from "react";

export default function Menu({ info, handleClick = (f) => f, buttonAction }) {
  return (
    <ul>
      {info.map((item) => (
        <li
          key={item.modificator}
          onClick={() => handleClick(item.modificator)}
        >
          {item.modificator === 1 &&
            `${buttonAction ? "Вернуть кнопки!" : ""} ${item.data} ${
              buttonAction
                ? "больше не пропадают!"
                : "начнут пропадать при нажатии!"
            }`}
        </li>
      ))}
    </ul>
  );
}
