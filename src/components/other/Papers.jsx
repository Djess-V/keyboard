import React from "react";
import Note from "./Note";

export default function Papers({ info }) {
  return (
    <div className="papers">
      {info.map((item) => (
        <Note
          key={item.modificator}
          data={item.data}
          modificator={item.modificator}
        />
      ))}
    </div>
  );
}
