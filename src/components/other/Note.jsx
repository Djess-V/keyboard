import React from "react";
import flowers from "../../assets/flowers.png";
import snowman from "../../assets/snowman.png";
import stars from "../../assets/stars.png";
import girls from "../../assets/girls-fly-peace-pigeons.png";

const image = [flowers, snowman, stars, girls];

export default function Note({ data, modificator }) {
  return (
    <div className={`note_${modificator}`}>
      {data.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <img
        className={`image_${modificator}`}
        src={image[modificator - 1]}
        alt=""
      />
    </div>
  );
}
