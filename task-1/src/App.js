import logo from './logo.svg';
import './App.css';
// Декларативный стиль: описание структуры компонента React.
function App() {
  // Императивный стиль: прямые манипуляции с объектом Date.
  const currentYear = new Date().getFullYear(); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Декларативный стиль: использование переменной currentYear в JSX. */}
        <p>{currentYear}</p>
      </header>
    </div>
  );
}

export default App;