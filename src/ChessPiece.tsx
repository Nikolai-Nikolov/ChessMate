import Draggable, { DraggableEvent } from 'react-draggable';
import { movePiece } from './boardSlice';
import { useAppDispatch, useAppSelector } from './hooks';
import legalMoves from './legalMoves';
import { useRef } from 'react';

type PieceProps = {
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'white' | 'black';
  currentPosition: string;
};

const ChessPiece = ({ type, color, currentPosition }: PieceProps) => {
  const svg_name: string = `${color}_${type}.svg`;
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.board.value);
  const ref = useRef<HTMLDivElement>(null);

  const handleDragStop = (e: DraggableEvent) => {
    const target = e.target as HTMLElement;

    const moves = legalMoves(board, { type, color, currentPosition });
    if (target && target.parentElement) {
      target.parentElement.style.pointerEvents = 'auto';
      if (ref.current?.style) ref.current.style.pointerEvents = 'auto';
      dispatch(
        movePiece({
          to: target?.parentElement?.id || target?.parentElement?.parentElement?.id,
          from: currentPosition,
          piece: { type, color, currentPosition },
          moves
        })
      );
    }
  };

  return (
    <Draggable
      handle=".handle"
      position={{ x: 0, y: 0 }}
      onStart={
        () => { 
          if (ref.current?.style) ref.current.style.pointerEvents = 'none';
        }
      }
      onStop={(e) => handleDragStop(e)}
    >
      <div className="handle size-24" ref={ref}>
        <img
          className="pointer-events-none size-24"
          src={`/assets/chess_pieces/${svg_name}`}
          alt={svg_name}
          draggable="false"
        />
      </div>
    </Draggable>
  );
};

export default ChessPiece;
