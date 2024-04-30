import Square from './Square';
import { Piece, SquareProps } from './boardSlice';
import { useAppSelector } from './hooks';

const files: string[] = Array.from('ABCDEFGH');
const rows: string[] = Array.from('12345678');

const Squares = ({ asViewedByWhite }: { asViewedByWhite: boolean }) => {
  const [firstRow, firstCol] = asViewedByWhite ? [0, 0] : [7, 7];
  const className = 'flex flex-col-reverse';

  const board = useAppSelector((state) => state.board.value);

  const getSquareProps = (id: string): Piece | null => {
    const field: SquareProps | null = board[id];
    
    return field?.occupied_by ?? null;
  };

  return files.map((file, i) => {
    return (
      <div key={i} className={className}>
        {rows.map((row, j) => {
          return (
            <Square key={file+row}
              {...{
                file,
                row,
                firstRow,
                firstCol,
                i,
                j,
                occupied_by: getSquareProps(`${file}${row}`)
              }}
            />
          );
        })}
      </div>
    );
  });
};

export default Squares;
