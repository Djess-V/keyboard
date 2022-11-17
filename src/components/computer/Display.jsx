import React from "react";
import audio from "../../assets/mp3/lady_gaga_-_shallow.mp3";
import SearchPanel from "./SearchPanel";

export default function Display({
  onMouse,
  onMusic,
  onLock,
  symbol,
  pressedButton,
  indexDisplayImage,
  onComputer,
  mouseMove = (f) => f,
  canselMouseMove = (f) => f,
  mouseDirection,
  pressedButtonLeft,
  pressedButtonRight,
  pressedButtonDelete,
  pressedButtonBackspace,
}) {
  const refMouse = React.useRef();
  let timerMoveMouse;

  return (
    <div className={`computer__display`}>
      {onComputer && !onLock && (
        <div className={`display_background displayImage_${indexDisplayImage}`}>
          <SearchPanel
            pressedButton={pressedButton}
            pressedButtonBackspace={pressedButtonBackspace}
            pressedButtonDelete={pressedButtonDelete}
            pressedButtonLeft={pressedButtonLeft}
            pressedButtonRight={pressedButtonRight}
            symbol={symbol}
          />
          {onMusic && (
            <audio controls src={audio} autoPlay>
              Ваш браузер не поддерживает элемент <code>audio</code>.
            </audio>
          )}
          {onMouse && (
            <div
              ref={refMouse}
              className={`display_mouse ${onMouse ? mouseDirection : ""}`}
              onPointerOver={() => {
                if (!mouseDirection) {
                  timerMoveMouse = setTimeout(() => {
                    mouseMove("moveRightMouse");
                    timerMoveMouse = setTimeout(() => {
                      mouseMove("rotateMouseUp");
                      timerMoveMouse = setTimeout(() => {
                        mouseMove("moveUpMouse");
                        timerMoveMouse = setTimeout(() => {
                          mouseMove("rotateMouseLeft");
                          timerMoveMouse = setTimeout(() => {
                            mouseMove("moveLeftMouse");
                            timerMoveMouse = setTimeout(() => {
                              mouseMove("rotateMouseDown");
                              timerMoveMouse = setTimeout(() => {
                                mouseMove("moveDownMouse");
                                timerMoveMouse = setTimeout(() => {
                                  mouseMove("rotateMouseRight");
                                  timerMoveMouse = setTimeout(() => {
                                    mouseMove("");
                                  }, 4100);
                                }, 4000);
                              }, 4000);
                            }, 8000);
                          }, 4000);
                        }, 4000);
                      }, 4000);
                    }, 8000);
                  }, 0);
                  setTimeout(() => {
                    canselMouseMove(timerMoveMouse);
                    setTimeout(() => {
                      canselMouseMove(timerMoveMouse);
                      setTimeout(() => {
                        canselMouseMove(timerMoveMouse);
                        setTimeout(() => {
                          canselMouseMove(timerMoveMouse);
                          setTimeout(() => {
                            canselMouseMove(timerMoveMouse);
                            setTimeout(() => {
                              canselMouseMove(timerMoveMouse);
                              setTimeout(() => {
                                canselMouseMove(timerMoveMouse);
                                setTimeout(() => {
                                  canselMouseMove(timerMoveMouse);
                                }, 4500);
                              }, 4500);
                            }, 8500);
                          }, 4500);
                        }, 4500);
                      }, 4500);
                    }, 8500);
                  }, 500);
                }
              }}
            ></div>
          )}
        </div>
      )}
      {onComputer && onLock && (
        <div
          id="display_lock"
          className={`display_background display_lock`}
        ></div>
      )}
    </div>
  );
}
