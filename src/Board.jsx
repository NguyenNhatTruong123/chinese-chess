import React, { useEffect, useState } from "react";
import "./App.css";
import "./piece";
import {
  WHITE_BISHOP,
  WHITE_KING,
  WHITE_KNIGHT,
  WHITE_QUEEN,
  WHITE_ROOK,
  WHITE_PAWN,
  BLACK_PAWN,
  BLACK_ROOK,
  BLACK_KNIGHT,
  BLACK_BISHOP,
  BLACK_QUEEN,
  BLACK_KING,
  RULES,
} from "./piece";

export const Board = () => {
  // const [board, setBoard] = useState([
  //   { piece: "車", color: "blue"},
  //   { piece: "馬", color: "blue"},
  //   { piece: "相", color: "blue"},
  //   { piece: "仕", color: "blue"},
  //   { piece: "将", color: "blue"},
  //   { piece: "仕", color: "blue"},
  //   { piece: "相", color: "blue"},
  //   { piece: "馬", color: "blue"},
  //   { piece: "車", color: "blue"},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "炮", color: "blue"},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "炮", color: "blue"},
  //   { piece: "", color: "" },
  //   { piece: "兵", color: "blue"},
  //   { piece: "", color: ""},
  //   { piece: "兵", color: "blue"},
  //   { piece: "", color: ""},
  //   { piece: "兵", color: "blue"},
  //   { piece: "", color: ""},
  //   { piece: "兵", color: "blue"},
  //   { piece: "", color: ""},
  //   { piece: "兵", color: "blue"},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "卒", color: "red"},
  //   { piece: "", color: ""},
  //   { piece: "卒", color: "red"},
  //   { piece: "", color: ""},
  //   { piece: "卒", color: "red"},
  //   { piece: "", color: ""},
  //   { piece: "卒", color: "red"},
  //   { piece: "", color: ""},
  //   { piece: "卒", color: "red"},
  //   { piece: "", color: ""},
  //   { piece: "炮", color: "red"},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "", color: ""},
  //   { piece: "炮", color: "red"},
  //   { piece: "", color: ""},
  //   { piece: "車", color: "red"},
  //   { piece: "馬", color: "red"},
  //   { piece: "相", color: "red"},
  //   { piece: "仕", color: "red"},
  //   { piece: "帥", color: "red"},
  //   { piece: "仕", color: "red"},
  //   { piece: "相", color: "red"},
  //   { piece: "馬", color: "red"},
  //   { piece: "車", color: "red"},
  // ]);

  const [board, setBoard] = useState([
    [
      { piece: WHITE_ROOK, color: "white" },
      { piece: WHITE_KNIGHT, color: "white" },
      { piece: WHITE_BISHOP, color: "white" },
      { piece: WHITE_QUEEN, color: "white" },
      { piece: WHITE_KING, color: "white" },
      { piece: WHITE_BISHOP, color: "white" },
      { piece: WHITE_KNIGHT, color: "white" },
      { piece: WHITE_ROOK, color: "white" },
    ],
    [
      { piece: WHITE_PAWN, color: "white" },
      { piece: WHITE_PAWN, color: "white" },
      { piece: WHITE_PAWN, color: "white" },
      { piece: WHITE_PAWN, color: "white" },
      { piece: WHITE_PAWN, color: "white" },
      { piece: WHITE_PAWN, color: "white" },
      { piece: WHITE_PAWN, color: "white" },
      { piece: WHITE_PAWN, color: "white" },
    ],
    [
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
    ],
    [
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
    ],
    [
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
    ],
    [
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
      { piece: "", color: "" },
    ],
    [
      { piece: BLACK_PAWN, color: "black" },
      { piece: BLACK_PAWN, color: "black" },
      { piece: BLACK_PAWN, color: "black" },
      { piece: BLACK_PAWN, color: "black" },
      { piece: BLACK_PAWN, color: "black" },
      { piece: BLACK_PAWN, color: "black" },
      { piece: BLACK_PAWN, color: "black" },
      { piece: BLACK_PAWN, color: "black" },
    ],
    [
      { piece: BLACK_ROOK, color: "black" },
      { piece: BLACK_KNIGHT, color: "black" },
      { piece: BLACK_BISHOP, color: "black" },
      { piece: BLACK_QUEEN, color: "black" },
      { piece: BLACK_KING, color: "black" },
      { piece: BLACK_BISHOP, color: "black" },
      { piece: BLACK_KNIGHT, color: "black" },
      { piece: BLACK_ROOK, color: "black" },
    ],
  ]);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e, i, j) => {
    e.dataTransfer.setData("oldRow", i);
    e.dataTransfer.setData("oldCol", j);
    e.currentTarget.classList.add("dragging");
    setIsDragging(true);
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove("dragging");
    setIsDragging(false);
  };

  const handleDragEnter = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.currentTarget.classList.add("highlight");
    }
  };

  const handleDragOver = (e) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  const handleDragLeave = (e) => {
    if (isDragging) {
      e.currentTarget.classList.remove("highlight");
    }
  };

  const handleDrop = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.currentTarget.classList.remove("highlight");
      const [oldCol, oldRow] = [
        parseInt(e.dataTransfer.getData("oldCol")),
        parseInt(e.dataTransfer.getData("oldRow")),
      ];

      const newPosition =
        e.target.id === "" ? e.target.parentElement.id : e.target.id;

      const [newRow, newCol] = [
        parseInt(newPosition.split("-")[0]),
        parseInt(newPosition.split("-")[1]),
      ];

      const oldPiece = board[oldRow][oldCol];

      if (oldCol === newCol && oldRow === newRow) return;

      const movesValid = RULES[oldPiece.piece](
        oldPiece,
        [oldRow, oldCol],
        board
      );

      if (
        movesValid.some(
          (subArray) =>
            JSON.stringify(subArray) === JSON.stringify([newRow, newCol])
        )
      ) {
        let newBoard = [...board];
        newBoard[newRow][newCol].piece = oldPiece.piece;
        newBoard[newRow][newCol].color = oldPiece.color;
        newBoard[oldRow][oldCol].piece = "";
        newBoard[oldRow][oldCol].color = "";

        setBoard(newBoard);
      } else {
        return;
      }
    }
  };

  const renderChessboard = () => {
    const rows = [];

    for (let i = 0; i < 8; i++) {
      const squares = [];

      for (let j = 0; j < 8; j++) {
        const squareColor = (i + j) % 2 === 0 ? "light" : "dark";
        squares.push(
          <div
            className={`small-square ${squareColor}`}
            id={`${i}-${j}`}
            key={`${i}-${j}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {renderChessPiece(i, j)}
          </div>
        );
      }

      rows.push(
        <div className="row" key={i}>
          {squares}
        </div>
      );
    }

    return rows;
  };

  const renderChessPiece = (i, j) => {
    let piece = [];
    piece.push(
      <div
        id={`${i}-${j}`}
        key={`${i}-${j}`}
        className={`chess-piece`}
        draggable
        onDragStart={(e) => handleDragStart(e, i, j)}
        onDragEnd={(e, i, j) => handleDragEnd(e, i, j)}
      >
        {board[i][j].piece}
      </div>
    );
    return piece;
  };

  return (
    <div className="outer-square">
      <div className="inner-square">{renderChessboard()}</div>
    </div>
  );
};

export default Board;
