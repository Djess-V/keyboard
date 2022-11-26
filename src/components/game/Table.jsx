import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table(props) {
  return (
    <>
      <TableHead handleClick={(e) => props.handleClick(e)} />
      <TableBody moves={props.moves} />
    </>
  );
}

/* ---------------------------------------------------------------------------------- */

export default Table;
