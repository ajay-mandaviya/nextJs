import { useState } from "react";
import Square from "./Box";
import { calculateWinner } from "@/utils";

function Board({ isNext, squares, onPlay }: any) {
  // const [isNext, setIsNext] = useState<boolean>(true);
  // const [squares, setSquares] = useState<string[] | null[]>(
  //   Array(9).fill(null)
  // );
  const getWinnder = calculateWinner(squares);

  const handlePress = (index: number) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const updateBox = squares.slice();
    if (isNext) {
      updateBox[index] = "X";
    } else {
      updateBox[index] = "O";
    }
    onPlay(updateBox);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner:" + winner;
  } else {
    status = "Next player" + (isNext ? "x" : "O");
  }
  return (
    <>
      <h4>{status}</h4>
      <div className="row">
        <Square
          value={squares[0]}
          onClick={() => {
            handlePress(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            handlePress(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            handlePress(2);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={squares[3]}
          onClick={() => {
            handlePress(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            handlePress(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            handlePress(5);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={squares[6]}
          onClick={() => {
            handlePress(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            handlePress(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            handlePress(8);
          }}
        />
      </div>
    </>
  );
}

// export default Board;
function GameBoard() {
  const [isNext, setIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<any[]>([Array(9).fill(null)]);
  // keep check user current move
  const [currentMove, setCurrentMove] = useState(0);
  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];
  function handlePlay(nextSqure: any) {
    // setHistory([...history, nextSqure]);
    //
    const nextHistroy = [...history.slice(0, currentMove + 1), nextSqure];
    setHistory(nextHistroy);
    setIsNext(!isNext);
    setCurrentMove(nextHistroy.length - 1);
  }
  function jumpTo(nextMove: any) {
    setCurrentMove(nextMove);
    setIsNext(nextMove % 2 === 0);
  }

  return (
    <>
      <div>
        <Board isNext={isNext} squares={currentSquares} onPlay={handlePlay} />
        <div>
          <ol>
            {history.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => {
                      jumpTo(index);
                    }}
                  >
                    {index > 0 ? `Go to${index}` : "Game starr"}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default GameBoard;
