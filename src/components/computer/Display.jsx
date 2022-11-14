import React from "react";

export default function Display({
  onMouse,
  onMusic,
  onLock,
  symbol,
  indexDisplayImage,
  onComputer,
  mouseOff = (f) => f,
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
            <audio
              controls
              src="../../src/assets/mp3/lady_gaga_-_shallow.mp3"
              autoPlay
            >
              Ваш браузер не поддерживает элемент <code>audio</code>.
            </audio>
          )}
          {onMouse && (
            <div
              ref={refMouse}
              className="display_mouse"
              onPointerOver={() => {
                refMouse.current.style.left = "480px";
                setTimeout(mouseOff, 10500);
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
