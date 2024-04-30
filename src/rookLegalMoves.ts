import { Piece, SquareProps } from './boardSlice';

const rookLegalMoves = (board: { [keys: string]: SquareProps }, rook: Piece) => {
  if (!rook.currentPosition) return [];

  const [file, row]: [string, string] = [rook.currentPosition[0], rook.currentPosition[1]];
  const possibleMoves: string[] = [];

  const files: string[] = Array.from('ABCDEFGH');
  const rows: string[] = Array.from('12345678');
  const index = files.indexOf(file);
  const jindex = rows.indexOf(row);

  for (const f of files.slice(0, index).reverse()) {
    if (board[`${f}${row}`].occupied_by) {
      if (board[`${f}${row}`].occupied_by?.color !== rook.color) {
        possibleMoves.push(`${f}${row}`);
      }
      break;
    }
    possibleMoves.push(`${f}${row}`);
  }

  for (const f of files.slice(index + 1, files.length)) {
    if (board[`${f}${row}`]?.occupied_by) {
      if (board[`${f}${row}`].occupied_by?.color !== rook.color) {
        possibleMoves.push(`${f}${row}`);
      }
      break;
    }
    possibleMoves.push(`${f}${row}`);
  }

  for (const r of rows.slice(0, jindex).reverse()) {
    if (board[`${file}${r}`].occupied_by) {
      if (board[`${file}${r}`].occupied_by?.color !== rook.color) {
        possibleMoves.push(`${file}${r}`);
      }
      break;
    }
    possibleMoves.push(`${file}${r}`);
  }

  for (const r of rows.slice(jindex + 1, rows.length)) {
    if (board[`${file}${r}`].occupied_by) {
      if (board[`${file}${r}`].occupied_by?.color !== rook.color) {
        possibleMoves.push(`${file}${r}`);
      }
      break;
    }
    possibleMoves.push(`${file}${r}`);
  }

  return possibleMoves;
};

export default rookLegalMoves;
