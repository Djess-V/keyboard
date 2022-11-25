import React from "react";
import Board from "./Board";
import Info from "./Info";
import Table from "./Table";
import TableTrTd from "./TableTrTd";
import { v4 } from "uuid";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          position: null,
          style: "#000000",
        },
      ],
      sort: "down",
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares).squares || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          position: i,
          style: "#000000",
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  highlight(e, index) {
    e.preventDefault();
    let style = this.state.history[index].style;
    this.state.history[index].style =
      style === "#000000" ? "#0ee8f8" : "#000000";
    this.setState(this.state);
  }

  sortHistory(e) {
    if (e.target.id === "sortUp" && this.state.sort === "down") {
      this.setState({
        sort: "up",
      });
    } else if (e.target.id === "sortDown" && this.state.sort === "up") {
      this.setState({
        sort: "down",
      });
    }
  }

  handleClickToStartGame() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
          position: null,
          style: "#000000",
        },
      ],
      sort: "down",
      stepNumber: 0,
      xIsNext: true,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const lines = winner.lines ? winner.lines : [];

    let status;
    if (winner.standoff === false) {
      status = "Следующий ход: " + (this.state.xIsNext ? "X" : "O");
    } else if (winner.squares) {
      status = "Выиграл: " + winner.squares;
    } else if (winner.standoff) {
      status = "Ничья";
    }

    const moves = history.map((step, index) => {
      const desc = index ? "Перейти к ходу #" + index : "К началу игры";
      const position =
        step.position !== null ? `${formatMovePosition(step.position)}` : "";
      const strHl = step.style === "#000000" ? "Выделить" : "Снять выделение";

      return (
        <TableTrTd
          key={v4()}
          style={step.style}
          index={index}
          desc={desc}
          position={position}
          strHl={strHl}
          handleClickButton={(index) => this.jumpTo(index)}
          handleClickA={(e, index) => this.highlight(e, index)}
        />
      );
    });

    if (this.state.sort === "up") {
      moves.reverse();
    }

    return (
      <div className="game">
        <h1>Можно поиграть в крестики-нолики!</h1>
        <h2>(ну, конечно можно и не играть...)</h2>
        <div className="game_board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            modify={lines}
          />
        </div>
        <div>
          <Info
            moves={moves}
            status={status}
            onClick={() => this.handleClickToStartGame()}
          />
          <Table moves={moves} handleClick={(e) => this.sortHistory(e)} />
        </div>
      </div>
    );
  }
}

/* ---------------------------------------------------------------------------------- */

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let collection = new Set(),
    current;

  for (let i = 0, len = lines.length; i < len; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      current = a;
      for (let j = 0, len = lines[i].length; j < len; j++) {
        collection.add(lines[i][j]);
      }
    }
  }

  collection = Array.from(collection);

  if (collection.length) {
    return {
      squares: squares[current],
      lines: collection,
    };
  }

  let standoff = true;
  for (let square of squares) {
    if (square === null) {
      standoff = false;
    }
  }

  return {
    standoff: standoff,
  };
}

function formatMovePosition(position) {
  const array = [
    "(1,1)",
    "(1,2)",
    "(1,3)",
    "(2,1)",
    "(2,2)",
    "(2,3)",
    "(3,1)",
    "(3,2)",
    "(3,3)",
  ];

  return array[position];
}

/* ---------------------------------------------------------------------------------- */

export default Game;
