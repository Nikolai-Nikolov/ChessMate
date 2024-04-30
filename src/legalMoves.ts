import { Piece, SquareProps } from './boardSlice';
import pawnLegalMoves from './pawnLegalMoves';
import knightLegalMoves from './knightLegalMoves';
import rookLegalMoves from './rookLegalMoves';

const legalMoves = (board: { [keys:string]: SquareProps }, piece: Piece) => {
  switch (piece.type) {
    case 'pawn':
      return pawnLegalMoves(board, piece);
    case 'knight':
      return knightLegalMoves(board, piece);
    case 'rook':
      return rookLegalMoves(board, piece);
    default:
      return [];
  }
};

export default legalMoves;
