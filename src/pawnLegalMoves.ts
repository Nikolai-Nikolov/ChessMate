import { Piece, SquareProps } from './boardSlice';

const pawnLegalMoves = (board: { [key: string]: SquareProps }, pawn: Piece) => {
  if (!pawn.currentPosition) return [];

  const [file, row]: [string, number] = [pawn.currentPosition[0], Number(pawn.currentPosition[1])];
  let takeMoves: string[] = [];
  let possibleMoves: string[] = [];

  if (pawn.color === 'white') {
    possibleMoves = [`${file}${row + 1}`];
    if (row === 2) {
      possibleMoves.push(`${file}${row + 2}`);
    }
    takeMoves = [
      `${String.fromCharCode(file.charCodeAt(0) + 1)}${row + 1}`,
      `${String.fromCharCode(file.charCodeAt(0) - 1)}${row + 1}`
    ];
  }

  if (pawn.color === 'black') {
    possibleMoves = [`${file}${row - 1}`];
    if (row === 7) {
      possibleMoves.push(`${file}${row - 2}`);
    }
    takeMoves = [
      `${String.fromCharCode(file.charCodeAt(0) + 1)}${row - 1}`,
      `${String.fromCharCode(file.charCodeAt(0) - 1)}${row - 1}`
    ];
  }

  const moves: string[] = Object.keys(board).filter(
    (square) => possibleMoves.includes(square) && !board[square].occupied_by
  );

  const takes = takeMoves.filter(
    (square) =>
      'ABCDEFGH'.includes(square[0]) &&
      (board[square].occupied_by?.color || pawn.color) !== pawn.color
  );

  return moves.concat(takes);
};

export default pawnLegalMoves;
