import React from "react";
import Note from "./Note";

export default function Notes({ info }) {
  return (
    <div className="notes">
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
