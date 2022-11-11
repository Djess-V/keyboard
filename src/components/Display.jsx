import React from "react";

export default function Display() {
  const [value, setValue] = React.useState("  ");
  const refTextarea = React.useRef();

  React.useEffect(() => {
    refTextarea.current.selectionStart = refTextarea.current.selectionEnd = 2;
  }, []);

  return (
    <div className="blockInput">
      <textarea
        ref={refTextarea}
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
}
