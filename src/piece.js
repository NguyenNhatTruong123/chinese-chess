export const WHITE_KING = "♔";
export const WHITE_QUEEN = "♕";
export const WHITE_ROOK = "♖";
export const WHITE_BISHOP = "♗";
export const WHITE_KNIGHT = "♘";
export const WHITE_PAWN = "♙";
export const BLACK_KING = "♚";
export const BLACK_QUEEN = "♛";
export const BLACK_ROOK = "♜";
export const BLACK_BISHOP = "♝";
export const BLACK_KNIGHT = "♞";
export const BLACK_PAWN = "♟";

export const RULES = {
  [WHITE_KING]: (chessPiece, oldPosition, board) =>
    KingRules(chessPiece, oldPosition, board),
  [BLACK_KING]: (chessPiece, oldPosition, board) =>
    KingRules(chessPiece, oldPosition, board),
  [WHITE_QUEEN]: (chessPiece, oldPosition, board) =>
    QueenRules(chessPiece, oldPosition, board),
  [BLACK_QUEEN]: (chessPiece, oldPosition, board) =>
    QueenRules(chessPiece, oldPosition, board),
  [WHITE_ROOK]: (chessPiece, oldPosition, board) =>
    RookRules(chessPiece, oldPosition, board),
  [BLACK_ROOK]: (chessPiece, oldPosition, board) =>
    RookRules(chessPiece, oldPosition, board),
  [WHITE_BISHOP]: (chessPiece, oldPosition, board) =>
    BishopRules(chessPiece, oldPosition, board),
  [BLACK_BISHOP]: (chessPiece, oldPosition, board) =>
    BishopRules(chessPiece, oldPosition, board),
  [WHITE_KNIGHT]: (chessPiece, oldPosition, board) =>
    KnightRules(chessPiece, oldPosition, board),
  [BLACK_KNIGHT]: (chessPiece, oldPosition, board) =>
    KnightRules(chessPiece, oldPosition, board),
  [WHITE_PAWN]: (chessPiece, oldPosition, board) =>
    WhitePawnRules(chessPiece, oldPosition, board),
  [BLACK_PAWN]: (chessPiece, oldPosition, board) =>
    BlackPawnRules(chessPiece, oldPosition, board),
};

export const KingRules = (chessPiece, oldPosition, board) => {
  let placeCanMove = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      if (
        oldPosition[0] + i >= 0 &&
        oldPosition[0] + i <= 7 &&
        oldPosition[1] + j >= 0 &&
        oldPosition[1] + j <= 7
      ) {
        if (board[oldPosition[0] + i][oldPosition[1] + j].piece === "")
          placeCanMove.push([oldPosition[0] + i, oldPosition[1] + j]);
        else {
          if (
            board[oldPosition[0] + i][oldPosition[1] + j].color !==
            chessPiece.color
          )
            placeCanMove.push([oldPosition[0] + i, oldPosition[1] + j]);
        }
      }
    }
  }

  return placeCanMove;
};

export const QueenRules = (chessPiece, oldPosition, board) => {};

export const BishopRules = (chessPiece, oldPosition, board) => {};

export const KnightRules = (chessPiece, oldPosition, board) => {};

export const RookRules = (chessPiece, oldPosition, board) => {
  let placeCanMove = [];
  const currentRook = board[oldPosition[0]][oldPosition[1]];
  for (let i = oldPosition[0] + 1; i < 8; i++) {
    if (board[i][oldPosition[1]].piece === "")
      placeCanMove.push([i, oldPosition[1]]);
    if (board[i][oldPosition[1]].piece !== "") {
      if (currentRook.color !== board[i][oldPosition[1]].color)
        placeCanMove.push([i, oldPosition[1]]);
      break;
    }
  }

  for (let i = oldPosition[0] - 1; i >= 0; i--) {
    if (board[i][oldPosition[1]].piece === "")
      placeCanMove.push([i, oldPosition[1]]);
    if (board[i][oldPosition[1]].piece !== "") {
      if (currentRook.color !== board[i][oldPosition[1]].color)
        placeCanMove.push([i, oldPosition[1]]);
      break;
    }
  }

  for (let i = oldPosition[1] + 1; i < 8; i++) {
    if (board[oldPosition[0]][i].piece === "")
      placeCanMove.push([oldPosition[0], i]);
    if (board[oldPosition[0]][i].piece !== "") {
      if (currentRook.color !== board[oldPosition[0]][i].color)
        placeCanMove.push([oldPosition[0], i]);
      break;
    }
  }

  for (let i = oldPosition[1] - 1; i >= 0; i--) {
    if (board[oldPosition[0]][i].piece === "")
      placeCanMove.push([oldPosition[0], i]);
    if (board[oldPosition[0]][i].piece !== "") {
      if (currentRook.color !== board[oldPosition[0]][i].color)
        placeCanMove.push([oldPosition[0], i]);
      break;
    }
  }

  return placeCanMove;
};

export const WhitePawnRules = (chessPiece, oldPosition, board) => {
  let placeCanMove = [];
  if (oldPosition[0] === 1) {
    if (board[2][oldPosition[1]].piece === "")
      placeCanMove.push([2, oldPosition[1]]);
    if (board[3][oldPosition[1]].piece === "")
      placeCanMove.push([3, oldPosition[1]]);
  } else {
    if (
      oldPosition[0] + 1 <= 7 &&
      oldPosition[1] <= 7 &&
      board[oldPosition[0] + 1][oldPosition[1]].piece === ""
    )
      placeCanMove.push([oldPosition[0] + 1, oldPosition[1]]);
  }
  if (
    oldPosition[0] + 1 <= 7 &&
    oldPosition[1] - 1 >= 0 &&
    board[oldPosition[0] + 1][oldPosition[1] - 1].color === "black"
  )
    placeCanMove.push([oldPosition[0] + 1, oldPosition[1] - 1]);

  if (
    oldPosition[0] + 1 <= 7 &&
    oldPosition[1] + 1 <= 7 &&
    board[oldPosition[0] + 1][oldPosition[1] + 1].color === "black"
  )
    placeCanMove.push([oldPosition[0] + 1, oldPosition[1] + 1]);
  return placeCanMove;
};

export const BlackPawnRules = (chessPiece, oldPosition, board) => {
  let placeCanMove = [];

  if (oldPosition[0] === 6) {
    if (board[4][oldPosition[1]].piece === "")
      placeCanMove.push([4, oldPosition[1]]);
    if (board[5][oldPosition[1]].piece === "")
      placeCanMove.push([5, oldPosition[1]]);
  } else {
    if (
      oldPosition[0] - 1 >= 0 &&
      oldPosition[1] <= 7 &&
      board[oldPosition[0] - 1][oldPosition[1]].piece === ""
    )
      placeCanMove.push([oldPosition[0] - 1, oldPosition[1]]);
  }
  if (
    oldPosition[0] - 1 >= 0 &&
    oldPosition[1] - 1 >= 0 &&
    board[oldPosition[0] - 1][oldPosition[1] - 1].color === "white"
  )
    placeCanMove.push([oldPosition[0] - 1, oldPosition[1] - 1]);

  if (
    oldPosition[0] - 1 >= 0 &&
    oldPosition[1] + 1 <= 7 &&
    board[oldPosition[0] - 1][oldPosition[1] + 1].color === "white"
  )
    placeCanMove.push([oldPosition[0] - 1, oldPosition[1] + 1]);

  return placeCanMove;
};
