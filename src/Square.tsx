import ChessPiece from './ChessPiece';
import { Piece } from './boardSlice';

type SquareProps = {
  file: string;
  row: string;
  firstRow: number;
  firstCol: number;
  i: number;
  j: number;
  occupied_by: Piece | null;
};

const Square = ({ file, row, firstRow, firstCol, i, j, occupied_by }: SquareProps) => {
  return (
    <div
      key={file+row}
      id={`${file}${row}`}
      className={`size-24 ${(i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0) ? 'bg-yellow-600' : 'bg-orange-100'}`}
    >
      <div className="relative min-h-full handle">
        {occupied_by ? <ChessPiece type={occupied_by.type} color={occupied_by.color} currentPosition={file+row}/> : null}
        {j === firstRow ? <sub className="absolute right-1 bottom-1 text-xs">{file}</sub> : null}
        {i === firstCol ? <sup className="absolute left-1 top-1 text-xs">{row}</sup> : null}
      </div>
    </div>
  );
};

export default Square;
