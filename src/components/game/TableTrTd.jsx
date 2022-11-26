import React from "react";
import { v4 } from "uuid";
import Button from "./Button";

function TableTrTd(props) {
  return (
    <tr key={v4()} style={{ backgroundColor: props.style }}>
      <td className="game-table-td">
        <Button
          modify=""
          index={props.index}
          desc={props.desc}
          handle={(index) => props.handleClickButton(index)}
        />
      </td>
      <td className="game-table-td">{props.position}</td>
      <td className="game-table-td">
        <a
          className="game-table-td__link"
          href="#"
          onClick={(e) => props.handleClickA(e, props.index)}
        >
          {props.strHl}
        </a>
      </td>
    </tr>
  );
}

/* ---------------------------------------------------------------------------------- */

export default TableTrTd;
