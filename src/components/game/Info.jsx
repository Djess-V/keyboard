import React from "react";
import Button from "./Button";

function Info(props) {
  return (
    <>
      <div className="game-info__status">{props.status}</div>
      <Button
        modify="start"
        desc="Ещё разочек..."
        handle={() => props.onClick()}
        moves={props.moves}
      />
    </>
  );
}

/* ---------------------------------------------------------------------------------- */

export default Info;
