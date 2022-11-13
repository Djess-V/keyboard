import React from "react";
import { FcDown, FcUp } from "react-icons/fc";

export default function TableHead(props) {
  return (
    <thead>
      <tr>
        <th className="game-table-th">
          <span className="game-table-span">История</span>
          <span
            className="game-table-sort"
            onClick={(e) => props.handleClick(e)}
          >
            <FcUp id="sortUp" onClick={(e) => props.handleClick(e)} />
          </span>
          <span
            className="game-table-sort"
            onClick={(e) => props.handleClick(e)}
          >
            <FcDown id="sortDown" />
          </span>
        </th>
        <th>Позиция</th>
        <th className="game-table-th">Выделить</th>
      </tr>
    </thead>
  );
}
