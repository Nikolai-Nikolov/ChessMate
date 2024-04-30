import { createRoot } from 'react-dom/client';
import Board from './Board';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home></Home>
      <Board asViewedByWhite={true} />
    </Provider>
  );
};

const container: HTMLElement | null = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
