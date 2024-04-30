import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Piece = {
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'white' | 'black';
  currentPosition: string | null;
};

export type SquareProps = {
  occupied_by: Piece | null;
};

export type BoardState = {
  value: {
    [key:string]: SquareProps;
  }
};

export type MovePayload = {
  to: string | undefined;
  from: string;
  piece: Piece;
  moves: string[];
};

const boardSquares = Array.from('ABCDEFGH').map((file) => {
  return Array.from('12345678').map((row) => {
    return `${file}${row}`;
  });
});

const initializeState = () => {
  const obj: { [key:string]: SquareProps } = {};
  boardSquares.flat().forEach((id) => {
    obj[id] = { occupied_by: null}
  })
  return obj;
}

const initialState: BoardState = {
  value: initializeState()
}

const initializeBoard = (state: BoardState) => {
  for (const square in state.value) {
    switch (true) {
      case /2/.test(square):
        state.value[square].occupied_by = { type: 'pawn', color: 'white', currentPosition: square };
        break;
      case /7/.test(square):
        state.value[square].occupied_by = { type: 'pawn', color: 'black', currentPosition: square };
        break;
      case ['A1', 'H1'].includes(square):
        state.value[square].occupied_by = { type: 'rook', color: 'white', currentPosition: square };
        break;
      case ['A8', 'H8'].includes(square):
        state.value[square].occupied_by = { type: 'rook', color: 'black', currentPosition: square };
        break;
      case ['B1', 'G1'].includes(square):
        state.value[square].occupied_by = { type: 'knight', color: 'white', currentPosition: square };
        break;
      case ['B8', 'G8'].includes(square):
        state.value[square].occupied_by = { type: 'knight', color: 'black', currentPosition: square };
        break;
      case ['C1', 'F1'].includes(square):
        state.value[square].occupied_by = { type: 'bishop', color: 'white', currentPosition: square };
        break;
      case ['C8', 'F8'].includes(square):
        state.value[square].occupied_by = { type: 'bishop', color: 'black', currentPosition: square };
        break;
      case square == 'D1':
        state.value[square].occupied_by = { type: 'queen', color: 'white', currentPosition: square };
        break;
      case square == 'E1':
        state.value[square].occupied_by = { type: 'king', color: 'white', currentPosition: square };
        break;
      case square == 'D8':
        state.value[square].occupied_by = { type: 'queen', color: 'black', currentPosition: square };
        break;
      case square == 'E8':
        state.value[square].occupied_by = { type: 'king', color: 'black', currentPosition: square };
        break;
      default:
        state.value[square].occupied_by = null;
    }
  };
};

const move = (state: BoardState, payload: MovePayload) => {
  if (payload.from && payload.to && payload.from !== payload.to) {

    if (payload.from && payload.to && payload.moves.includes(payload.to)) {
      state.value[payload.from].occupied_by = null;
      state.value[payload.to].occupied_by = payload.piece;
    }
  }
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    initialize: (state) => initializeBoard(state),
    movePiece: (state, action: PayloadAction<MovePayload>) => move(state, action.payload)
  }
});

export const { initialize, movePiece } = boardSlice.actions;

export default boardSlice.reducer;
