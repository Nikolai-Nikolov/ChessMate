import { initialize } from './boardSlice';
import { useAppDispatch } from './hooks';

const Home = () => {
  const dispatch = useAppDispatch();
  return <button className="m-8 p-4 rounded-md bg-lime-200" onClick={() => dispatch(initialize())}>New Board</button>;
};

export default Home;
