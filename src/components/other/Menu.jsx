import React from "react";
import ModalDisplayBg from "./ModalDisplayBg";

export default function Menu({
  info,
  isChangeBackground,
  closeModalDisplayBg = (f) => f,
  handleClick = (f) => f,
  handlerClickModalDisplayBg = (f) => f,
  buttonHidden,
}) {
  return (
    <>
      <p>Меню</p>
      <ul>
        {info.map((item, i) => {
          let str;

          if (i === 0) {
            str = `${buttonHidden ? "Вернуть кнопки!" : ""} ${item} ${
              buttonHidden
                ? "больше не пропадают!"
                : "начнут пропадать при нажатии!"
            }`;
          } else {
            str = item;
          }
          return (
            <li key={item} onClick={() => handleClick(i)}>
              {str}
            </li>
          );
        })}
      </ul>
      {isChangeBackground && (
        <ModalDisplayBg
          closeModalDisplayBg={closeModalDisplayBg}
          handlerClickModalDisplayBg={handlerClickModalDisplayBg}
        />
      )}
    </>
  );
}
