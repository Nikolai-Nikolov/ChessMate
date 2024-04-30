import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Piece = {
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'white' | 'black';
};

export type SquareProps = {
  id: string;
  occupied_by: Piece | null;
};

export type BoardState = {
  value: SquareProps[];
};

const boardSquares = Array.from('ABCDEFGH').map((file) => {
  return Array.from('12345678').map((row) => {
    return `${file}${row}`;
  });
});

const initialState: BoardState = {
  value: boardSquares.flat().map((square) => {
    return {
      id: square,
      occupied_by: null
    };
  })
};

const initializeBoard = (state: BoardState) => {
  state.value.map((square) => {
    switch (true) {
      case /2/.test(square.id):
        square.occupied_by = { type: 'pawn', color: 'white' };
        break;
      case /7/.test(square.id):
        square.occupied_by = { type: 'pawn', color: 'black' };
        break;
      case ['A1', 'H1'].includes(square.id):
        square.occupied_by = { type: 'rook', color: 'white' };
        break;
      case ['A8', 'H8'].includes(square.id):
        square.occupied_by = { type: 'rook', color: 'black' };
        break;
      case ['B1', 'G1'].includes(square.id):
        square.occupied_by = { type: 'knight', color: 'white' };
        break;
      case ['B8', 'G8'].includes(square.id):
        square.occupied_by = { type: 'knight', color: 'black' };
        break;
      case ['C1', 'F1'].includes(square.id):
        square.occupied_by = { type: 'bishop', color: 'white' };
        break;
      case ['C8', 'F8'].includes(square.id):
        square.occupied_by = { type: 'bishop', color: 'black' };
        break;
      case square.id == 'D1':
        square.occupied_by = { type: 'queen', color: 'white' };
        break;
      case square.id == 'E1':
        square.occupied_by = { type: 'king', color: 'white' };
        break;
      case square.id == 'D8':
        square.occupied_by = { type: 'queen', color: 'black' };
        break;
      case square.id == 'E8':
        square.occupied_by = { type: 'king', color: 'black' };
        break;
    }
  });
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    initialize: (state) => initializeBoard(state)
  }
});

export const { initialize } = boardSlice.actions;

export default boardSlice.reducer;
