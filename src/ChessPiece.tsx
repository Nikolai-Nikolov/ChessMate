type PieceProps = {
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'white' | 'black';
};

const ChessPiece = ({ type, color }: PieceProps) => {
  const svg_name: string = `${color}_${type}.svg`;

  return (
      <div className="absolute size-24">
        <img className="size-24" src={`../assets/chess_pieces/${svg_name}`} alt={svg_name} />
      </div>
  );
};

export default ChessPiece;
