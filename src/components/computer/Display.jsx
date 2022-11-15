import React from "react";
import audio from "../../assets/mp3/lady_gaga_-_shallow.mp3";

export default function Display({
  onMouse,
  onMusic,
  onLock,
  symbol,
  indexDisplayImage,
  onComputer,
  mouseMove = (f) => f,
  mouseDirection,
}) {
  const [value, setValue] = React.useState(` Hello, friends...`);
  const refInput = React.useRef();
  const refMouse = React.useRef();

  React.useEffect(() => {
    if (refInput.current) {
      refInput.current.selectionStart = refInput.current.selectionEnd = 18;
    }
  }, [refInput.current]);

  React.useEffect(() => {
    setValue(value + symbol);
  }, [symbol]);

  return (
    <div className={`computer__display`}>
      {onComputer && !onLock && (
        <div className={`display_background displayImage_${indexDisplayImage}`}>
          <input
            ref={refInput}
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button>Поиск</button>
          <button className="clear" onClick={() => setValue("")}>
            Очистить
          </button>
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
                setTimeout(() => {
                  mouseMove("moveRightMouse");
                  setTimeout(() => {
                    mouseMove("rotateMouseUp");
                    setTimeout(() => {
                      mouseMove("moveUpMouse");
                      setTimeout(() => {
                        mouseMove("rotateMouseLeft");
                        setTimeout(() => {
                          mouseMove("moveLeftMouse");
                          setTimeout(() => {
                            mouseMove("rotateMouseDown");
                            setTimeout(() => {
                              mouseMove("moveDownMouse");
                              setTimeout(() => {
                                mouseMove("rotateMouseRight");
                                setTimeout(() => {
                                  mouseMove("");
                                }, 6000);
                              }, 4000);
                            }, 4000);
                          }, 8000);
                        }, 4000);
                      }, 4000);
                    }, 4000);
                  }, 8000);
                }, 0);
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
