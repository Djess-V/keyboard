import React from "react";
import Square from "./Square";
import { v4 } from "uuid";

class Board extends React.Component {
  renderSquare(i, status) {
    return (
      <Square
        key={v4()}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        status={status}
      />
    );
  }

  render() {
    let divs = [],
      status = "ordinary",
      lines = this.props.modify;

    for (let i = 0; i < 3; i++) {
      let squares = [];
      for (let j = 0; j < 3; j++) {
        let current = 3 * i + j;
        if (lines.length !== 0) {
          for (let elem of lines) {
            status = elem === current ? "winner" : "ordinary";
            if (status === "winner") {
              break;
            }
          }
        }
        squares.push(this.renderSquare(current, status));
      }
      divs[i] = (
        <div key={v4()} className="board-row">
          {squares}
        </div>
      );
    }

    return <div>{divs}</div>;
  }
}

/* ---------------------------------------------------------------------------------- */

export default Board;
