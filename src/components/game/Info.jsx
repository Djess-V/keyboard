import React from "react";
import Button from "./Button";

function Info({ moves, status }) {
  return (
    <>
      <div className="game-info__status">{status}</div>
      <Button modify="start" desc="Ещё разочек..." moves={moves} />
    </>
  );
}

/* ---------------------------------------------------------------------------------- */

export default Info;
