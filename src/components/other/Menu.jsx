import React from "react";
import MenuModalWindow from "./MenuModalWindow";

let Menu = ({
  info,
  isChangeBackground,
  closeModalDisplayBg = (f) => f,
  handleClick = (f) => f,
  handlerClickModalDisplayBg = (f) => f,
  buttonHidden,
}) => {
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
        <MenuModalWindow
          closeModalDisplayBg={closeModalDisplayBg}
          handlerClickModalDisplayBg={handlerClickModalDisplayBg}
        />
      )}
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

Menu = React.memo(Menu);

export default Menu;
