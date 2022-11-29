import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table({ moves }) {
  return (
    <>
      <TableHead />
      <TableBody moves={moves} />
    </>
  );
}

/* ---------------------------------------------------------------------------------- */

export default Table;
