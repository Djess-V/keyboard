import React from "react";
import Button from "./Button";

export default function Info(props) {
  return (
    <div className="game_info">
      <div className="game_info_status">{props.status}</div>
      <Button
        modify="start_game"
        desc="Ещё разочек..."
        handle={() => props.onClick()}
        moves={props.moves}
      />
    </div>
  );
}
