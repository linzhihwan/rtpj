import NavBar from "./components/NavBar";

// src/App.tsx
import { useState } from "react";

type Player = "X" | "O" | null;

const winningLines = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // cols
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6],
];

function calculateWinner(board: Player[]): Player {
  for (const [a, b, c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function three() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(cell => cell !== null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return; // 이미 채워졌거나 승자 있으면 무시
    const nextBoard = board.slice();
    nextBoard[index] = xIsNext ? "X" : "O";
    setBoard(nextBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const status = winner
    ? `승자: ${winner}`
    : isDraw
    ? "무승부!"
    : `다음 차례: ${xIsNext ? "X" : "O"}`;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <NavBar /> 
      <h1>틱택토 (3x3)</h1>
      <div style={{ marginBottom: 10 }}>{status}</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gap: 8,
        }}
      >
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: 80,
              height: 80,
              fontSize: 28,
              fontWeight: "bold",
              cursor: cell || winner ? "not-allowed" : "pointer",
            }}
          >
            {cell}
          </button>
        ))}
      </div>

      <button onClick={resetGame} style={{ marginTop: 16 }}>
        리셋
      </button>
    </div>
  );
}

export default three;

