import React from "react";

export default function Display({ symbol, indexDisplayImage }) {
  const [value, setValue] = React.useState(` Hello, friends...`);
  const refInput = React.useRef();

  React.useEffect(() => {
    refInput.current.selectionStart = refInput.current.selectionEnd = 18;
  }, []);

  React.useEffect(() => {
    setValue(value + symbol);
  }, [symbol]);

  return (
    <div className="computer__display">
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
      </div>
    </div>
  );
}
