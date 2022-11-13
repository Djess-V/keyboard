import React from "react";
import Button from "./Button";

export default function Info(props) {
  return (
    <div className="game-info">
      <div className="game-info-status">{props.status}</div>
      <Button
        modify="start-game"
        desc="Начать игру!"
        handle={() => props.onClick()}
      />
    </div>
  );
}
