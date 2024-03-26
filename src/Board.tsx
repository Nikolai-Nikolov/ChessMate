import Squares from './Squares';

const Board = ({asViewedByWhite=true}: {asViewedByWhite: boolean}) => {
  return (
    <div className={`flex border-solid border-2 border-yellow-700 flex-row${asViewedByWhite ? '' : '-reverse'}`}>
      <Squares asViewedByWhite={asViewedByWhite} />
    </div>
  );
};

export default Board;
