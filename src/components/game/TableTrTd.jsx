import React from "react";
import { v4 } from "uuid";
import Button from "./Button";

function TableTrTd(props) {
  return (
    <tr key={v4()} style={{ backgroundColor: props.style }}>
      <td>
        <Button
          modify=""
          index={props.index}
          desc={props.desc}
          handle={(index) => props.handleClickButton(index)}
        />
      </td>
      <td>{props.position}</td>
      <td>
        <a href="#" onClick={(e) => props.handleClickA(e, props.index)}>
          {props.strHl}
        </a>
      </td>
    </tr>
  );
}

/* ---------------------------------------------------------------------------------- */

export default TableTrTd;
