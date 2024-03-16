import React from 'react';
import Square from './Square';

interface SquareProps {
  x: number;
  y: number;
  index: string;
}

interface BoardProps {}

const Board: React.FC<BoardProps> = () => {
  let squares: SquareProps[] = [];

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      squares.push({ x, y, index: '' + x + y });
    }
  }

  return (
    <div className="Board">
      {squares.map((square) => {
        return (
          <span key={square.index}>
            <Square square={square} />
          </span>
        );
      })}
    </div>
  );
};

export default Board;
