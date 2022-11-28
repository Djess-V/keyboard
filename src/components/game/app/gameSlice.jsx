import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    handleClick: function (state, action) {
      state.history.push({
        squares: action.payload.squares,
        position: action.payload.i,
        style: "#000000",
      });

      state.stepNumber = action.payload.history.length;
      state.xIsNext = !state.xIsNext;
    },
  },
});

export const selectCurrent = (state) => state.history[state.stepNumber];

export const { handleClick } = gameSlice.actions;

export const clickHistory = (i) => (dispatch, getState) => {
  const state = getState();
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares).squares || squares[i]) {
    return;
  }
  squares[i] = state.xIsNext ? "X" : "O";
  dispatch(handleClick({ i, history, squares }));
};
/* 
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};
 */

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

export default gameSlice.reducer;
