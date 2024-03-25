import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Welcome to ChessMate</h1>
    </div>
  );
};

const container: HTMLElement | null = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
