import React from "react";
import { FcDown, FcUp } from "react-icons/fc";

function TableHead(props) {
  return (
    <thead>
      <tr>
        <th className="game-table-th">
          <span className="game-table-th__span">История</span>
          <button
            className="game-table-th-sort game-table-th-sort_mode_up"
            onClick={(e) => props.handleClick(e)}
          >
            <FcUp fill="#0ee8f8" />
          </button>
          <button
            className="game-table-th-sort game-table-th-sort_mode_down"
            onClick={(e) => props.handleClick(e)}
          >
            <FcDown fill="#0ee8f8" />
          </button>
        </th>
        <th className="game-table-th game-table-th_style_short">Позиция</th>
        <th className="game-table-th">Выделить</th>
      </tr>
    </thead>
  );
}

/* ---------------------------------------------------------------------------------- */

export default TableHead;
