import React from "react";
import { CiWheat } from "react-icons/ci";

export default function Note({ data, modificator }) {
  return (
    <div className={`note ${modificator}`}>
      <span>
        <CiWheat fill="#000000" style={{ width: "20px", height: "20px" }} />
      </span>
      {data.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
