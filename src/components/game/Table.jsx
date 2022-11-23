import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function Table(props) {
  return (
    <table className="game_table">
      <TableHead handleClick={(e) => props.handleClick(e)} />
      <TableBody moves={props.moves} />
    </table>
  );
}
