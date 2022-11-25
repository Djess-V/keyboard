import React from "react";
import { FcDown, FcUp } from "react-icons/fc";

function TableHead(props) {
  return (
    <thead>
      <tr>
        <th className="game_table_th">
          <span className="game_table_span">История</span>
          <span
            className="game_table_sort"
            onClick={(e) => props.handleClick(e)}
          >
            <FcUp id="sortUp" onClick={(e) => props.handleClick(e)} />
          </span>
          <span
            className="game_table_sort"
            onClick={(e) => props.handleClick(e)}
          >
            <FcDown id="sortDown" />
          </span>
        </th>
        <th>Позиция</th>
        <th className="game_table_th">Выделить</th>
      </tr>
    </thead>
  );
}

/* ---------------------------------------------------------------------------------- */

export default TableHead;
