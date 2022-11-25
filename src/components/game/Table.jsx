import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table(props) {
  return (
    <table className="game_table">
      <TableHead handleClick={(e) => props.handleClick(e)} />
      <TableBody moves={props.moves} />
    </table>
  );
}

/* ---------------------------------------------------------------------------------- */

export default Table;
