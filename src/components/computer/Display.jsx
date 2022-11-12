import React from "react";

export default function Display() {
  const [value, setValue] = React.useState("  Hello, friends...");
  const refTextarea = React.useRef();

  React.useEffect(() => {
    refTextarea.current.selectionStart = refTextarea.current.selectionEnd = 19;
  }, []);

  return (
    <div className="computer__display">
      <textarea
        ref={refTextarea}
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
}
