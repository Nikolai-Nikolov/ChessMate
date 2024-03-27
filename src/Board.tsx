import Squares from './Squares';
import { initialize } from './boardSlice';
import { useAppDispatch } from './hooks';

const Board = ({ asViewedByWhite = true }: { asViewedByWhite: boolean }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={`flex max-w-fit border-solid border-2 border-yellow-700 flex-row${asViewedByWhite ? '' : '-reverse'}`}
    >
      <Squares asViewedByWhite={asViewedByWhite} />
      <button onClick={() => dispatch(initialize())}>New Board</button>
    </div>
  );
};

export default Board;
