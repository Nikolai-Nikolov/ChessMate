import { Piece, SquareProps } from './boardSlice';

const knightLegalMoves = (board: { [key:string]: SquareProps }, knight: Piece) => {
  if (!knight.currentPosition) return [];

  const [file, row]: [string, number] = [knight.currentPosition[0], Number(knight.currentPosition[1])];
  const possibleMoves: string[] = [];

  const getChar = (n: number): string => {
    return String.fromCharCode(file.charCodeAt(0) + n);
  };

  const files: string[] = [getChar(-2), getChar(-1), getChar(1), getChar(2)];

  files.forEach((f, i) => {
    if (f >= 'A' && f <= 'H') {
      let mod: number;
      if (i === 0 || i === 3) {
        mod = 1;
      } else {
        mod = 2;
      }
      if (row - mod >= 1) {
        possibleMoves.push(`${f}${row - mod}`);
      }
      if (row + mod <= 8) {
        possibleMoves.push(`${f}${row + mod}`);
      }
    }
  });

  const moves: string[] = Object.keys(board).filter(
    (square) => possibleMoves.includes(square) && !board[square].occupied_by
  );

  const takes = possibleMoves.filter(
    (square) =>
      'ABCDEFGH'.includes(square[0]) &&
      (board[square].occupied_by?.color || knight.color) !== knight.color
  );


  return moves.concat(takes);
};

export default knightLegalMoves;
